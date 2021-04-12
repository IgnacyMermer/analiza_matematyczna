import React from "react";
import {Link} from "react-router-dom";
import './AnalizaMain.css'


export default function AnalizaMain(){
    return(
        <div className='analizaContainer'>
            <Link to="/analiza/pojecia-wstepne"><p>Pojęcia wstępne</p></Link>
            <Link to="/analiza/funkcja-jednej-zmiennej"><p>Funkcja jednej zmiennej</p></Link>
            <Link to="/analiza/granice-funkcji"><p>Granice funkcji</p></Link>
            <Link to="/analiza/pochodne"><p>Pochodne</p></Link>
            <Link to="/analiza/liczby-zespolone"><p>Liczby zespolone</p></Link>
        </div>
    );
}