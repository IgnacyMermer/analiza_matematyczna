import React from "react";
import './AnalizaMain.css';
import zbiory from "../images/zbiory.png"
import AiB from "../images/AiB.png"
import AlubB from "../images/AlubB.png"
import AbezB from "../images/AbezB.png"
import {Link} from "react-router-dom";

export default function FirstConcepts(){

    return(
      <div className='conceptsContainer'>
          <h1>Zbiory i ich oznaczanie</h1>

          <br/><br/>

          <p>Jeżeli chcemy napisać, że element a nalęży do zbioru A stosujemy zapis:</p>
          <p>a &#8712; A,</p>
          <p>Jeżeli jednak a nie należy to oznaczamy to:</p>
          <p>a &#8713; A.</p>

          <br/>

          <p>Zapis</p>
          <p>A &#8834; B lub B &#8835; A</p>
          <p>oznacza, że zbiór A jest zawarty w zbiorze B, tzn. każdy element zbioru A jest elementem zbioru B, czyli
          A jest podzbiorem B lub B jest nadzbiorem A.</p>
          <img src={zbiory}/>

          <h2>Jeśli wprowadzimy oznaczenia zbiorów:</h2>
          <p>R - zbiór liczb rzeczywistych</p>
          <p>P - zbiór liczb parzystych dodatnich</p>
          <p>Q - zbiór liczb nieparzystych dodatnich</p>
          <p>to możemy wprowadzić zapis:</p>
          <p>x &#8712; X : S(x), gdzie S(x) jest to funkcja zdaniowa</p>
          <p>i dla przykładu zapis:</p>
          <p>x &#8712; P : 1&#60;x&#60;8</p>
          <p>oznacza liczby: 2, 4, 6,</p>
          <p>a zapis: x &#8712; Q : x<sup>2</sup>&#60;16, oznacza liczby: 1,3.</p>

            <br/><br/>
            <h1>Logika w zbiorach</h1>

          <Link to="/analiza/pojecia-wstepne/logika"><button>Podstawy logiki</button></Link>

            <p><img src={AlubB}/></p>
            <p>A &#8746; B, inaczej: x &#8712; A &#8744; x &#8712; B</p>
            <br/>
            <p><img src={AiB}/></p>
            <p>A &#8745; B, inaczej: x &#8712; A &#8743; x &#8712; B</p>
            <br/>
            <p><img src={AbezB}/></p>
            <p>A \ B, inaczej: x &#8712; A &#8743; x &#8713; B</p>

            <Link to="/analiza/pojecia-wstepne/kwantyfikatory"><button>Kwantyfikatory</button></Link><br/>
            <Link to="/analiza/pojecia-wstepne/relacje"><button>Relacje</button></Link><br/>
            <Link to="/analiza/pojecia-wstepne/nierownosci-1-stopnia-1"><button>Nierówności 1-stopnia z jedną niewiadomą</button></Link><br/>
            <Link to="/analiza/pojecia-wstepne/dwumian-Newtona"><button>Dwumian Newtona</button></Link><br/>
            <Link to="/analiza/pojecia-wstepne/ciagi-nieskonczone"><button>Ciagi nieskonczone</button></Link><br/>

      </div>
    );
}


