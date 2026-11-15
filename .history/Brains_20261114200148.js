"use strict";

function handleSubmit(event) {
   

    const city = event.target.city.value;
    if (city === ""){
        alert("city mustn't be empty");
         event.preventDefault();
    }
    if (city.length > 0 && city.length < 3 ){
        alert("specifiy at LEAST 3 characters of the city");
         event.preventDefault();
    }

    handleFetch(city);




}
const form = document.getElementsByTagName('form')[0];
form.addEventListener("submit", handleSubmit);

function handleFetch(city) {


    fetch(`"https://api.weatherapi.com/v1/forecast.json?key=827d353bd9654d2495f54235231611&q=${city}&days=7&aqi=no&alerts=no"`)

    .then((response) => {
        if (!response.ok){
            throw new Error("trash response: " + response.status.Text);
        }

        return response.json();


    }
    .then((data) => console.log(data))
    
    )
    .catch((error)

    )




}