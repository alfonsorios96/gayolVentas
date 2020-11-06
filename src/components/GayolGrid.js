import { LitElement, html, css } from 'lit-element';
import './CardHose';

class GayolGrid extends LitElement {
    
    static get properties() {
        return {
            houses: Array
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
        this.houses = [];
    }

    firstUpdated(changeProperties) {
        this.houses = [
            {
                img: 'https://img.autocosmos.com/noticias/fotosprinc/NAZ_531851e7cb744d8e888dc802f1603cb4.jpg',
                title: 'el poncho',
                description: 'esta pelon',
                sub_title: 'pelonchas',
                status: true,
                address: 'calle bosques de argelia 54',
                suburb: 'bosques de aragon',
                town: 'Nezayork',
                state: 'Queretaro'
            }
        ]
    }


    render() {
        return html`
            <div class="cards">
                ${this.houses.map(house => html`
                    <card-house .img="${house.img}"
                                .description="${house.description}"
                                .status="${house.status}"
                                .title="${house.title}"
                                .sub_title="${house.subTitle}"
                                .address="${house.address}"
                                .suburb="${house.suburb}"
                                .state="${house.state}">
                    </card-house>
                `)}
            </div>
        `;
    }

    async chageStatus({ detail }) {
        await this.requestUpdate();
    }

    async edith({ detail }) {
        console.log(detail)
    }

    async bringHouses() {
        const { data } = await(await fetch('http://localhost:5000/api/v1/ListaVentas') ).json();
    }
}

window.customElements.define('gayol-grid', GayolGrid)