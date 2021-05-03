//import React from 'react';
import React, {useState, useEffect  } from 'react';

   function AddSearch() {
     //const { name } = useParams();
    
     const [input, setInput] = useState('');
     const [confirmed, setConfirmed] = useState('');
     //const [recovered, setRecovered] = useState('');
    // const [deaths, setDeaths] = useState('');

     //const [todo, setTodo] = useState("");
     const [todos, setTodos] = useState([]);
     
      
      useEffect(() => {
       
         fetch('https://covid-api.mmediagroup.fr/v1/cases?country=' + input)
          
         .then (response => response.json())
         .then (data => {
             
            setConfirmed(  data.All.confirmed );
            // setRecovered(  data.All.recovered );
            // setDeaths(  data.All.deaths );
             console.log( data);
              
          } )
         .catch(error => {
             console.log(error);    
         })
         },[input]);
         
         let v = confirmed;
         const handleChange = event => {
            setInput(event.target.value);
          };
           
         const addTodo = () => {
            setTodos([...todos,
              {
                id: todos.length + 1,
                text: input,
                completed: false
              }
            ]);
          };

         const onSubmit = event => {
            event.preventDefault();
            if (input === "") return;
            addTodo();
            setInput("");
          };


         const removeTodo = todoId => {
            const updatedTodos = todos.filter(input => input.id !== todoId);
            setTodos(updatedTodos);
          };
        
        
         const toggleTodo = todoId => {
            const updatedTodos = todos.map(todo => {
              return input.id === todoId
                ? { ...input, completed: !input.completed }
                : input;
            });
            setTodos(updatedTodos);
          };

     return (
          
        <div className="container">
         <form onSubmit={onSubmit}>
            <label htmlFor="input">Collect Item</label>
             <br />
             <input
             type = 'text'
             placeholder = 'Type something'
             value = {input}
             name = 'text'
             className = 'search-input'
             onChange = {handleChange}
             />
             <button className = "searchBar-button" >Add Item</button> 
         </form>
         <div>
            <ul>
             {todos.map(input => (
            <li key={input.id}>
              <span
                className={input.completed ? "item-unwanted" : undefined}
                onClick={() => toggleTodo(input.id)}
              >
                {input.text}{' : '}{v}{' '}
                
              </span>
              <span className="delete-btn" onClick={() => removeTodo(input.id)}>
              {' '}✕
              </span>
            </li>
          ))}
        </ul>
      </div>




         </div >
     )
   }



export default AddSearch;