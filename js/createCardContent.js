import { createDOM } from './utils/dom.js'
import { randomValueHeight } from './utils/randomValue.js'

export function cardContentTemplate(value, randomNumber) {
    return `
        <div class="card-content card-size-${randomNumber}">
            <div class="card-size">
                <div class="card-placeholder">
                    <div class="card-content-link">
                        <a class="button-search-map" href="${value.ubication}" target="_blank">
                            <img class="img-svg" src="./img/map.svg" alt="map-svg">
                            <p class="text-search-map">Ver en Google Maps</p>
                        </a>
                    </div>
                </div>
                <img class="card-image" src="${value.image}" alt="img-${value.capital}-${value.country}">
                <div class="card-description">
                    <h3 class="title-capital">${value.capital}</h3>
                    <span class="title-country">${value.country}</span>
                </div>  
            </div>
        </div>
    `
}

export function createCardContent(value) {
    const randomNumber = randomValueHeight()
    return createDOM(cardContentTemplate(value, randomNumber))
}