import { LitElement, html, css } from 'lit-element';


class CardComponent extends LitElement {
    static get properties() {
        return {
            img: String,
            title: String,
            description: String,
            sub_title: String,
            status: Boolean,
            address: String,
            suburb: String,
            town: String,
            state: String,
        }
    }

    static get styles() {
        return css`
        :host {
            width: 420px;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            margin: 5px;
        } 
            .card {
                width: 400px;
                height: 250px;
                display: grid;
                grid-template-columns: 45% 55%;
                grid-gap: 5px;
                font-family: roboto;
                border-radius: 18px;
                background: white;
                box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
                text-align: center;
                transition: 0.5s ease;
                cursor: pointer;
            }

            .card-image {
                grid-template: image;
            }

            .card-image img {
                width: 100%;
                height: 100%;
                background-size: cover;
                border-radius: 18px;
            }

            header {
                text-align: center;
                color: blue;
            }

            .content {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                grid-gap: 3px;
                padding: 5px;
            }

            .tools {
                margin-bottom: 5px;
                text-align: center
            }

            .card:hover {
                transform: scale(1);
                box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
            }

        `;
    }

    constructor() {
        super();
        this.img = '';
        this.title = '';
        this.description = '';
        this.sub_title = '';
        this.status = true;
        this.address = '';
        this.suburb = '';
        this.town = '';
        this.state = '';
    }

    // TODO: PONER ESTILOS EN LOS BOTONES DE VER MAS Y STATUS

    render() {
        return html`
            <div class="card">
                <div class="card-image">
                    <img src="${this.img}" alt="card-image"/>
                </div>
                <div class="card-container">
                    <header>
                        <h3>${this.title}</h3>
                        <h5>${this.sub_title}</h5>
                    </header>
                    <div class="content">
                        <label>Direccion: <b>${this.address}</b></label>
                        <label>Colonia: <b>${this.suburb}</b></label>
                        <label>Municipio: <b>${this.town}</b></label>
                        <label>Estado: <b>${this.state}</b></label>
                        <p>${this.description}</p>
                    </div>
                    <div class="tools">
                        <button>Change Status</button>
                        <button>Ver mas..</button>
                    </div>
                </div>
            </div>
        `;
    }
}

window.customElements.define('card-component', CardComponent);