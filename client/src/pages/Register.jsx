import React, { useState } from 'react';
import image from '../images/image1.png';
import{useNavigate} from "react-router-dom";


const Register = () => {

  const [user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  });

const navigate= useNavigate();

  const handleInput =(e)=>{
    let name=e.target.name;
    let value= e.target.value;

    setUser({
      ...user,
      [name]:value,
    });

  };

  const handleSubmit= async(e)=>{
    e.preventDefault();
    console.log(user);

    try{
      const response = await fetch(`http://localhost:5000/api/auth/register`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(user),
        });

        console.log("registration",response);

        if(response.ok){
          setUser({username:"", email:"", phone:"", password:""});
          navigate("/login");
        }
        
    }
    catch(error){
      console.log("register ",error);
    }
  };



  return (
    <main>
      <div className='section-registration'>
        <div className='container grid grid-two-cols'>
          <div className='registration-image'>
           <img 
            src={image}
            alt=''
            width="400"
            height="400"
           />

          </div>

          <div className='registration-form'>
           <h1 className='main-heading mb-3' style={{color:"white",fontSize:"5rem"}}>registration form</h1>
           <br/>

           <form onSubmit={handleSubmit}>
           <div>
            <label htmlFor='username' style={{color:"white"}}>username</label>
            <input
              type='text'
              name='username'
              placeholder='username'
              id='username'
              required
              autoComplete='off'
              value={user.username}
              onChange={handleInput}
            />
           </div>


           <div>
            <label htmlFor='email' style={{color:"white"}}>email</label>
            <input
              type='text'
              name='email'
              placeholder='email'
              id='email'
              required
              autoComplete='off'
              value={user.email}
              onChange={handleInput}
            />
           </div>


           <div>
            <label htmlFor='phone' style={{color:"white"}}>phone</label>
            <input
              type='number'
              name='phone'
              placeholder='phone'
              id='phone'
              required
              autoComplete='off'
              value={user.phone}
              onChange={handleInput}
            />
           </div>

           <div>
            <label htmlFor='password' style={{color:"white"}}>password</label>
            <input
              type='password'
              name='password'
              placeholder='password'
              id='password'
              required
              autoComplete='off'
              value={user.password}
              onChange={handleInput}
            />
           </div>

<br/>

<button type='submit' className='btn btn-submit'>Register Now</button>

           </form>


          </div>

        </div>

      </div>
    </main>
  )
}

export default Register;
