import React from "react";
import '../App.css'
import './HeroSection.css';
import { Button } from './Button'

function HeroSection() {
    return (
        <div className="hero-container">
            <img src="/images/img-home.jpg" alt=""/>
            <div className="background-items">
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-buttons">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <i className="far fa-play-circle"></i>
                </Button>
            </div>
            </div>
        </div>
    );
}

export default HeroSection;