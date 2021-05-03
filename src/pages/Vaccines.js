//import React from 'react';
import React, {useState, useEffect  } from 'react';
import { Pie } from "react-chartjs-2";


   function Vaccines() {
     //const { name } = useParams();
    
     const [input, setInput] = useState('');
     const [population, setPopulation] = useState('');
     const [administered,setAdministered] = useState('');
     const [people_vaccinated, setPeople_vaccinated] = useState('');
     const [people_partially_vaccinated, setPeople_partially_vaccinated] = useState('');
     const [updated, setUpdated] = useState('');
     
     
     useEffect(() => {
       
         fetch('https://covid-api.mmediagroup.fr/v1/vaccines?country=' + input)
          
         .then (response => response.json())
         .then (response => {
             
            setPopulation( response.All.population );
            setAdministered(response.All.administered );
            setPeople_vaccinated(response.All.people_vaccinated);
            setPeople_partially_vaccinated( response.All.people_partially_vaccinated );
            setUpdated( response.All.updated);
              console.log( response);
              
          } )
         .catch(error => {
             console.log(error);
              
         })
         },[input]);

         const handleChange = event => {
            setInput(event.target.value);
          };
          
     
         const pie = {
            labels: [
               'population',
               'administered',
               'people vaccinated',
               'people partially vaccinated'
            ],
            datasets: [{
              label: 'status of vaccines Administration ',
              data: [
                population, 
                administered,
                people_vaccinated, 
                people_partially_vaccinated
                    ],
              backgroundColor: [
                'rgb(36, 135, 168)',
                'rgb(226, 115, 0)',
                'rgb(76, 175, 80)',
                'rgb(255, 204, 0)'
              ],
              hoverOffset: 4
            }]
          };
       
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
                        <label>Population</label>
                        <h3>{population}</h3>
                     </div>

                     <div className = 'card'>
                        <label>partially vaccinated</label>
                        <h2>{people_partially_vaccinated}</h2>
                     </div>

                      <div className = 'card'>
                         <label>Updated</label>
                         <p style = { {lineHeight:'20px', fontWeight: 'bold'}}>{updated}</p>
                      </div>
                 </div>
              </div> 
               
               <div>
               <Pie data= {pie} width={300} height={400} 
               options={{ maintainAspectRatio: false }}/>
               </div>
              
         </form>
         
     )
   }



export default Vaccines;