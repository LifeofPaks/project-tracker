const icon = document.querySelector('.icon')
const mobileNav = document.querySelector('.nav-links.mobile')


icon.addEventListener('click', ()=>{
    icon.classList.toggle('active')

    if(icon.classList.contains('active')){
        mobileNav.classList.add('active')
    }else{
        mobileNav.classList.remove('active')
    }
})