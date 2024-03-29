const showMenu = () => {
    const menu = document.getElementById('menu') //show this

    

    const menuIcon = document.getElementById('menuIcon') //hide this

    const closeIcon = document.getElementById('closeIcon') //show this

    menu.classList.remove('hidden')
    menuIcon.classList.add('hidden')
    closeIcon.classList.remove('hidden')

    

}
const closeMenu = () => {
    const menu = document.getElementById('menu') //hide this

    const menuIcon = document.getElementById('menuIcon') //show this

    const closeIcon = document.getElementById('closeIcon') //hide this


    menu.classList.add('hidden')
    menuIcon.classList.remove('hidden')
    closeIcon.classList.add('hidden')
    

    
}


