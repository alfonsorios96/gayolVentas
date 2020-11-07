import { LitElement, html, css } from 'lit-element';
import '../components/GayolGrid';
import '../components/SearchHouse';
import '@vaadin/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-drawer-toggle';
import '@vaadin/vaadin-icons';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-tabs/vaadin-tab';
import '@vaadin/vaadin-tabs/vaadin-tabs';
import { GayolController } from '../helpers/GayolController';


class PrincipalPage extends GayolController {
    static get properties() {
        return {}
    }

    static get styles() {
        return css`
            h1 {
                text-align: center;
            }
        `;
    }

    constructor() {
        super();
    }

    render() {
        return html`
<vaadin-app-layout>
    <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle>
    <img slot="navbar" src="https://i.imgur.com/GPpnszs.png" alt="Vaadin Logo" width="100" height="31" referrerpolicy="no-referrer">
    <vaadin-tabs slot="drawer" orientation="vertical" theme="minimal" style="margin: 0 auto; flex: 1;">
        <vaadin-tab>
            <iron-icon icon="vaadin:home"></iron-icon>
            Page 1
        </vaadin-tab>
        <vaadin-tab>
            <iron-icon icon="vaadin:list"></iron-icon>
            Page 2
        </vaadin-tab>
        <vaadin-tab>
            <iron-icon icon="vaadin:options"></iron-icon>
            Page 3
        </vaadin-tab>
        <vaadin-tab>
            <iron-icon icon="vaadin:question"></iron-icon>
            Page 4
        </vaadin-tab>
        <vaadin-tab @click="${this.logOut}">
            <iron-icon icon="vaadin:question"></iron-icon>
            Cerrar
        </vaadin-tab>
    </vaadin-tabs>

    <div class="content">
        <search-house></search-house>
        <h1>Top 10</h1>
        <gayol-grid></gayol-grid>
    </div>
</vaadin-app-layout>
        `;
    }

    updated() {
        this.__authRequest(false,() => {
            this.dispatchEvent(new CustomEvent('logout-request'));
        })
    }

    logOut() {
        this.dispatchEvent(new CustomEvent('logout-request'));
    }
}

window.customElements.define('principal-page', PrincipalPage);