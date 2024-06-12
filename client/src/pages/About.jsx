import React from 'react';
import image from '../images/image2.png';

const About = () => {
  return (
    <>
    <section className='section-hero' style={{color:"white"}}>
        <div className='container grid grid-two-cols'>
          <div className='hero-content'>
            
            <h1>Why Choose Us?</h1>
            <p>Separate legal entity: The company have a separate legal entity from its owner. It means they have the right to sue and be sued in their names.</p>
            <p>Limited liability: The liability of the shareholders or owners of a company is limited to the amount of capital they have invested in the company.</p>
            <p>Perpetual succession: It has a perpetual succession, meaning it can continue to exist even if the ownership or management changes.</p>
            <p>Separate taxation: It is subject to separate taxation, which means that it must pay taxes on its profits and income, and shareholders</p>

<div className='btn btn-group'>
   <a href='/contact'>
   <button className='btn'>Connect Now</button>
   </a>

   <a href='/services'>
   <button className='btn secondary-btn'>Learn More</button>
   </a>

</div>

          </div>

          <div className='hero-image'>
            <img src={image}
            alt=''
            height="500"
            width="500"
            />
          </div>
        </div>
      </section>
      
      </>
  )
}

export default About;
