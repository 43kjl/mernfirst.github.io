import React from 'react'
import { NavLink } from 'react-router-dom';
import'../index.css';

const Error = () => {
  return (
    <>
        <section className='error-page'>
          <div className='content'>
            <h2 className='header'>404</h2>
            <h4>sorry! page not found</h4>
            <p>In this case, the error appears because you don’t have the necessary permissions to access the wanted page.</p>

            <div className='btns'>
                <NavLink to='/' >Return home</NavLink>
                <NavLink to='/contact' >Report problem</NavLink>
            </div>
           
          </div>

        </section>
    </>
  )
}

export default Error;
