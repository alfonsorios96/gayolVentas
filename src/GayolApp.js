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

    
    async _accessApp() {
        try {
            await this.__authRequest(true,() => {
                /* this.page = 'dashboard'; */
                console.log('entro esn acces')
                window.location = '/dashboard';
            });
        
        } catch (error) {
            console.error(error, 'error al accesar')
        }
    }

    _logOut() {
        localStorage.removeItem('token');
        this.page = 'login';
    }
}


window.customElements.define('gayol-app', GayolApp)