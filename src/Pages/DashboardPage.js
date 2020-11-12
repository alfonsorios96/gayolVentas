import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-drawer-toggle';
import '@vaadin/vaadin-icons';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-tabs/vaadin-tab';
import '@vaadin/vaadin-tabs/vaadin-tabs';
import './HomePage';
import './ListPage';
import './SearchPage';
import './UploadList';
import '../login/RegisterUser';
import { GayolController } from '../helpers/GayolController';


class DashboardPage extends GayolController {
    static get properties() {
        return {
            page: String
        }
    }

    static get styles() {
        return css`
            h1 {
                text-align: center;
            }

            .content {
                padding: 10px;
            }
        `;
    }

    constructor() {
        super();
        this.page = 'home'
    }

    render() {
        return html`
<vaadin-app-layout>
    <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle>
    <img slot="navbar" src="https://i.imgur.com/GPpnszs.png" alt="Vaadin Logo" width="100" height="31" referrerpolicy="no-referrer">
    <vaadin-tabs slot="drawer" orientation="vertical" theme="minimal" style="margin: 0 auto; flex: 1;">
        <vaadin-tab tab-page="home" @click="${this.__changePage}">
            <iron-icon icon="vaadin:home"></iron-icon>
            Home
        </vaadin-tab>
        <vaadin-tab tab-page="list" @click="${this.__changePage}">
            <iron-icon icon="vaadin:list"></iron-icon>
            Lista
        </vaadin-tab>
        <vaadin-tab tab-page="upload-list" @click="${this.__changePage}">
            <iron-icon icon="vaadin:options"></iron-icon>
            Subir Listas
        </vaadin-tab>
        <vaadin-tab tab-page="search" @click="${this.__changePage}">
            <iron-icon icon="vaadin:search"></iron-icon>
            Buscador
        </vaadin-tab>
        <vaadin-tab tab-page="register" @click="${this.__changePage}">
            <iron-icon icon="vaadin:clipboard-text"></iron-icon>
            Registro
        </vaadin-tab>
        <vaadin-tab @click="${this.logOut}">
            <iron-icon icon="vaadin:out"></iron-icon>
            Cerrar Sesión
        </vaadin-tab>
    </vaadin-tabs>

        <div class="content">
            ${this.page === 'home' ? html` <home-page></home-page>` :''}
            ${this.page === 'list' ? html`<list-page></list-page>`: ''}
            ${this.page === 'upload-list' ? html`<upload-list></upload-list>` :''}
            ${this.page === 'search' ? html`<search-page></search-page>`: ''}
            ${this.page === 'register' ? html`<register-user></register-user>`: ''}
        </div>
</vaadin-app-layout>
        `;
    }

    // FIXME: FUNCINALIDAD DE ROUTING
    // BUG: REGRESH TOKEN

    async updated() {
        await this.__authRequest(false,() => {
            this.dispatchEvent(new CustomEvent('logout-request'));
        })
    }

    __changePage(e) {
        const page = e.currentTarget.getAttribute('tab-page');
        this.page = page;
    }

    logOut() {
        this.dispatchEvent(new CustomEvent('logout-request'));
    }
}

window.customElements.define('dashboard-page', DashboardPage);