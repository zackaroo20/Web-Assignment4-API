"use strict";

function handleSubmit(event) {
   

    const city = event.target.city.value;
    if (city === ""){
        alert("city mustn't be empty");
         event.preventDefault();
    }
    if (city.length > 0 && city.length < 3 ){
        alert("specifiy at LEAST 3 characters of the city");
         
    }


}
const form = document.getElementsByTagName('form')[0];
form.addEventListener("submit", handleSubmit);

