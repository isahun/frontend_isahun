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

const button = document.getElementsByClassName("question-header");

for (let i = 0; i < coll.length; i++) {
    button[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}