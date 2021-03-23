import React, {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import 'react-bootstrap';
import './Navbar.css';
import {useTransition, animated, useSpring} from "react-spring";
import {MyButton} from "../../SimpleComponents/MyButton";
import {Button} from "react-bootstrap";

function Navbar(){

    const [click,setClick] = useState(false);
    const [githubButton, setGithubButton] = useState(false);

    const handleClickMenu=()=>{
        setClick(!click);
    };

    const closeMenu=()=>{
        setClick(false);
    };

    const showButton = ()=>{
      if(window.innerWidth<=960){
          setGithubButton(false);
      }
      else{
          setGithubButton(true);
          setClick(false);
      }
    };

    window.addEventListener('resize',showButton);

    useEffect(()=>{
       showButton();
    },[]);

    const [items, set] = useState([{text:"Strona główna", key:0, link:"/"}, {text:"Analiza", key:1, link: "/analiza"},
        {text:"Strona o autorach", key:2, link: "/autorzy"}, {text: "Kontakt",key: 3, link: "/kontakt"}])

    const [state1, toggle1] = useState(true)
    const [state2, toggle2] = useState(true)
    const [state3, toggle3] = useState(true)
    const [state4, toggle4] = useState(true)
    const { x1 } = useSpring({ from: { x1: 0 }, x1: state1 ? 1 : 0, config: { duration: 300 }})
    const { x2 } = useSpring({ from: { x2: 0 }, x2: state2 ? 1 : 0, config: { duration: 300 }})
    const { x3 } = useSpring({ from: { x3: 0 }, x3: state3 ? 1 : 0, config: { duration: 300 }})
    const { x4 } = useSpring({ from: { x4: 0 }, x4: state4 ? 1 : 0, config: { duration: 300 }})


    return(
      <>
          <nav className="navbar">
              <div className="navbar-container">

                  <Link to="/" className="navbar-logo" onClick={closeMenu}>
                      Strona
                  </Link>

                  {/*!githubButton&&<div className='menu-item' onClick={handleClickMenu}>
                      <fa-icon className={click?'fas fa-times':'fas fa-bars'} color="#2980B9" size="2em"></fa-icon>
                  </div>*/}

                  {!githubButton&&<div className='menu-item' onClick={handleClickMenu}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#fff"
                           className="bi bi-filter-right" viewBox="0 0 16 16">
                          <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"/>
                      </svg>
                  </div>}


                  <ul className={click?'nav-menu active':'nav-menu'}>

                      {items.map(({text, link, key })=> {
                          var tab = window.location.pathname.toString().split("/");
                          var localization = tab[tab.length-1];

                          localization='/'+localization;

                          return <animated.div key={key}  style={{
                              opacity: key===1?x1.interpolate({ range: [0, 1], output: [1, 1] }):
                                  key===2?x2.interpolate({ range: [0, 1], output: [1, 1] }):
                                  key===3?x3.interpolate({ range: [0, 1], output: [1, 1] }):
                                  x4.interpolate({ range: [0, 1], output: [1, 1] }),
                              transform: key===1?x1.interpolate({range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                      output: [1, 0.995, 0.9875, 1.0125, 0.9875, 1.0125, 1.05, 1]}).interpolate(x1 => `scale(${x1})`):
                                  key===2?x2.interpolate({range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                      output: [1, 0.99, 0.98, 1.02, 0.98, 1.02, 1.01, 1]}).interpolate(x2 => `scale(${x2})`):
                                  key===3?x3.interpolate({range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                      output: [1, 0.99, 0.98, 1.02, 0.98, 1.02, 1.01, 1]}).interpolate(x3 => `scale(${x3})`):
                                  x4.interpolate({range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                      output: [1, 0.99, 0.98, 1.02, 0.98, 1.02, 1.01, 1]}).interpolate(x4 => `scale(${x4})`)
                          }} onMouseEnter={()=>key===1?toggle1(!state1):key===2?toggle2((!state2)):key===3?toggle3((!state3)):toggle4(!state4)}
                                        onClick={()=>console.log("lla")}
                                        className='nav-item'>
                              <Link to={link} onClick={handleClickMenu}
                                    className={click&&link===localization?"nav-link active this":link===localization?"nav-link this":
                                        click?"nav-link active":"nav-link"}>
                                  {text}
                              </Link>
                          </animated.div>
                          }
                      )}

                  </ul>

                  {githubButton&&<MyButton id="githubButton" buttonStyle="btn--outline" link="https://github.com/IgnacyMermer2003">
                      Github</MyButton>}

                  <img src="/icons/github.svg" alt="Github" width="32" height="32"
                       title="Github" color="white" className="githubIcon" />

              </div>
          </nav>
      </>
    );
};

export default Navbar;