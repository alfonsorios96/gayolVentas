import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-button';
import { GayolController } from '../helpers/GayolController';

class SearchHouse extends GayolController {
    static get properties() {
        return {
        }
    }

    static get styles() {
        return css`
            .conteiner {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 5px;
            }

            vaadin-button {
                width: 100%;
                color: white;
                background-color: #3363ff;
            }
        `;
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="conteiner">
                <vaadin-text-field class="form-control" label="Id"></vaadin-text-field>
                <vaadin-text-field class="form-control" label="Precio"></vaadin-text-field>
                <vaadin-text-field class="form-control" label="Direccion"></vaadin-text-field>
                <vaadin-text-field class="form-control" label="Municipio"></vaadin-text-field>
                <vaadin-text-field class="form-control" label="Estado"></vaadin-text-field>
            </div>
            <vaadin-button @click="${this._serch}">Buscar</vaadin-button>
        `;
    }

    async _serch(e) {
        e.preventDefault();
        const [Id, Precio, Direccion, Municipio, Estado] = this.shadowRoot.querySelectorAll('.form-control');
        const body = {
            idLista: Id,
            price: Precio,
            direccion: Direccion,
            municipio: Municipio,
            estado: Estado
        }

        const findHouse = await this.__request('/search', 'POST', {}, body);
        this.dispatchEvent(new CustomEvent('search-propertie', {
            detail: {
                data: findHouse
            }
        }))
    }

}

window.customElements.define('search-house', SearchHouse);