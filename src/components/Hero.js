import React from "react";
import logo from '../images/photo-grid.png'

function Hero(){

    return(
        <section className="hero">
            <img src={logo} alt="logo" className="hero--pic"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--para">Join unique interaction activities led by
                one-of-a-kind hosts-all without leaving home
            </p>
        </section>
    )
}

export default Hero