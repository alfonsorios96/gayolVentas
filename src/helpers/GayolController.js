import { LitElement } from 'lit-element';

export class GayolController extends LitElement {
    
    static get properties() {
        return {
            
        };
    }

    constructor() {
        super();
    } 

    async __request( _endPoint = '' , _method = 'GET', _headers = {}, _body = {} ) {
        const serverUrl = localStorage.getItem('url') ? localStorage.getItem('url') : 'http://localhost:5000/api/v1';
        const body = JSON.stringify(_body);
        let options = {
            method: _method,
            headers: {
                'Content-Type': 'application/json',
                ..._headers
            }
        };

        if (_method === 'PUT' || _method === 'POST') {
            options = {
                ...options,
                body
            };
        }
        try {
            return await ( await fetch(`${serverUrl}/${_endPoint}`, options)).json();
        } catch (error) {
            return error;
        }
    }

    /* __authRequest(isLogged,cb) {
        const token = localStorage.getItem('token');
        if (isLogged && token && token !== '') {
            cb();
        }
        if (!isLogged && (!token || token === '')) {
            cb();
        }
    } */ 

    async __authRequest(isLogged,cb) {
        const token = localStorage.getItem('token');
        try {
            const verify = await this.__request(`auth/verify/${token}`);
            if (isLogged && verify.verify) {
                cb();
            }
            if (!isLogged && verify.success === false) {
                cb();
            }
        } catch (error) {
            console.log(error);
        }
    }
}

