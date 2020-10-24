import { LitElement, html, css } from 'lit-element';
import '@material/mwc-switch';
import '@vaadin/vaadin-button';
import '@material/mwc-icon';


class CasaItem extends LitElement {
    
    static get properties() {
        return {
            casa_item: Object
        };
    }

    static get styles() {
        return css`
        .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            width: 300px;
            max-height: 300px
            border-radius: 5px;
        }


        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
        .tools {
            margin: 3px;
        }
        
        img {
            border-radius: 5px 5px 0 0;
        }
        
        .container {
            padding: 2px 16px;
        }

        .vendida {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            width: 300px;
            max-height: 300px
            border-radius: 5px;
            background-color: #D4D5D4;
        }
        vaadin-button {
            margin-left: 5px;
        }
        `
    }

    constructor() {
        super();
        this.casa_item = {};
    }

    render() {
        return html`
        <div class="${this.casa_item.status? 'card' : 'vendida'}">
            <img src="${this.casa_item.img}" alt="${this.casa_item.numero}" style="width:100%">
            <div class="container">
                <h4><b>Descripción</b></h4> 
                <div class="tools">
                    <mwc-switch 
                        ?checked="${this.casa_item.status}" 
                        @change="${this.change}" 
                        casaId="${this.casa_item.id}">
                    </mwc-switch>
                    <vaadin-button>Editar</vaadin-button>
                </div>
                <hr/>
                <p>Calle: ${this.casa_item.calle}</p> 
                <p>Colonia: ${this.casa_item.colonia}</p> 
                <p>Numero: ${this.casa_item.numero}</p> 
            </div>
        </div>
        `;
    }

    handleEdit(event) {
        this.dispatchEvent(new CustomEvent('edit-house', {
            detail: {
                calle: this.casa_item.calle,
                colonia: this.casa_item.colonia,
                numero: this.casa_item.numero,
                telefono: this.casa_item.telefono,
            }
        }))
    }

    change(e) {
        const id = e.currentTarget.getAttribute('casaId');
        console.log(id);
        this.dispatchEvent(new CustomEvent('change-status', {
            detail: id
        }))
    }
}

window,customElements.define('casa-item', CasaItem)