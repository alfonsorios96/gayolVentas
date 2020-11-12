import { LitElement, html, css } from 'lit-element';

class ListPage extends LitElement {
    static get properties() {
        return {}
    }

    constructor() {
        super();
    }

    render() {
        return html`<h1>List Page</h1>`;
    }
}

window.customElements.define('list-page', ListPage);