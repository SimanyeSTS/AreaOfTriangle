document.querySelector('#calculateButton').addEventListener('click', () => {
    const baseInput = document.querySelector('#baseInput').value
    const base = parseFloat(baseInput)
    const heightInput = document.querySelector('#heightInput').value
    const height = parseFloat(heightInput)
    if(isNaN(base, height)) {
        document.querySelector('#result').textContent = "Please enter a valid number."
    }
    else{
        const area = 1/2 * base * height
        document.querySelector('#result').textContent = area + "m2"
    }
})