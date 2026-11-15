"use strict";

function handleSubmit(event) {
   

    const city = event.target.city.value;
    if (city === ""){
        alert("city mustn't be empty");
         
    }
    if (city.length > 0 && city.length < 3 ){
        alert("specifiy at LEAST 3 characters of the city");
         
    }
    event.preventDefault();


}
const form = document.getElementsByTagName('form')[0];
form.addEventListener("submit", handleSubmit);

