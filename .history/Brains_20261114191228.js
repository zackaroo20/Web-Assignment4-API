"use strict";

function handleSubmit(event) {
    event.preventDefault();

    const city = event.target.city.value;
    console.log(city);
    




}
const form = document.getElementsByTagName('form')[1];
form.addEventListener("submit", handleSubmit);

