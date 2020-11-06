import { LitElement, html, css } from 'lit-element';
import { GayolController } from '../helpers/GayolController';
import '@vaadin/vaadin-login';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-button';

class LoginUser extends GayolController {
    static get properties() {
        return {
            username: String,
            password: String
        }
    }

    static get styles() {
        return css``;
    }

    constructor() {
        super();
    }

    async update(changeProperties) {
        super.update(changeProperties);
        if (changeProperties.has('username') && changeProperties.has('password')) {
            const _change = changeProperties.get('username');
            console.log(_change)
            await this.requestUpdate(); 
        }
    }

    render() {
        return html`
            <vaadin-login-overlay opened
                    title="GayolApp" description="" 
                    @login="${this.logIn}">
            </vaadin-login-overlay>
            <vaadin-dialog id="dialog"></vaadin-dialog>
        `;
    }

    async logIn({ detail }) {
        try {
            this.username = detail.username;
            this.password = detail.password;
            let body = {
                email: this.username,
                password: this.password
            }
            const LoginUser = await this.__request('auth/login', 'POST', {}, body);
            if (!LoginUser.success) {
                const dialog = this.shadowRoot.querySelector('#dialog');
                dialog.renderer = (root, _dialog) => {
                    if (!root.firstElementChild)  {
                        const message = document.createElement('p');
                        message.textContent = `${LoginUser.message}`;
                        const close = document.createElement('vaadin-button');
                        close.textContent = 'Close';
                        close.addEventListener('click', (e) => {
                            e.preventDefault();
                            dialog.opened = false;
                        });

                        root.appendChild(message);
                        root.appendChild(close);
                    }
                }
                dialog.opened = true;
                const loginForm = this.shadowRoot.querySelector('vaadin-login-overlay');
                loginForm.error = true;
                loginForm.disabled = false;
            }
            localStorage.setItem('token', LoginUser.token);
            //TODO: preguntar como navegar a otro componente
            // FIXME: para crear elementos con document y no con shadowRoot
            await this.requestUpdate();
        } catch (error) {
            console.log(error, 'error de login');
        }
    }

    _forgotPassword() {}
}


window.customElements.define('login-user', LoginUser);