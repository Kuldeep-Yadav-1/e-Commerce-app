import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import {auth , provider} from '../firebase'
import { useNavigate } from 'react-router-dom'

//props ===> info = {props.data} = {setLoggedIn}
function Login(props) {
  const navigate = useNavigate()

  function pleaseLogin(){
    //Display Popup
    signInWithPopup(auth, provider)
    .then(function(){

      //It means the user is loggedIn
      //setIsLoggedIn(true)
      props.info(true)


      //Logic to Display the mailId & userName that is used in login
      const userName = auth.currentUser.displayName
      const email = auth.currentUser.email
      console.log(userName , email) 

      // use navigate hooks call with the help of navigate variable
      navigate("/home")


    })
    .catch(function(error){
      console.log(error)
    })

  }

  return (
    <div style={{margin : 30}}>
        <button className='btn btn-outline-primary' onClick={pleaseLogin}>Login With Google</button>
    </div>
  )
}

export default Login
