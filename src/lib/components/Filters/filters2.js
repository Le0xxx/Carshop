const filterbox = document.querySelectorAll('list\')

document.querySelector('div').addEventListener('click', event => { 
    if (event.target.tagName !== 'h2') return false;
    
    let filterClass = event.target.dataset['id'];
    
    filterBox.forEach(elem => {
        elem.classList.remove('hide');|
        if (!elem.classList.contains(filterClass)) {
            elem.classList.add('hide');
        }
    });
});