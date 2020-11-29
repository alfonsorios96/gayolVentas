import { LitElement, html } from 'lit-element';

class NotFoundPage extends LitElement {

    render() {
        return html`
            <h2>Ups!! No encontramos la página que buscabas</h2>
            <a href="/">Regresar</a>  
        `;
    }
}

window.customElements.define('not-found-page', NotFoundPage);