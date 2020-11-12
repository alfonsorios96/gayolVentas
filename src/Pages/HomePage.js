import { LitElement, html, css } from 'lit-element';
import '../components/SearchHouse';
import '../components/GayolGrid';
class HomePage extends LitElement {
    static get properties() {
        return {
            
        }
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
    // TODO: DARA FUNCIONALIDAD A SEARCH CON ENDPOINT Y FUNCIONALIODAD DINAMICA AL GRID
    render() {
        return html`
            <search-house></search-house>
                <h1>Top 10</h1>
            <gayol-grid></gayol-grid>
        `;
    }
}

window.customElements.define('home-page', HomePage);