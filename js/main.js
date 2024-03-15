const myUnits = 'c6770e19f5579c43feee63b7ccebb619'
const myKey = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBox = document.querySelector('.put input')
const searchBtn = document.querySelector('.put button')

async function myWeather(City){
    const response = await fetch(myKey + City + `&appid=${myUnits}`)

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block'
    }
    else{
        const data = await response.json()
    console.log(data);

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c'
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.hum').innerHTML = data.main.humidity + '%'
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'
    document.querySelector('.country').innerHTML = data.sys.country 

    if (data.weather[0].main == 'Clouds') {
        document.querySelector('.change-icon').src = 'images/clouds.png'
    }
    else if (data.weather[0].main == 'Clear') {
        document.querySelector('.change-icon').src = 'images/clear.png'
    } 
    else if (data.weather[0].main == 'Rain'){
        document.querySelector('.change-icon').src = 'images/rain.png'
    }
    else if (data.weather[0].main == 'Drizzle'){
        document.querySelector('.change-icon').src = 'images/drizzle.png'
    }
    else if (data.weather[0].main == 'Rain'){
        document.querySelector('.change-icon').src = 'images/snow.png'
    }
    document.querySelector('.weather').style.display = 'flex'
    document.querySelector('.error').style.display = 'none'
    }
    
}
searchBtn.addEventListener('click',()=>{
    myWeather(searchBox.value)
})
   