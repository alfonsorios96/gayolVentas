import { LitElement, html, css } from 'lit-element';
import './components/GayolGrid';
import './login/RegisterUser';
import './components/ListComponent';
import './login/LoginUser';
import './Pages/DashboardPage';
import { GayolController } from './helpers/GayolController';


class GayolApp extends GayolController {

    static get properties() {
        return {
            page: { type: String }
        };
    }

    static get styles() {
        return css`
        `
    }

    constructor() {
        super();
        this.page = 'login';
    }

    async firstUpdated() {
        try {
            const resolve = await fetch('http://localhost:5000/api/v1/ListaVentas/exceptions', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    id: 3
                })
            })

            console.log(resolve);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        // TODO: REFACTOR DE RUTAS
        return html`
            ${this.page === 'login' ? html`
                <login-user @login-success="${this._accessApp}"></login-user>
            `: ''}
            ${this.page === 'dashboard' ? html`
                <dashboard-page @logout-request="${this._logOut}"></dashboard-page>
            `: ''}
            
        `;
    }

    async updated() {
        await this.__authRequest(true,() => {
            this.page = 'dashboard';
        });
    }

    //FIXME: PREGUNTAR COMO QUITAR EL ERROR DE LA PRIMERA LLAMADA

    async _accessApp() {
        await this.__authRequest(true,() => {
            this.page = 'dashboard';
        });
    }

    _logOut() {
        localStorage.removeItem('token');
        this.page = 'login';
    }
}


window.customElements.define('gayol-app', GayolApp)