import { LitElement, html, css } from 'lit-element';
import { GayolController } from '../helpers/GayolController';
import '@vaadin/vaadin-grid/vaadin-grid.js';

class ListComponent extends GayolController {
    static get properties() {
        return {

        }
    }

    static get styles() {
        return css``;
    }

    constructor() {
        super();
    }

    firstUpdated(changeProperties) {
        const grid = this.shadowRoot.querySelector('vaadin-grid');
        this.__request('http://localhost:5000/api/v1/ListaVentas')
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

    render() {
        return html`
        <vaadin-grid theme="row-dividers" column-reordering-allowed multi-sort>
            <vaadin-grid-selection-column auto-select frozen></vaadin-grid-selection-column>
            <vaadin-grid-sort-column width="9em" path="firstName"></vaadin-grid-sort-column>
            <vaadin-grid-sort-column width="9em" path="lastName"></vaadin-grid-sort-column>
        </vaadin-grid>
        `;
    }



}

window.customElements.define('list-component', ListComponent)