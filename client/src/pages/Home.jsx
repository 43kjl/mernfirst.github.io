import React from 'react';
import image from '../images/image2.png';
import '../index.css';

const Home = () => {
  return (
    <main>
      <section className='section-hero' style={{color:"white"}}>
        <div className='container grid grid-two-cols'>
          <div className='hero-content'>
            <p>We are the world best IT company.</p>
            <h1>Welcome to santa mernstack</h1>
            <p>MERN is one of several variations of the mean stack
  where the traditional Angular.js front-end framework is replaced with React.js. Other variants include mevn and really any front-end JavaScript framework.

Ready to take the next step?</p>

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




      <section className='section-analytics' style={{color:"white"}}>
      <div className='container grid grid-four-cols'>
         <div className='div1'>
          <h2>50+</h2>
          <p>registered companies</p>
         </div>

         <div className='div1'>
          <h2>100,000+</h2>
          <p>Happy Clients</p>
         </div>

         <div className='div1'>
          <h2>500+</h2>
          <p>Well known developers</p>
         </div>

         <div className='div1'>
          <h2>24/7</h2>
          <p>services</p>
         </div>

      </div>
</section>



<section  className='section-hero' style={{color:"white"}}>
<div className='container grid grid-two-cols'>
<div className='hero-image'>
  <img src={image}
  alt=''
  height="800"
  width="800"
  />
</div>


<div className='hero-content'>
            <p>We are the world best IT company.</p>
            <h1>Get Started Today</h1>
            <p>MERN is one of several variations of the mean stack
  where the traditional Angular.js front-end framework is replaced with React.js. Other variants include mevn and really any front-end JavaScript framework.

Ready to take the next step?</p>

<div className='btn btn-group'>
   <a href='/contact'>
   <button className='btn'>Connect Now</button>
   </a>

   <a href='/services'>
   <button className='btn secondary-btn'>Learn More</button>
   </a>

</div>
</div>
          </div>

</section>



    </main>




  )
}

export default Home;
