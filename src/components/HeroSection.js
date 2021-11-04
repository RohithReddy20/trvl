import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className="hero-container">
            
            <h1>H! IM NGAN</h1>
            <p>Welcome to My Dating Profile</p>
            <div className="hero-btns">
                <Button  className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large">
                     GET STARTED
                </Button>
                <Button  className="btns"
                fallback="about-me"
                buttonStyle="btn--primary"
                buttonSize="btn--large">
                    ABOUT ME <i className="far fa-play-circle"/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
