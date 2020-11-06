import { LitElement, html, css } from 'lit-element';
import './components/GayolGrid';
import './login/RegisterUser';
import './components/ListComponent';
import './login/LoginUser';
import './Pages/PrincipalPage';

class GayolApp extends LitElement {

    static get properties() {
        return {
            
        };
    }

    static get styles() {
        return css`
        `
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <principal-page></principal-page>
        `;
    }
}


window.customElements.define('gayol-app', GayolApp)