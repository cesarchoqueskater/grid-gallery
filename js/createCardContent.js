import { createDOM } from './utils/dom.js'

export function cardContentTemplate(value) {

    return `
        <div class="card-content">
            <div class="card-placeholder">
                <div class="card-content-link">
                    <a class="button-search-map" href="${value.ubication}" target="_blank">
                        <img src="./img/map.svg" alt="map-svg">
                        <p class="text-search-map">Ver en Google Maps</p>
                    </a>
                </div>
            </div>
            <img class="card-image" src="${value.image_count}" alt="">
            <div class="card-description">
                <h3 class="title-capital">${value.capital}</h3>
                <span class="title-country">${value.country}</span>
            </div>
        </div>
    `
}

export function createCardContent(value) {
    return createDOM(cardContentTemplate(value))
}