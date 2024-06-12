import React,{useState} from 'react';
import image from '../images/image2.png';
import {useNavigate} from"react-router-dom";

const Login = () => {

  const [user,setUser]=useState({
    email:"",
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

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(user);

    try{
      const response = await fetch(`http://localhost:5000/api/auth/login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(user),
        });
        console.log("login form",response);

        if(response.ok){
          alert("login sucessful");

          const res_data=await response.json();
          localStorage.setItem("token",res_data.token);
          
          setUser({email:"",password:""});
          navigate("/");
        }
        else{
          alert("invalid credentials");
          console.log("invalid credentials");
        }

    }catch(error){
      console.log("login ",error);
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
         <h1 className='main-heading mb-3' style={{color:"white"}}>Login form</h1>
         <br/>

         <form onSubmit={handleSubmit}>
         
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
<button type='submit' className='btn btn-submit'>Login Now</button>

         </form>


        </div>

      </div>
     

    </div>
  </main>
  )
}

export default Login;
