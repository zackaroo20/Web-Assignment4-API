"use strict";

function handleSumbit(event) {
    event.PreventDefault();

    const city = event.target.city.value
    console.log(city);
    




}
const form = document.getElementById('userForm');
form.addEventListener("submit", handleSubmit);

