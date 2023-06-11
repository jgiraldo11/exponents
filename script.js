function displayExponent(event) {
    event.preventDefault()
    const base = event.target.base.value
    const exponent = event.target.exponent.value
    const result = Math.pow(base, exponent)

    document.querySelector("h2").innerHTML = `${base}<sup>${exponent}</sup> = ${result}`
    
}

const form = document.querySelector("form")
form.addEventListener("submit", displayExponent)