import React from "react";
import './AnalizaMain.css';

export default function CiagiNiesk(){
    return(
      <div className='conceptsContainer'>
          <h1>Ciąg nieskończony</h1>
          <p>Ciąg nieskończony to ciąg, który nie ma określonego wyrazu ostatniego, znaczy to, że każdej liczbie naturalnej
          n odpowiada wyraz tego ciągu.</p>
          <br/>
          <p>Ciąg nieskończony ma granicę g, jeżeli dla każdej liczby dodatniej E istnieje w ciągu takie miejsce N, że dla każdego
          n&#8805;N zachodzi nierówność:</p>
          <p>|u<sub><small>n</small></sub>-g|&#60;E</p>
          <p>Zapis, że ciąg dąży do granicy g wygląda następująco:</p>
          <p className='oneLine centerVertical'>u<sub><small>n</small></sub>&#10141;g, gdy n&#10141;&#8734; &nbsp;&nbsp; lub &nbsp;&nbsp;
              <div className='column'><sup className='verySmall'>&#8901;</sup> lim <sub>n&#10141;&#8734;</sub></div>
              u<sub><small>n</small></sub> = &#8734;
          </p>
          <br/><br/>

          <p>Ciąg dąży do plus nieskończoności, jeżeli dla każdej liczby M&#62;0 można znaleźć w ciągu taki wyraz na pozycji n, dla
              którego u<sub><small>n</small></sub>&#62;M</p>

          <p>Ciąg dąży do minus nieskończoności, jeżeli dla każdej liczby M&#62;0 można znaleźć w ciągu taki wyraz na pozycji n, dla
              którego u<sub><small>n</small></sub>&#60;-M</p>
      </div>
    );
}