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
            arrow.style.color = "#ff6565"; 
        } else {
            arrow.style.transform = "rotate(0deg)"; // torna la fletxa a la posició original
            arrow.style.color = "#5267DF";
        }
    });
}

function validateForm() {
    const userEmail = document.forms["contact-form"]["user-email"].value;
    const container = document.querySelector(".email-error-container");
    const error = document.querySelector(".email-error"); /* aqui hem d posar un punt pk fem getelementbyclassname */

    if (!userEmail) {
        container.classList.add("error");
        error.classList.add("error");
        return false;
    } else if (!userEmail.includes("@")) {
        container.classList.add("error")
        error.classList.add("error");
        return false;
    }
    container.classList.remove("error")
    error.innerHTML = "Your info was successfully sent!"
    return true;
}


/* navbar menú desplegable*/

const btnMenu = document.querySelector(".menu-btn");
const btnClose = document.querySelector(".close-btn"); 
const navbar = document.querySelector(".navbar");
const body = document.body;


btnMenu.addEventListener("click", () => {
    navbar.classList.add("menu-open");
    body.classList.add("no-scroll");
});

btnClose.addEventListener("click", () => {
    navbar.classList.remove("menu-open");
    body.classList.remove("no-scroll");
});



