export function randomValueHeight() {

    // Valores en px
    const valueHeight = [
        "350",
        "418",
        "500"
    ]
    const randomFunction = (Math.floor(Math.random() * 3) + 1) - 1
    const randomNumber = valueHeight[randomFunction]

    return randomNumber
}