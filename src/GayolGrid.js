import { LitElement, html, css } from 'lit-element';
import './CasaItem';

class GayolGrid extends LitElement {
    
    static get properties() {
        return {
            casas: Array,
            url: String
        };
    }

    static get styles() {
        return css`
            .cards {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 1rem;
            }
        `
    }

    constructor() {
        super();
        this.casas = [];
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.bringHouses();
    }

    render() {
        return html`
            <div class="cards">
                ${this.casas.map(casa => html`
                    <casa-item 
                        .casa_item="${casa}" 
                        @change-status="${this.chageStatus}"
                        @edit-house="${this.edith}">
                    </casa-item>
                `)}
            </div>
        `;
    }

    async chageStatus({ detail }) {
        console.log(detail);
        this.casas = this.casas.map(casa => {
            const { status, id } = casa;
            if (id === detail) {
                return { ...casa, status: !status}
            } else {
                return { ...casa }
            } 
        });
        await this.requestUpdate();
    }

    async edith({ detail }) {
        console.log(detail)
    }

    async bringHouses() {
        const { data } = await(await fetch('http://localhost:5000/api/v1/ListaVentas') ).json();
        this.casas = data;
    }
}

window.customElements.define('gayol-grid', GayolGrid)