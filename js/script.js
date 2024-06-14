var cicon = document.getElementById('cicon')
cicon.addEventListener('click', () => toggleMenu())

function toggleMenu() {
    var Links = document.getElementById('links');
    var cicon = document.querySelector('.icon i');

    if (Links.classList.contains('linkshow'))
        {
        Links.classList.remove('linkshow');
        cicon.classList.remove('fa-times');
        cicon.classList.add('fa-bars');
    } 
    else
    {
        Links.classList.add('linkshow');
        cicon.classList.remove('fa-bars');
        cicon.classList.add('fa-times');
    }
}
const cicon = document.getElementById('cicon')
cicon.addEventListener('click', () => toggleMenu())

function toggleMenu() {
    var Links = document.getElementById('links');
    var cicon = document.querySelector('.icon i');

    if (Links.classList.contains('linkshow'))
        {
        Links.classList.remove('linkshow');
        cicon.classList.remove('fa-times');
        cicon.classList.add('fa-bars');
    } 
    else
    {
        Links.classList.add('linkshow');
        cicon.classList.remove('fa-bars');
        cicon.classList.add('fa-times');
    }
}