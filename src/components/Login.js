import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useRef } from 'react'
import { auth } from '../utils/firebase'

const Login = () => {
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleLogin = ()=>{
          //SignIn Logic ---
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user)
             
          })
          .catch((error) => {
              // const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage)
          });
    }
  return (
    <div>
    {/* <Header/> */}
    <div className='absolute'>
    </div>
    <form 
    className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-75'
        onSubmit={(e)=> e.preventDefault()}
    >
        <h1 className='text-white font-bold text-3xl py-4'>Login</h1>
        {/* {
            <input type='text' 
            ref={name}
            placeholder='Full Name'
            className='p-4 my-4 w-full bg-gray-300'
            />

        } */}
        <input 
        type='text' 
        ref={email}
        placeholder='Email Address'
         className='p-4 my-4 w-full bg-gray-300'
        />
        
        
        <input 
        type='password' placeholder='Password'
        ref={password}
         className='p-4 my-4 w-full bg-gray-300'
        />
        {/* <p className='text-red-500 font-bold text-lg py-2'>{errormessage}</p> */}
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleLogin}>
           Login</button>

     
    </form>        
</div>
  
  )
}

export default Login
