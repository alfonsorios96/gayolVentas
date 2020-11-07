import { LitElement, html, css } from 'lit-element';
import { GayolController } from '../helpers/GayolController';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column';


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
        /*  const grid = this.shadowRoot.querySelector('vaadin-grid');
        this.__request('http://localhost:5000/api/v1/ListaVentas')
            .then(resp => resp.json())
            .then(data => console.log(data)) */
        this._demoTable();
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

    _demoTable() {
        const data = [
            { firstName: 'Alex', lastName: 'Soto' },
            { firstName: 'Cari', lastName: 'Torres' },
            { firstName: 'Ernesto', lastName: 'Guerrero' }
        ];

        const table = this.shadowRoot.querySelector('vaadin-grid')
        table.items = data;
    }

}

window.customElements.define('list-component', ListComponent)