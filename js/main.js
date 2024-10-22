const apiKey = "1187745dc4c8f6d63eb5a9f03b42ad4e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var searchBox=document.querySelector(".search input");
var searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city) {
    const respone = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(respone.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".content").style.display="none";
    }
    else{
        var data=await respone.json();
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector('.wind').innerHTML=data.wind.speed + "km/hr";
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="../img/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="../img/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="../img/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="../img/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="../img/mist.png";
        }
        document.querySelector(".content").style.display="block";
        document.querySelector(".error").style.display="none"
    }
}
searchBtn.addEventListener("click",() =>{
    checkWeather(searchBox.value);
})