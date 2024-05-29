const list = document.querySelector('.list'),
    items=document.querySelectorAll('.blocks__item')
    listItems=document.querySelectorAll('.list_item')

console.log(document.querySelectorAll('.blocks__item'))
console.log("d123123123")
function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target

        switch(targetId) { 
        case 'all':
            
            break
        case 'Volkswagen':
            getItems(targetId)
            break
        case 'Toyota':
            getItems(targetId)
            break
        case 'Opel':
            getItems(targetId)
            break
        case 'Nissan':
            getItems(targetId)
            break
        }
    })
}

filter()

function getItems(className) { 
    items.forEach(item => {
        if (item.classList.contains(className)) { 
            item.style.display="block"
        } else {
            item.style.display='none'
        }
    })
}