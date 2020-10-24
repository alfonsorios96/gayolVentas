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
}

