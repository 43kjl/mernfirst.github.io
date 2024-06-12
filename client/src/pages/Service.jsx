import React,{useState,useEffect} from 'react';
import "../index.css";

import image3 from"../images/image3.png";

const Service = () => {
  const [services,setServices]=useState([]);


  const getServices=async()=>{
    try{
         const response= await fetch("http://localhost:5000/api/data/service",{
 method:"GET",
         });
         console.log(response);
         if (!response.ok){
             const data=await response.json();
            console.log(data.msg);
             setServices(data.msg);
         }
         
         }
         catch(error){
             console.log(`services frontend error:${error}`);
    }
 };
 useEffect(()=>{
  getServices();
},[]);


 
  return (
   <>
    <section className='section-services' style={{color:"white"}}>
       <div className='container'>
         <h1 className='main-heading' style={{textDecoration:"#535bf2 underline"}}>services</h1>
       </div>

       <div className='container grid grid-three-cols' style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>

       {services.map((curElem,index)=>{
          const {price,description,service,provider}=curElem;

          return(
          <div className='card' key={index}>
         <div className='card-image'>
          <img src={image3} alt='' width="200"/>
         </div>

<div className='card-details'>
   <div className='grid grid-two-cols'>
    <p>{provider}</p>
    <p>{price}</p>
   </div>
   <h2>{service}</h2>
   <p>{description}</p>
</div>
        </div>
          );
          })}
       </div>
    </section>
   </>
  )
}

export default Service;
