import React from 'react'
import Header from '../Header/Header'
import './Contact.css'
import contactVector from './../../assets/contact_anime.png'
import github from './../../assets/git.png'
import insta from './../../assets/instagram.png'
import twitter from './../../assets/twitter.png'
import linkedIn from './../../assets/linkedin.png'




export const Contact = () => {
    return (
        <div className='section-container'>
            <Header heading='Connect with me.' details='Interested to Collaborate? Feel free to Contact'/>

            <div className="contact-form-container">
                <form  className='contact-form' action="https://formspree.io/f/mbjqzdaw"
                method="POST">

                    <input type="email" name='_replyto'  placeholder='Enter your Email' className='input-box email-input'  />

                    <textarea type='text' name="message" className='input-box email-body' placeholder='Your Message' cols="30" rows="10"></textarea>

                    <button type='submit' className='contact-btn'> Send Email</button>

                </form>
            </div>


            <div className="social-icon-container">
                <a href="https://github.com/himanshsoni" className='social-icon' target='_blank' >
                    <img src={github} alt="" className='icon' />
                </a>
                <a href="https://www.linkedin.com/in/himansh-soni/" className='social-icon'  target='_blank' >
                    <img src={linkedIn} alt=""  className='icon' />
                </a>
                <a href="https://www.instagram.com/soni.himansh/" className='social-icon'  target='_blank'>
                    <img src={insta} alt="" className='icon' />
                </a>
                <a href="https://twitter.com/sonihimansh21"className='social-icon' target='_blank' >
                    <img src={twitter} alt=""  className='icon'/>
                </a>
            </div>

            {/* <div className="vector-frame">
                <img src={contactVector} alt="about" className='about-vector' />
            </div> */}
            
        </div>
        
    )
}
