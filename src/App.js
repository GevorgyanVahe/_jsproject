import React from "react"
import {useState, useEffect } from "react";
import LoginForm from './components/LoginForm'


function App () {
       const [formValues, setFormValues] = useState({email: '', password: '', remember: false});
       const [isLogedin, setIsLogedin] = useState(false)

       useEffect(()=>{
         const raw = localStorage.getItem('userData') 
         setFormValues(JSON.parse(raw))
       },[])

       const onChange = (event)=>{
              if(event.target.name === 'remember'){
                setFormValues({...formValues, [event.target.name]: event.target.checked})
              } else {
                setFormValues({...formValues, [event.target.name]: event.target.value})     
              }
       }

       const handleLogin = (event)=>{
        event.preventDefault();
         if(formValues.remember){
                     localStorage.setItem('userData', JSON.stringify(formValues))
         } else {
                     sessionStorage.setItem('userData', JSON.stringify(formValues))    
        }
        setIsLogedin(true)
        } 

        const logout = ()=>{
        localStorage.clear();
        sessionStorage.clear();
              setIsLogedin(false)
       }

        return (
       <div>
        {isLogedin?
         <div>
                  <p>Test</p>
                  <button onClick={logout}>Logout</button>
         </div>
                  :<LoginForm onChange={onChange} handleLogin={handleLogin}/>
        }
       </div>
       )
 
}

export default App