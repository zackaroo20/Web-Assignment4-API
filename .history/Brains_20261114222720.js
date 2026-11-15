"use strict";

function handleSubmit(event) {
   

    const city = event.target.city.value;
    
    
    
    if (city === "" || city.length < 3){
        alert("city mustn't be empty, more than 3 characters needed");
        
         event.preventDefault();
    }
    else {
       displayInfo(handleFetch(city));
       event.preventDefault();
      
    }

   
}
const form = document.getElementsByTagName('form')[0];
form.addEventListener("submit", handleSubmit);

function handleFetch(city) {


    fetch(`https://api.weatherapi.com/v1/forecast.json?key=827d353bd9654d2495f54235231611&q=${city}&days=7&aqi=no&alerts=no`)

    .then((response) => {
        response.json()
    })


    .then((data) => {
        
        console.log(data);


    }

    )

    .catch((error) => console.error("data trash: ", error));




}

function displayInfo(data) {
    let responseBlock = document.getElementById("bruh").textContent;
    responseBlock = data.location.name;
    console.log(data.target.location.name);
    data.preventDefault();



    
}