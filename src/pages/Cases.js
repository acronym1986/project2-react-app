//import React from 'react';
import React, {useState, useEffect  } from 'react';
import {MapContainer, TileLayer, Circle  } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Cases.css"



   function Cases() {
     //const { name } = useParams();
    
     const [input, setInput] = useState('');
     const [confirmed, setConfirmed] = useState('');
     const [todayConfirmed, setTodayConfirmed] = useState('');
     const [recovered, setRecovered] = useState('');
     const [active, setActive] = useState('');
     const [deaths, setDeaths] = useState('');

     const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
     const [mapZoom, setMapZoom] = useState(3);

     const [map,setMap] = useState(null);
     
     const [mapCountries,setMapCountries] = useState([]);
     const [mapZoom2, setMapZoom2] = useState(3);
     
     
     const handleChange = event => {
        setInput(event.target.value);
      };
      
     useEffect(() => {
       
         fetch ('https://corona.lmao.ninja/v3/covid-19/countries/' + input)
          
         .then (response => response.json())
         .then (data => {
             
             setConfirmed(  data.cases );
             setTodayConfirmed(data.todayCases);
             setRecovered(  data.recovered);
             setDeaths(  data.deaths );
             setActive(data.active);
             setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
             setMapZoom(4);
            // console.log( data);
              
          } )
         .catch(error => {
             console.log(error);
              
         })
         },[input]);


         useEffect(() => {
            const getCountriesData = async() => {
               await  fetch("https://disease.sh/v3/covid-19/countries")
              .then((response) => response.json())
              .then((data) => {
                setMapCountries(data);
                setMapZoom2(4)
                console.log(data);
             });
         }; // getCountriesData() End
     
         getCountriesData(); //calling getCountriesData async func
       }, []);
        
         
         
     if (map) {
         map.setView(mapCenter);
        }
     return (
          
         <form className = 'searchBar'>
             <input
             type = 'text'
             placeholder = 'Type something'
             value = {input}
             name = 'text'
             className = 'search-input'
             onChange = {handleChange}
             />
             <button className = "searchBar-button" >Search</button> 
              
             <br/>
               
              <div className = 'display-result'>
                  <div className = 'general'>

                     <div className = 'card'>
                        <label>Confirmed</label>
                        <h2>{confirmed}</h2>
                        <p style={{fontSize: '12px'}}>today confirm:</p>
                        <p style={{fontSize: '12px'}}>{todayConfirmed}</p>
                     </div>

                     <div className = 'card'>
                        <label>Recovered:</label>
                        <h2>{recovered}</h2>
                        <p style={{fontSize: '12px'}}>active:</p>
                        <p style={{fontSize: '12px'}}>{active}</p>
                     </div>

                      <div className = 'card'>
                         <label>Deaths:</label>
                         <h2>{deaths}</h2>
                      </div>
                           
                 </div>
              </div> 
            <div className="map">
              <MapContainer center = {mapCenter} zoom = {mapZoom} whenCreated={setMap}>
               
              <TileLayer
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />{ mapCountries.map((elem) => {  
                  return(
                   <Circle
                      center={[elem.countryInfo.lat, elem.countryInfo.long]}  
                      zoom = {mapZoom2} 
                      color='#CC1034'
                      fillColor= '#CC1034'
                      fillOpacity={0.4}
                      radius={Math.sqrt(elem.cases) * 300}
                   ></Circle>
                   )})}
             </MapContainer>
          </div>

         </form>
     )
   }

export default Cases;