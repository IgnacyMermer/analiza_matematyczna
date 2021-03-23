import React from "react";
import './AnalizaMain.css'

export default function SimpleLogika(){
    return(
      <div className='conceptsContainer'>
          <p>Wyrażenia logiczne:</p>
          <p>&#8764;p, oznacza: nieprawda, że p</p>
          <p>p &#8744; q, oznacza: p lub q</p>
          <p>p &#8743; q, oznacza: p i q</p>
          <p>p &#8658; q, oznacza: jeśli p to q lub z p wynika q</p>
          <p>Jeżeli p&#8658;q oraz q&#8658;p to zastosować zapis:</p>
          <p>p &#8660; q lub p &#8801; q</p>
      </div>
    );
}