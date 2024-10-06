import  { LitElement, html, css, nothing } from 'lit'

import { NavbarComponent } from './navbar-component'

import { HomepageComponent } from './homepage-component'

import { BioComponent } from './bio-component'

import { LitComponent } from './lit-component'

import { ReactComponent } from './react-component'

export class RootComponent extends LitElement {
    static get properties () {
        return {
            currentPage: {
                type: String
            },
        }
    }
static get styles() {
    return css`
    #root-container {
        background-color: #666;
    }
    `

}
    constructor() {
        super()
        this.currentPage = "homepage"
    }

    handlePageChange(e) {
        this.currentPage = e.detail
    }

    render() {
        let pageTemplate = nothing


        switch (this.currentPage) {
            case 'homepage':
                pageTemplate = html`<homepage-component></homepage-component>`
                break;
            case 'bio':
                pageTemplate = html`<bio-component></bio-component>`
                break;
            case 'lit':
                pageTemplate = html`<lit-component></lit-component>`
                break;
            case 'react':
                pageTemplate = html`<react-component></react-component>`
                break;
        }
        return html`
            <div id="root-container">
            <navbar-component @change-page="${this.handlePageChange}"></navbar-component>
            <h1>Este es el componente raiz</h1>
            ${pageTemplate}
    </div>`
    }
}

window.customElements.define('root-component',RootComponent)