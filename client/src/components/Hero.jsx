import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"
const Hero = () => {
  return (
    <div className='bg-black'>
      <section className='overflow-hidden mx-auto max-w-screen-2xl pt-16 relative'>
        <div className='relative '>
          {/* <img src="1.png" className='lg:mt-0 mt-10' alt='' /> */}
          <div className='btn-container'>
            <Link to="/test"><button className='submit_btn'>Get Started</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
