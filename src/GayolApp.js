import { LitElement, html, css } from 'lit-element';
import './components/GayolGrid';
import './login/RegisterUser';
import './components/ListComponent';
import './login/LoginUser';
import './Pages/PrincipalPage';
import { GayolController } from './helpers/GayolController';

class GayolApp extends GayolController {

    static get properties() {
        return {
            view: String
        };
    }

    static get styles() {
        return css`
        `
    }

    constructor() {
        super();
        this.view = 'login';
    }

    render() {
        return html`
            ${this.view === 'login' ? html`
                <login-user @login-success="${this._accessApp}"></login-user>
            `: ''}
            ${this.view === 'dashboard' ? html`
                <principal-page @logout-request="${this._logOut}"></principal-page>
            `: ''}
            
        `;
    }

    updated() {
        this.__authRequest(true,() => {
            this.view = 'dashboard';
        })
    }

    _accessApp() {
        this.__authRequest(true, () => {
            this.view = 'dashboard';
        })
    }

    _logOut() {
        localStorage.removeItem('token');
        this.view = 'login';
    }
}


window.customElements.define('gayol-app', GayolApp)