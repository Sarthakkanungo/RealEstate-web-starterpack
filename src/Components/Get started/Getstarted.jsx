import React from 'react';
import './Getstarted.css';

const Getstarted = () => {
  return (
    <section className='g-wrapper'>
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Homyz</span>
                <span className='secondaryText'>
                    Subscribe and find super attractive Price quotes from us.
                    <br />
                    Find your Residence soon.
                </span>
                <button className='button'>
                    <a href='mailto:Sarthak.kanungo001@gmail.com'>Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Getstarted