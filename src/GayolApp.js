import { LitElement, html, css } from 'lit-element';
import './GayolGrid';
import './login/RegisterUser';

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
            <register-user></register-user>
        `;
    }
}


window.customElements.define('gayol-app', GayolApp)