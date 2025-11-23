"use strict"

const tabs = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".tab-content");

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {

        /*treiem active de totes les tabs (nomes botons)*/ 
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");

        /*treiem active de totes les tabs amb contingut*/ 
            content[j].classList.remove("active");
        }
        /*afegim active a la tab clicada (nomes botons)*/
        tabs[i].classList.add("active");
        content[i].classList.add("active");
    });

}

const buttons = document.getElementsByClassName("question"); /* retorna una col·lecció d'elements amb la classe question */

for (let i = 0; i < buttons.length; i++) {
    const header = buttons[i].querySelector(".question-header"); /* el query selector accepta selectors css complets, i busca dins de cada boto la classe question-header, treu el primer element */
    
    header.addEventListener("click", function() {        
        buttons[i].classList.toggle("active");
        
        const arrow = this.querySelector(".arrow"); /* this fa referencia al element clicat */
        if (this.parentElement.classList.contains("active")) {
            arrow.style.transform = "rotate(180deg)"; // gira la fletxa cap avall
            arrow.style.color = "orange"; 
        } else {
            arrow.style.transform = "rotate(0deg)"; // torna la fletxa a la posició original
            arrow.style.color = "#5267DF";
        }
  });
}

function validateForm() {
    const form = document.getElementByClass("contact-form");
    const userEmail = document.forms["contact-form"]["user-email"].value;
    const error = document.getElementById("email-error");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    
    if (!userEmail) {
        error.innerHTML = '<img src="bookmark-landing-page/starter-code/images/icon-error.svg" alt="error" style="width:16px;height:16px;"> Has d\'escriure un e-mail.';
    } else if (!userEmail.includes("@")) {
        error.innerHTML = '<img src="bookmark-landing-page/starter-code/images/icon-error.svg" alt="error" style="width:16px;height:16px;"> Introdueix un e-mail vàlid.';
    } else {
        error.innerHTML = "Formulari enviat amb èxit!"
    }
})
}
