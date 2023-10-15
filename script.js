



 
  
   const apiKeys = "36852428135f78e22ca0e3028ddb88ee";
   
   const apiAddress = `https://api.openweathermap.org/data/2.5/weather?`;
   
  const searchBtn = document.querySelector(".Search_btn");
  let searchBox = document.querySelector("#text_id");
  let  WeatherImg = document.querySelector(".images_dynamic");
 

  
 searchBtn.addEventListener('click',function(){ 
      let textVal = document.querySelector('#text_id').value;
     
       weather(textVal);

      textVal =  searchBox.value = ""

   
       
    })

    

 
   const weather  = async(city)=>{ 
    

     const weather_fetch =  await fetch(apiAddress + `q=${city}` +`&appid=${apiKeys}`+ `&units=metric`) ;
     let data = await weather_fetch.json;
      weather_fetch.json().then(function(data){ 
        console.log(data)
      document.querySelector('.city').innerHTML = data.name;
      document.querySelector('.Weather_info_data').innerHTML = (Math.round(data.main.temp) + "°c" );
      document.querySelector('.Humidity_h3 ').innerHTML = (data.main.humidity + "%")
      document.querySelector('.Wind_Speed').innerHTML = (data.wind.speed + " Km/h")
   
      
      
        
        if (data.weather[0].main == "Clouds"){ 
           
          WeatherImg.src = "Resources/clouds.png"
             
           
        }

        else if (data.weather[0].main == "Mist"){ 
          WeatherImg.src = "Resources/mist.png";
        }
        else if  (data.weather[0].main == "Rain"){ 
           WeatherImg.src = "Resources/rain.png";
        }
        else if  (data.weather[0].main == "Snow"){ 
          WeatherImg.src = "Resources/snow.png";
       }
       else if  (data.weather[0].main == "Wind"){ 
        WeatherImg.src = "Resources/wind.png";
     }
    
    else if  (data.weather[0].main == "Drizzle"){ 
     WeatherImg.src = "Resources/drizzle.png";
  }
 
else { 
 WeatherImg.src = "Resources/clear.png";
}
             
     })
       
   }



