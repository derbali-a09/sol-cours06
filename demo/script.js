//accès à la basile button (id=btnStyle)
var btnStyle = document.getElementById("btnStyle")
btnStyle.addEventListener('click', () => {
    console.log('button is clicked')
    //accès à la basile h1 (id=titre)
    var baliseTitre = document.getElementById("titre")
    //appliquer un style css
    baliseTitre.style.fontSize = "46px"
    baliseTitre.style.color = "#FF0000"
})

var btnChange = document.getElementById("btnChange")
btnChange.addEventListener('click', () => {
    var baliseTitre = document.getElementById("titre")
    baliseTitre.innerHTML = "Bonjour les amis"
})

