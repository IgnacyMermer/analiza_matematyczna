import React from "react";
import {MyButton} from "../SimpleComponents/MyButton";
import './HeroSection.css';

export default function HeroSection(){

    return(

      <div className="hero-container">

          <div className='margin_top'></div>

          <h1>Projekt fizyczny</h1>

          <p>Witaj na naszej stronie!!!</p>

          <div className="hero-btns" >

              <MyButton  className="btns" buttonSize="btn--large" buttonStyle="btn--outline"  id="buttonik">
                  Rozpocznij
              </MyButton>

          </div>

      </div>
    );
}