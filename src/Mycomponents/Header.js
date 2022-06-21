import React, {useEffect,useState} from 'react';

export default function Header() {
     
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("");
    useEffect(() => {
        const fecthApi = async () =>{
           
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=27fc311b90d73d3e0441aab8354700ec`
          const response = await fetch(url);
          const resJson = await response.json();
          setCity(resJson.main);
        } 
        fecthApi();
 
    },[search])

    return (

        <>
            
         <div className = "Background">
   
        <div className="box">
          <pre className="ty">  World Weather Information Service<br></br></pre>
                            <pre className="ty"><t></t>         Official Forecasts</pre>
            <div className = "inputdata">
                  <input
                  placeholder=" City Name..."
                  value={search}
                  type="search"
                  className="inputFeild"
                  onChange={ ( event ) => setSearch(event.target.value)} />
                 
          
        </div>
       {
         !city?(
           <p className="errormsg"><b>NO DATA FOUND!!!</b></p>
         ) : (
           <div>
           <div className = "info">
          
           <h1 className = "location">
           <i class='fa fa-thermometer-full teal-color'></i>{search}</h1>
           <h1 className="temp">
            {city.temp}°C
           </h1>
           <h3 className="tempmin_max">
               <pre className = "prename">Min : {city.temp_min}°C <br></br>
                Max : {city.temp_max}°C <br></br> 
               Humidity : {city.humidity}<br></br> 
               Sea-level : {city.sea_level} <br></br>
               Pressure : {city.pressure}<br></br> 
               Ground level: {city.grnd_level}</pre>
           </h3>
   
   
       </div>
        
        <div className="wave1"></div>
        <div className="wave2"></div>
        <div className="wave3"></div>
        </div>
         )
       }
     
         </div>
   
         </div>
      </>
     );
}
