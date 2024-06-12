import React,{useState} from 'react';
import image from '../images/image2.png';
import'../index.css';


const Contact = () => {

  const [user,setUser]=useState({
    username:"",
    email:"",
    message:"",
  });


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
      const response = await fetch(`http://localhost:5000/api/form/contact`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(user),
        });
        console.log("contact",response);

        if(response.ok){
          setUser({email:"",username:"",message:""});
          alert("message send sucessfully");
        }
        

    }catch(error){
      console.log("contact",error);
    }
  }

  return (
    <main>
    <section className='section-contact'>
      <div className='contact content container'>
        <h1 className='main-heading' style={{color:"white"}}>Contact Us</h1>
          </div>

          <div className='container grid grid-two-cols'>
          <div className='contact-img'>
         <img 
          src={image}
          alt=''
          width="400"
          height="400"
         /></div>

       

        <section className='section-form'>
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
          <label htmlFor='message' style={{color:"white"}}>message</label>
         <textarea 
          name="message"
          id='message'
            autoComplete='off'
            value={user.message}
            onChange={handleInput}
            required
          cols='30'
          rows='6' >

         </textarea>
         </div>

<br/>
<div>
<button type='submit' className='btn btn-submit'>Submit</button>
</div>
         </form>


        </section>

      </div>



      <section>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228012.2630045528!2d85.77198127647192!3d26.754215607744474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec4005fb138bb9%3A0x533a64cf0e13c2d1!2sJanakpur!5e0!3m2!1sen!2snp!4v1716612687902!5m2!1sen!2snp"
       width="100%"
        height="350" 
       
        allowFullscreen
        loading="lazy"
         referrerPolicy="no-referrer-when-downgrade">

         </iframe>
      </section>


     
    </section>
  </main>
  )
}

export default Contact;
