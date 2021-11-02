import country from '../data/list-country.js'
import { createCardContent } from './createCardContent.js'

export function configCountryInformation(country) {
    const $gridDetails = document.querySelector('#gridDetails')
    const data = country.list

    data.forEach((value, index) => {
        const $panel = createCardContent(value)
        $gridDetails.append($panel)
    })
}

export default function countryInformation() {
    configCountryInformation(country)
        // console.log(country)
}