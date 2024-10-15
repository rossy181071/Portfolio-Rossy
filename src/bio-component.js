import { LitElement, html, css } from "lit";

export class BioComponent extends LitElement {
    static get properties() {
        return {
            name: { type: String },
            title: { type: String },
            moviesParagraph: { type: String },
            movie1: { type: String },
            poster1: { type: String }
        }
    }

    constructor () {
        super()
        this.name =  "Rossy"
        this. title = `Mucho gusto! Mi Nombre es ${this.name}`
        this.moviesParagraph = " Unas de mis peliculas favoritas son: "
        this.movie1 = "Hercules"
        this.poster1 = "https://www.themoviedb.org/t/p/original/pVq9sD95ZHazVJxUFAiCxexgt0R.jpg"
        this.movie2 = "Matilda"
        this.poster2 = "https://flxt.tmsimg.com/assets/p18307_p_v10_an.jpg"
        this.movie3 = "Beetlejuice"
        this.poster3 = "https://fr.web.img3.acsta.net/pictures/18/10/18/09/47/5083109.jpg"
        this.movie4 = "Los increibles"
        this.poster4 = "https://www.themoviedb.org/t/p/original/al1jusd4T7JPatZlj4BuYkDDOzr.jpg"
        this.movie5 = "Top Gun"
        this.poster5 = "https://www.themoviedb.org/t/p/original/opBYaPPRvUOiv1tCBalebTqDs5P.jpg"
        this.movie6 = "La Laguna Azul"
        this.poster6 = "https://is2-ssl.mzstatic.com/image/thumb/r_UM-4yeu0W62GzXwbvqVg/2000x1125.jpg"
        this.movie7 = "Amores Perros"
        this.poster7 = "https://image.tmdb.org/t/p/original/ll53drDapuXErRgMc8MaXfA30wO.jpg"
        this.movie8 = "Amarte Duele"
        this.poster8 = "https://www.tvguide.com/a/img/catalog/provider/1/2/1-1965701735.jpg"
        this.movie9 = "Te presento a Laura"
        this.poster9 = "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/16d834f3573b04bdeea5ec18e3fbd65d01935398cc353bf0fd44ae39d619be12._RI_V_TTW_.jpg"
        this.movie10 = "Todos los incendios"
        this.poster10 = "https://i.ytimg.com/vi/c1FIfYlkn7Q/maxresdefault.jpg"
        this.movie11 = "Toy story"
        this.poster11 = "https://pics.filmaffinity.com/toy_story-626273371-large.jpg"
        
        
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
                <li><h3>${this.movie1}</h3><img class="movie-poster" src="${this.poster1}"></li>
                <li><h3>${this.movie2}</h3><img class="movie-poster" src="${this.poster2}"></li>
                <li><h3>${this.movie3}</h3><img class="movie-poster" src="${this.poster3}"></li>
                <li><h3>${this.movie4}</h3><img class="movie-poster" src="${this.poster4}"></li>
                <li><h3>${this.movie5}</h3><img class="movie-poster" src="${this.poster5}"></li>
                <li><h3>${this.movie6}</h3><img class="movie-poster" src="${this.poster6}"></li>
                <li><h3>${this.movie7}</h3><img class="movie-poster" src="${this.poster7}"></li>
                <li><h3>${this.movie8}</h3><img class="movie-poster" src="${this.poster8}"></li>
                <li><h3>${this.movie9}</h3><img class="movie-poster" src="${this.poster9}"></li>
                <li><h3>${this.movie10}</h3><img class="movie-poster" src="${this.poster10}"></li>
                <li><h3>${this.movie11}</h3><img class="movie-poster" src="${this.poster11}"></li>
                
                
            </ol>
        </div>
        `
    }
}

window.customElements.define('bio-component', BioComponent)