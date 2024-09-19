let APIKey="3e147a27a8cdd393c8f52204b9b46815";
const APIUrl="https://api.openweathermap.org/data/2.5/weather?q=";
let weatherpng = document.querySelector(".weatherpng");
let input = document.querySelector(".inputcity");
let temp = document.querySelector(".temp");
let place = document.querySelector(".place");
let search = document.querySelector(".searchpng");
let humidity = document.querySelector(".percent");
let windspeed = document.querySelector(".speed");
async function callAPI() {
    let response= await fetch(APIUrl + input.value + `&appid=${APIKey}`);
    let data=await response.json();
    console.log(data);
    let celcius1 =(data.main.temp -273.15);
   let celcius= parseFloat(celcius1).toFixed(0);
    temp.innerText=celcius;
    humidity.innerText= data.main.humidity + "%";
    windspeed.innerText= data.wind.speed + " km/hr";
    place.innerText= data.name;

    if(data.weather[0].main === "Clouds"){
      weatherpng.style.backgroundImage="url(images/clouds.png)"; 
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherpng.style.backgroundImage="url(images/drizzle.png)";
    }
    else if(data.weather[0].main === "Rain"){
        weatherpng.style.backgroundImage="url(images/rain.png)";
    }
    else if(data.weather[0].main === "Clear"){
        weatherpng.style.backgroundImage="url(images/clear.png)";
    }
    else if(data.weather[0].main === "Snow"){
        weatherpng.style.backgroundImage="url(images/snow.png)";
    }
    else if(data.weather[0].main === "Mist" || data.weather[0].main === "Fog" || data.weather[0].main === "Haze" || data.weather[0].main === "Sand" || data.weather[0].main === "Smoke")
    {
        weatherpng.style.backgroundImage="url(images/mist.png)";
    }
    else if(data.weather[0].main === "Thunderstorm"){
        weatherpng.style.backgroundImage="url(https://www.freeiconspng.com/uploads/thunderstorm-icon-4.png)"
    }
}

search.onclick=()=>{
    callAPI();
    
}


