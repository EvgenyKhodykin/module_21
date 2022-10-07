const input = document.querySelector('.input')
const button = document.querySelector('.button')
const text = document.querySelector('.text')
const list = document.querySelector('.list')

button.addEventListener('click', async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${input.value}/todos`)
    const data = await response.json()
    if (data.length == 0) {
        text.style.display = 'block'
    } else {
        for (i in data) {
        const newLi = document.createElement('li')
        newLi.innerHTML = data[i].title
        newLi.className = 'item' + (data[i].completed ? 'completed' : '')
        list.appendChild(newLi)
        }
        }
})

