import './styles/tailwind.css'

/* navbar menú desplegable*/

const btnMenu = document.querySelector(".menu-btn");
const btnClose = document.querySelector(".close-btn"); 
const navMenu = document.querySelector(".nav-menu");
const body = document.body; //x bloquejar scroll

btnMenu.addEventListener("click", () => {
    navMenu.classList.remove("hidden"); //mostrar menu amagat x defecte
    btnMenu.classList.add("hidden"); //amagar burger
    btnClose.classList.remove("hidden"); //mostrar creu x tancar menu
    body.classList.add("overflow-hidden"); //block scroll
});

btnClose.addEventListener("click", () => {
    navMenu.classList.add("hidden"); //amaga menu amagat x defecte
    btnMenu.classList.remove("hidden"); //mostra burger
    btnClose.classList.add("hidden"); //amaga creu x tancar menu
    body.classList.remove("overflow-hidden"); //allow scroll
});

/*features tabs */ 

const tabs = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".tab-content");

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {

        /*treiem active de totes les tabs (nomes botons)*/ 
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active","border-b-4","border-red-500");

        /*treiem active de totes les tabs amb contingut*/ 
            content[j].classList.add("hidden");
        }
        /*afegim active a la tab clicada (nomes botons)*/
        tabs[i].classList.add("active","border-b-4","border-red-500");
        content[i].classList.remove("hidden");
    });

}

const question = document.querySelectorAll(".question"); /* retorna una col·lecció d'elements amb la classe question */
const answer = document.querySelectorAll(".answer");

for (let i = 0; i < question.length; i++) {
    const header = question[i].querySelector(".question-header"); /* el query selector accepta selectors css complets, i busca dins de cada boto la classe question-header, treu el primer element */

    header.addEventListener("click", function() {        
        for (let j = 0; j < question.length; j++) {
            if (j !== i) {
                question[j].classList.remove("active");
                answer[j].classList.add("hidden");

                const arrows = question[j].querySelector(".arrow"); /* per fer q les fletxes d les altres preguntes tornin a 0 quan les anem tancant*/ 
                arrows.style.transform = "rotate(0deg)";
                arrows.style.color = "#5267DF";
            }
        }

        question[i].classList.toggle("active");
        answer[i].classList.toggle("hidden");

        const arrow = this.querySelector(".arrow"); /* this fa referencia al element clicat */
        if (question[i].classList.contains("active")) {
            arrow.style.transform = "rotate(180deg)"; // gira la fletxa cap avall
            arrow.style.color = "orange"; 
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





