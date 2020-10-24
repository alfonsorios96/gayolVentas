import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/vaadin-password-field.js';
import '@vaadin/vaadin-text-field/vaadin-email-field.js';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-upload/vaadin-upload.js';

class RegisterUser extends LitElement {
    
    static get properties() {
        return {
            name: String,
            email: String,
            role: String,
            password: String,
            username: String,
            img: String,
        };
    }

    constructor() {
        super();
        this.name = '';
        this.email = '';
        this.role = '';
        this.password = '';
        this.username = '';
    }

    render() {
        return html`
            <div>
                <vaadin-text-field class="form-control" label="Nombre"></vaadin-text-field>
                <vaadin-email-field class="form-control" label="Email"></vaadin-email-field>
                <vaadin-text-field class="form-control" label="Role"></vaadin-text-field>
                <vaadin-password-field class="form-control" label="Password"></vaadin-password-field>
                <vaadin-text-field class="form-control" label="Username"></vaadin-text-field>
                <vaadin-upload accept=".jpg" target="http://localhost:5000/api/v1/userImage">
                    <span slot="drop-label">Pura Imagen</span>
                </vaadin-upload>
                <vaadin-button @click="${this.register}">Editar</vaadin-button>
            </div>
        `;
    }

    async register(e) { //metodo manejador
        e.preventDefault();
        const [Nombre, Email, Role, Password, Username] = this.shadowRoot.querySelectorAll('.form-control');
        const body = JSON.stringify({ 
                name: Nombre.value, 
                email: Email.value,
                role: Role.value,
                password: Password.value,
                username: Username.value
            })
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body 
        }
        const registerSubmit = await (await fetch('http://localhost:5000/api/v1/auth/register', options)).json();
    }


}

window.customElements.define('register-user', RegisterUser)