"use strict";

function handleSubmit(event) {
   

    const city = event.target.city.value;
    if (city === ""){
        alert("city mustn't be empty");
         event.preventDefault();
    }

}
const form = document.getElementsByTagName('form')[0];
form.addEventListener("submit", handleSubmit);

