const weatherform = document.querySelector(".weatherform")
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apikey = "d6f7bd4d639a7dc16d37f3b4058f3b57";

weatherform.addEventListener("submit", async event => {
    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherdata = await getWeatherData(city);
            displyWeatherInfo(weatherdata);
        }catch(error){
            console.log(error);
            displyError(error);
        }
    }
    else{
        displyError("Plleace Enter a city!")
    }
});

async function getWeatherData(city) {
    const apiurl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiurl)

    console.log(response);

    
}


function displyError(message){
    const errorDisply = document.createElement("p");
    errorDisply.textContent = message;
    errorDisply.classList.add("errorDisply");

    card.textContent = "";
    card.computedStyleMap.display = "flex";
    card.appendChild(errorDisply);  

}

