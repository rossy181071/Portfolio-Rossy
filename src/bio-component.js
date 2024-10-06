import { LitElement, html, css } from "lit";

export class BioComponent extends LitElement {
    static get properties() {
        return {
            name: { type: String },
            title: { type: String },
            moviesParagraph: { type: String }
        }
    }

    constructor () {
        super()
        this.name =  "Rossy"
        this. title = `Mucho gusto! Mi Nombre es ${this.name}`
        this.moviesParagraph = " Unas de mis peliculas favoritas son: "
        
    }

    static get styles() {
        return css`
        #bio-container {
            background-color: #668866;

            padding: 2vw;
        }
        
        .movie-poster {
            width: 100px
        }
        `
    }

    render() {
        return html`
        <div id="bio-container">
            <h1>${this.title}</h1>
            <p>${this.moviesParagraph}</p>
            <ol>
                <li><h3>Hercules</h3><img class="movie-poster" src="https://www.themoviedb.org/t/p/original/pVq9sD95ZHazVJxUFAiCxexgt0R.jpg"></li>
                <li><h3>Matilda</h3><img class="movie-poster" src="https://flxt.tmsimg.com/assets/p18307_p_v10_an.jpg"></li>
                <li><h3>Beetlejuice</h3><img class="movie-poster" src="https://fr.web.img3.acsta.net/pictures/18/10/18/09/47/5083109.jpg"></li>
                <li><h3>Los increibles</h3><img class="movie-poster" src="https://www.themoviedb.org/t/p/original/al1jusd4T7JPatZlj4BuYkDDOzr.jpg"></li>
                <li><h3>Top Gun</h3><img class="movie-poster" src="https://www.themoviedb.org/t/p/original/opBYaPPRvUOiv1tCBalebTqDs5P.jpg"></li>
                <li><h3>La Laguna Azul</h3><img class="movie-poster" src="https://is2-ssl.mzstatic.com/image/thumb/r_UM-4yeu0W62GzXwbvqVg/2000x1125.jpg"></li>
                <li><h3>Amores Perros</h3><img class="movie-poster" src="https://image.tmdb.org/t/p/original/ll53drDapuXErRgMc8MaXfA30wO.jpg"></li>
                <li><h3>Amarte Duele</h3><img class="movie-poster" src="https://www.tvguide.com/a/img/catalog/provider/1/2/1-1965701735.jpg"></li>
                <li><h3>Te presento a Laura</h3><img class="movie-poster" src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/16d834f3573b04bdeea5ec18e3fbd65d01935398cc353bf0fd44ae39d619be12._RI_V_TTW_.jpg"></li>
                <li><h3>Todos los incendios</h3><img class="movie-poster" src="https://pics.filmaffinity.com/todos_los_incendios-354163207-large.jpg"></li>
                <li><h3>Toy story</h3><img class="movie-poster" src="https://pics.filmaffinity.com/toy_story-626273371-large.jpg"></li>
                
            </ol>
        </div>
        `
    }
}

window.customElements.define('bio-component', BioComponent)