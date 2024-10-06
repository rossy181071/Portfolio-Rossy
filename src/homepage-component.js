import { LitElement, html, css } from "lit";

export class HomepageComponent extends LitElement {
    static get properties() {
        return {
            title: { type: String },
            name:{ type: String },
            paragraph: { type: String }, 
            paragraph2: { type: String }, 
            
        }
    }


    constructor() {
        super()
        this.title = "Bienvenido a mi portfolio"
        this.name = "Rossy"
        this.paragraph = html`Soy <strong>${this.name}</strong> y este es mi portfolio donde muestro un poco de mis habilidades y conocimientos como desarrollador web y mi forma de Ser como persona`
        this.paragraph2 = html`Me considero una Persona responsable y trabajadora, me gusta llegar temprano a mis compromisos`
        this.paragraph3 = html`Entrego mis trabajos en tiempo y forma`
        this.paragraph4 = html`Me gusta trabajar en equipo y tener la actitud positiva con mis compa;eros y superiores`
        this.paragraph5 = html`Estoy tomando un curso de ingenieria de Software con duracion de 2a&os`
        this.paragraph6 = html`El curso es realizado por uno de los mejores Ingenieros de Software Ing. Dylan Raul Sanchez Lopez en el cual hemos aprendido a relizar paginas en LitElement utilizando html, css,web components` 
    }

    static get styles() {
        return css`
        #homepage-container {
            background-color: #6666cc;

            padding: 2vw;
        }
        `
    }

    render() {
        return html`
        <div id="homepage-container">
            <h1>${this.title}</h1>
            <p>${this.paragraph}</p>
            <p>${this.paragraph2}</p>
            <p>${this.paragraph3}</p>
            <p>${this.paragraph4}</p>
            <p>${this.paragraph5}</p>
            <p>${this.paragraph6}</p>
        </div>
        `
    }
}



window.customElements.define('homepage-component', HomepageComponent)