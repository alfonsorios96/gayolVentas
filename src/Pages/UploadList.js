import { LitElement, html, css } from 'lit-element';

class UploadList extends LitElement {
    static get properties() {
        return {}
    }

    constructor() {
        super();
    }

    render() {
        return html`<h1>Upload</h1>`;
    }
}

window.customElements.define('upload-list', UploadList);