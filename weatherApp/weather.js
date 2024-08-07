//API
const apikey = "c0ea661baae9542b5a59315e5dd1c727";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//INPUT
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
//ICON
const weatherIcon = document.querySelector(".weather-icon");

//validation
document.getElementById('letterInput').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
});
//function update wearther
async function checkWeather(city) {
    const response =await fetch(apiUrl + city + `&appid=${apikey}`);
    
    //check name city exist
    if(response.status == 404){
        // despliega error ocualta info
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }   else{
        var data =await response.json(); //weather's information 

        ///update data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        //icon weather
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "../style/weather-images/clouds.png";
        } else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "../style/weather-images/clear.png";
        } else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "../style/weather-images/drizzle.png";
        } else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "../style/weather-images/mist.png";
        } else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "../style/weather-images/rain.png";
        } else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "../style/weather-images/snow.png";
        }

        // despliega informacion
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    
}

searchBtn.addEventListener("click",
    //funcion a realizar al precionar el boton
     ()=>{
        
        //update weather
        checkWeather(searchBox.value);
    })
