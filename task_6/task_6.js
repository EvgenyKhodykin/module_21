const pageInput = document.querySelector('.input1')
const limitInput = document.querySelector('.input2')
const request = document.querySelector('.button')
const text = document.querySelector('.text')
const image = document.querySelector('.image-container')

request.addEventListener('click',() => {
    
    if (Number.isInteger(Number(pageInput.value)) && pageInput.value>=1 && pageInput.value<=10) {
        return pageInput.value
    } else {
        text.innerHTML = 'Номер страницы вне диапазона от 1 до 10'
    }
    if (Number.isInteger(Number(limitInput.value)) && limitInput.value>=1 && limitInput.value<=10) {
        return limitInput.value
    } else {
        text.innerHTML = 'Лимит страницы вне диапазона от 1 до 10'
    }
})

