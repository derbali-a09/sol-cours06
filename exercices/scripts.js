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