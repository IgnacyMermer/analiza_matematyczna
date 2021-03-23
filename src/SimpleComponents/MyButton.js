import {Button} from "react-bootstrap";
import React from "react";
import './MyButton.css';


const STYLES = [
  'btn--primary',
  'btn--outline',
];

const SIZES = [
  'btn--small',
  'btn--medium',
  'btn--large',
];

export const MyButton = (
    {children, onClick, type, buttonStyle, buttonSize,id,link}
    ) =>{

    const checkButtonStyle = STYLES.includes(buttonStyle)?buttonStyle:STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)?buttonSize:SIZES[1];

    return(
      <a href={link} target="_blank" className="btn-mobile">
          <Button variant="outline-primary" size="lg" className={`btn ${checkButtonStyle} ${checkButtonSize} ${id}`} id="buttonik"
            onClick={onClick} type={type}
          >
              {children}
          </Button>

      </a>
    );
}
