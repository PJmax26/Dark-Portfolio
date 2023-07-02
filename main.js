let menuBtn = document.querySelector('.menu')
let nav = document.querySelector('nav')

menuBtn.addEventListener('click', function(e){
    if(e.target.innerText !== 'x'){
        e.target.innerText = 'x'
        nav.style.left = 0
    }

    else{
        e.target.innerText = '☰'
        nav.style.left = '-100%'
    }
})