const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

btn.addEventListener('click', function() {
    if (input.value == '') return
    createDeleteElements(input.value)
    input.value = ''
})

function createDeleteElements(value) {
    
    const li = document.createElement('li')
    const btn = document.createElement('button')

    li.className = 'li'
    li.textContent = value

    btn.className = 'btn'
    btn.textContent = ''
    li.appendChild(btn)

    btn.addEventListener('click', function() {
        result.removeChild(li)
    })

    li.addEventListener('click', (e) => {
        li.classList.toggle('li-active')
    })
    result.appendChild(li)
}
