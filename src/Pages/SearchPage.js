import { LitElement, html, css } from 'lit-element';

class SearchPage extends LitElement {
    static get properties() {
        return {}
    }

    constructor() {
        super();
    }

    render() {
        return html`<h1>Search</h1>`;
    }
}

window.customElements.define('search-page', SearchPage);