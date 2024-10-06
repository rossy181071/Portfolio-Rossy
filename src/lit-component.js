import { LitElement, html, css  } from "lit";

export class LitComponent extends LitElement { 
    static get properties() {
        return {
            title: { type: String },
            paragraph: { type: String },
            imgUrl: { type: String }
        }
    }

    static get styles() {
        return css`
        #lit-container {
            background-color: #886666;

            padding: 2vw;
        }
        `
    }
    constructor() {
        super()
        this.title = "Lit Element"
        this.paragraph = "Lit Element es un libreria de frontend mantenida por Google"
        this.imgUrl = "https://desarrolloweb.com/storage/tag_images/actual/wW3kFZqEQkQReYsbqJESxGxXgLCGjVuOyqgAXYRY.png"
        this.paragraph1 = "Lit, antes conocido como LitElement, es una clase base para el desarrollo de custom elements, o elementos personalizados del estándar Javascript de Web Components, Lit es una librería para el desarrollo de custom elements, del estándar de Web Components, que permite muchas mejoras para un desarrollo ágil y amistoso encima del propio estándar,Lit antes se conocía con el nombre de LitElement que es la clase base para crear elementos personalizados basados en el estándar Javascript de los Web Components. Además de LitElement, tenemos LitHTML, que es el motor de templates reactivos, que ofrece un gran rendimiento, incluso más rápido que otros motores reactivos como React. Ahora, bajo el nombre de Lit encontramos tanto a los antiguos LitElement y LitHTML. Este cambio se produjo a partir de la versión LitElement 3.0, en la que se agruparon a todas las librerías bajo un mismo paragüas con el nombre de Lit.Actualmente la documentación de Lit se encuentra en Lit.dev aunque el funcionamiento sigue siendo exactamente el mismo que lo que se conocía anteriormente como LitElement, salvo por unos mínimos detalles en el ciclo de vida de los componentes. Por lo tanto, todo lo que puedes aprender sobre LitElement, por ejemplo en el Manual de LitElement, lo puedes aplicar directamente sobre Lit.Lo más importante que encontramos en Lit es lo que antes conocíamos como LitElement y básicamente se trata de una clase de Programación orientada a objetos sobre la que podemos extender para crear componentes que tienen diversas utilidades significativas para que la experiencia de desarrollo sea más agrandable y más productiva.Podemos considerar a LitElement como una librería para Web Components, aunque es quizás mejor el término microlibrería, ya que su peso es alrededor de 6 KB (Gziped, en torno de 27 KB sin comprimir). Por tanto, el coste de aplicar LitElement para crear componentes es realmente asumible y justificado, dada la cantidad de beneficios que nos aporta.LitElement a su vez se basa en LitHTML, que es una microlibrería (de peso en torno a 3 KB Gziped) para creación de templates reactivos, que consigue ser más rápida y aportar más rendimiento que cualquiera de los motores de templates más populares como el de React, Vue o Angular. LitHTML se puede usar en cualquier proyecto Javascript donde queramos usar plantillas capaces de reaccionar a cambios en el estádo de las aplicaciones. Podemos pensar en LitElement como un LitHTML extendido para poder ser usado cómodamente en el contexto de los custom elements del estándar Web Components"
        this.paragraph2 = "Quien fue el creador de Lit Element:"
        this.paragraph3 = "Está creada por el equipo de Polymer e impulsado por Google. "

    }

    render() {
        return html`
        <div id="lit-container">
            <h1>${this.title}</h1>
            <p>${this.paragraph}</p>
            <img src="${this.imgUrl}">
            <p>${this.paragraph1}</p>
            <p>${this.paragraph2}</p>
            <p>${this.paragraph3}</p>
        </div>`
    }
}

window.customElements.define('lit-component', LitComponent)