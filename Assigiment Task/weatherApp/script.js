async function getWeather(){
    const city = document.getElementById("city").value.trim();
    const {lat ,lon}= await getGeoloc(city);

    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b9e9c145d00ad367052cacb8e19e929f`);
    const data=await response.json();
    document.getElementById("weather").innerHTML=`
    <div>
    <p>
            Temperature:   ${ (data.main.temp-273.14).toFixed(2)}℃
         </p>

        <p>
            Humidity:  ${data.main.humidity}%
         </p>
         <p>
            Description:  ${data.weather[0].description}
         </p>
        </div>
         <img src="https://openweathermap.org/img/wn/10d@4x.png" alt="weatherIcons" >
        
        `

}
 async function getGeoloc(city){
    console.log(city);
    const response=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=b9e9c145d00ad367052cacb8e19e929f`);

    const data=await response.json();
    
    const lat = data[0].lat;
    const lon= data[0].lon;

    return {lat,lon};
}