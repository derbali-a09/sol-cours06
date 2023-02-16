/*
NUMERO 1
*/
var btnVerifier = document.getElementById("btnVerifier")
if (btnVerifier != null) {
    //event click sur le bouton
    btnVerifier.addEventListener('click', function (event) {
        let message = document.getElementById("message")
        let saisie = document.getElementById("saisie").value  //value permet de retourner le texte saisi par l'user
        if (isNaN(saisie)) {
            message.innerHTML = 'Attention!' + saisie + " n'est pas numérique"   //innerHTML permet de remplacer totalement le contenu d'une balise
            //message.style.color = "#FF0000"
            message.setAttribute('class', 'text-danger bg-black')
            //console.log('Attention!' + saisie+' n\'est pas numérique')
        } else {
            message.innerHTML = 'Bravo!' + saisie + ' est numérique'
            message.setAttribute('class', 'text-success bg-black')
            //message.style.color = "#00FF00"
            //console.log('Bravo!' + saisie+' est numérique')
        }
    })
}
/*
NUMERO 2
*/
var btnVerifierSondage = document.getElementById("btnVerifierSondage")
if (btnVerifierSondage != null) {
    //event click sur le bouton
    btnVerifierSondage.addEventListener('click', function (event) {
        //question1
        verifierCheckBox("checkBoxQuestion1", 'message1')

        //question2
        verifierCheckBox("checkBoxQuestion2", 'message2')
    })
}

function verifierCheckBox(nameAttribute, messageId){
    let tabCheckBoxQuestion = document.getElementsByName(nameAttribute)
    let compteur = 0
    for (let index = 0; index < tabCheckBoxQuestion.length; index++) {
        if (tabCheckBoxQuestion[index].checked) {
            compteur++
        }
    }
    let message = document.getElementById(messageId)
    if (compteur > 2) {
        message.innerHTML = 'Attention plus que 2 options cochées'
        message.setAttribute('class', 'text-danger bg-black')
    } else {
        message.innerHTML = 'Tout va bien'
        message.setAttribute('class', 'text-success bg-black')
    }
}

/*
NUMERO 3
*/
var btnVerifierLogin = document.getElementById("btnVerifierLogin")
if (btnVerifierLogin != null) {
    //event click sur le bouton
    btnVerifierLogin.addEventListener('click', function (event) {
        //vérifier username
        let username = document.getElementById("saisieUsername").value
        let alertUsername= document.getElementById("alertUsername")
        if(!isNaN(username))  { //c'est numérique 
            alertUsername.setAttribute('class', "alert alert-warning alert-dismissible fade show")
        }else {
            alertUsername.setAttribute('class', "alert alert-warning alert-dismissible fade hide")
        }

        //vérifier taille password
        let password = document.getElementById("saisiePassword").value
        let alertPasswordTaille= document.getElementById("alertPasswordTaille")
        if(password.length < 6)  { // taille < 6 
            alertPasswordTaille.setAttribute('class', "alert alert-warning alert-dismissible fade show")
        }else {
            alertPasswordTaille.setAttribute('class', "alert alert-warning alert-dismissible fade hide")
        }

         //vérifier lettre et chiffre dans un password
         let alertPasswordChiffreEtLettre= document.getElementById("alertPasswordChiffreEtLettre")
         let regexpLettre = new RegExp('.*[a-zA-Z].*'); 
         let regexpChiffre = new RegExp('.*[0-9].*'); 
         if(regexpLettre.test(password) == false || regexpChiffre.test(password)==false){
            alertPasswordChiffreEtLettre.setAttribute('class', "alert alert-warning alert-dismissible fade show")
         }else {
            alertPasswordChiffreEtLettre.setAttribute('class', "alert alert-warning alert-dismissible fade hide")
         }

         
    })
}

/*
NUMERO 4
*/
var btnPlatSuivant = document.getElementById("btnPlatSuivant")
var tabPlats = ["Poutine", "Soupe des légumes", "Paté chinois"]
var tabSrcImages = ["../imgs/poutine.jpg", "../imgs/soupe_legumes.jpg", "../imgs/pate_chinois.jpg"]
var index = 0
if (btnPlatSuivant != null) {
    //event click sur le bouton
    btnPlatSuivant.addEventListener('click', function (event) {
        //changer le titre
        let titre = document.getElementById("titre")   
        titre.innerHTML = tabPlats[index] 
        
        //changer l'image
        let image = document.getElementById("image")
        image.setAttribute('src', tabSrcImages[index])
        
        //incrémeter l'index d'une façon circulaire
        index = (index + 1) % tabPlats.length    
    })
}