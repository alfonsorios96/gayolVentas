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
        this.houses = [
            { 
                title: 'Batman', 
                description: 'vigilanete d ela noche, mejor detective de todo el mundo, mejor amigo y superheroe del mundo', 
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdOdfOJxZoOCwYDzjjyuiAzWuyTvU1-nPSmA&usqp=CAU',
                subTitulo: 'Bruce Wayne',
                status: false,
                calle: 'bosques',
                colonia: 'aragon',
                numero: 52
            },
            { 
                title: 'Superman', 
                description: 'el hombre de acero , agente que viene de krypton, hojo de Jor-El', 
                img: 'https://www.cuartomundo.cl/wp-content/uploads/2020/01/bendis-is-here.png',
                subTitulo: 'Clark Kent',
                status: false,
                calle: 'bosques',
                colonia: 'aragon',
                numero: 52
            },
            { 
                title: 'flash', 
                description: 'Flash (también conocido por su apodo "El Velocista Escarlata") es un superhéroe de DC Comics que posee una rapidez sobrehumana, la cual incluye la habilidad de correr a gran velocidad, reflejos sobrehumanos y la capacidad de violar algunas leyes de la física.', 
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt54FCheTM7MFjb381QgqdalxGJWLrT1PVpw&usqp=CAU',
                subTitulo: 'Barry Allen',
                status: false,
                calle: 'bosques',
                colonia: 'aragon',
                numero: 52
            }
        ];
    }


    render() {
        return html`
            <div class="cards">
                ${this.houses.map(house => html`
                    <card-house .img="${house.img}"
                                .description="${house.description}"
                                .status="${house.status}"
                                .title="${house.title}"
                                .sub_title="${house.subTitle}">
                        <div slot="calle">Calle: ${house.calle}</div>
                        <div slot="colonia">Colonia: ${house.colonia}</div>
                        <div slot="numero">Numero: ${house.numero}</div>
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