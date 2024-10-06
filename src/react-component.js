import { LitElement, html, css } from "lit";

export class ReactComponent extends LitElement {
    static get properties()  {
        return {
            title: { type: String },
            paragraph: { type: String },
            imgUrl: { type: String },
            paragraph1: { type: String },
            paragraph2: { type: String }
        }
    }

    constructor () {
        super()
        this.title = "React"
        this.paragraph = "React es una libreria de frontend mantenida por Facebook, ahora llamado Meta"
        this.imgUrl = "https://th.bing.com/th/id/OIP.5PxGgx_aOWpTkul_D3nnbwHaEG?rs=1&pid=ImgDetMain"
        this.paragraph1 = "Para que sirve React en programacion :React es una biblioteca de JavaScript de código abierto para construir interfaces de usuario. Está basada en la componetización de la UI: la interfaz se divide en componentes independientes, que contienen su propio estado. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz.Esto hace que React sea una herramienta muy útil para construir interfaces complejas, ya que permite dividir la interfaz en piezas más pequeñas y reutilizables"
        this.paragraph2 = "Quien fue el creador de React: Fue creada en 2011 por Jordan Walke, un ingeniero de software que trabajaba en Facebook y que quería simplificar la forma de crear interfaces de usuario complejas.Es una biblioteca muy popular y es usada por muchas empresas como Facebook, Netflix, Airbnb, Twitter, Instagram, etc"


    }

    static get styles() {
        return css`
        #react-conteiner {
            background-color: #66ccee;

            padding: 2vw;
        }
        `
    }

    render() {
        return html`
        <div id="react-conteniner">
            <h1>${this.title}</h1>
            <p>${this.paragraph}</p>
            <img src="${this.imgUrl}">
            <p>${this.paragraph1}</p>
            <p>${this.paragraph2}</p>
        </div>
        `
    }
}

window.customElements.define('react-component', ReactComponent)