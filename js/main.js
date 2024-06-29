let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let boat = document.getElementById('boat')
let river = document.getElementById('river')
let nouvil = document.getElementById('nouvil')

window.onscroll = function() {
    let value = scrollY
    stars.style.left = value + 'px'
    moon.style.top = value*5 + 'px'
    mountains3.style.top = value*2 + 'px'
    mountains4.style.top = value*1.5 + 'px'
    river.style.top = value + 'px'
    boat.style.top = value + 'px'
    boat.style.left = value*3 + 'px'
    nouvil.style.fontSize = value + 'px'
    if (scrollY >= 45) {
        nouvil.style.fontSize = 67 + 'px'
    }
    if (scrollY >= 66) {
        let main = document.getElementById('main')
        main.style.background = 'linear-gradient(#376281, #10001f)'
    }else {
        let main = document.getElementById('main')
        main.style.background = 'linear-gradient(#200016, #10001f)'
    }
}
