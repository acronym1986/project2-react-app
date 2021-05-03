//import React, {Component} from 'react'
import React,  {useState,useEffect} from 'react'
 
  
 

function Login() {
   // const [idd,setId] = useState('')
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')

    
    
   useEffect(() => {  
      const timeoutId = setTimeout(() =>

    fetch('http://localhost:3000/users', {
       method: "POST",
       headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
    },
       body: JSON.stringify({
      // id: idd,
       username: userName,
       password: passWord
       })
    })
    .then(response => response.json())
    .then(data => {
       // setId(data.users.id)
        setUserName(data.users.username)
        setPassWord(data.users.password)
        console.log(data)
    })
    .catch(error => {console.log(error)}),
    1000)
    return () => clearTimeout(timeoutId);
})
  
 
    
const handleChangeUserName = event => {
    setUserName(event.target.value);
    
  };
    
  const handleChangePassWord = event => {
    setPassWord(event.target.value);
  };
  //const onSubmit = (event => {event.preventDefault(); a }) ;
     
 return (
            
                <div>
                <div className="loginContainer">
                <h2>Login</h2>
                    <form>
                            <input
                            name="username"
                            placeholder="User Name"
                            value={userName}
                            onChange={handleChangeUserName }
                            className="form-control"
                            />  <br />

                            <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={passWord}
                            onChange={handleChangePassWord }
                            className="form-control"
                            />  <br />

                        <button  className="btn btn-primary">Submit</button>

                        <div className = 'username'>
                         <label>User Name</label>
                         <p>{userName}</p>
                      </div>
                          
                      <div className = 'password'>
                         <label>Password</label>
                         <p>{passWord}</p>
                      </div>
                        </form>
                    </div>
            </div>
                
            
        )
    
}

export default Login;