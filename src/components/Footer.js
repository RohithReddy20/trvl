import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";
import $ from "jquery";

function Footer() {

  



  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Contact Developer of this website
        </p>
        
        <div className="input-areas">
          <form action="https://getform.io/f/f184dcc9-a1b1-4cfa-b69d-0bfecd300a37" method="POST">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            
            <input id="sbt" type="submit" name="submit" value="Send"/>
          </form>
        </div>
      </section>
      <div className="footer-links">
      <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a target="_blank" href="https://www.instagram.com/rohithreddy.c/">Instagram</a>
            <a target="_blank" href="https://www.facebook.com/RohithReddy20/">Facebook</a>
            <a target="_blank" href="#">Youtube</a>
            <a target="_blank" href="https://twitter.com/Ricky2027">Twitter</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              RRC
              <i class='fab fa-typo3' style={{position: "relative",top: "6px"}} />
            </Link>
          </div>
          <small class='website-rights'>RRC © 2021</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href="https://www.facebook.com/RohithReddy20/"
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <aria
              class='social-icon-link instagram'
              href="https://www.instagram.com/rohithreddy.c/"
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </aria>
            <Link
              class='social-icon-link youtube'
              to='/'
              
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <a
              class='social-icon-link twitter'
              href="https://twitter.com/Ricky2027"
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link linkedin'
              href="https://www.linkedin.com/in/chimpiri-rohith-78a6771b5"
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
