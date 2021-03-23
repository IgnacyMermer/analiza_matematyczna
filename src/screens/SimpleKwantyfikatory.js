import React from "react";
import './AnalizaMain.css'

export default function SimpleKwantyfikatory(){
    return(
        <div className='conceptsContainer'>

            <p>Symbole:</p>
            <p>&#8896;(&#8704;, &#8719;) - nazywany jest kwantyfikatorem dużym lub kwantyfikatorem ogólnym</p>
            <p>&#8897;(&#8707;, &#8721;)  - nazywany jest kwantyfikatorem małym lub kwantyfikatorem szczegółowym.</p>

            <br/><br/>
            <p>Do zapisu funkcji zdaniowych często możemy zastosować symbole zwane kwantyfikatorami.</p>
            <p>Jeśli S(x) oraz P(x) oznaczają odpowiednio dwie funkcje zdaniowe to zapis:</p>
            <p className='oneLine'><div className='column'>&#8896;<sub>x</sub></div>&nbsp; S(x)</p>
            <p>oznacza, że dla każdego x jest S(x), zapis:</p>
            <p className='oneLine'><div className='column'>&#8897;<sub>x</sub></div>&nbsp; S(x)</p>
            <p>oznacza, że istnieje takie x, że S(x), zapis</p>
            <p className='oneLine'><div className='column'>&#8896;<sub>P(x)</sub></div>&nbsp; S(x)</p>
            <p>oznacza, że dla każdego x spęłniającego warunek P(x) zachodzi S(x), zapis</p>
            <p className='oneLine'><div className='column'>&#8897;<sub>P(x)</sub></div>&nbsp; S(x)</p>
            <p>oznacza, że istnieje takie x spęłniające P(x), dla którego zachodzi S(x).</p>
            <br/>
            <p>Przykłady:</p>
            <p className='oneLine'><div className='column'>&#8896;<sup>x&#62;3</sup></div>x<sup>2</sup>&#62;3</p>
            <p>powyższe zdanie jest prawdziwe, ponieważ dla każdej liczby większej od 3, jej kwadrat będzie większy od 9.</p>
            <p>Natomiast jeśli zamienimy dane i zapiszemy zdanie: &#8896;<sub><small>x<sup>2</sup>&#62;3</small></sub>x&#62;3</p>
            <p>będzie nieprawdziwe, ponieważ np. liczba x=-5 nie spełnia powyższego zdania.</p>

            <br/><br/>

            <p>Zaprzeczanie zdań z kwantyfikatorami:</p>

                <p className='oneLine'><div className='column'>&#8764; &#8896;<sub><small>&nbsp;&nbsp;&nbsp;&nbsp;x&#8712;X
                </small></sub></div>&nbsp;S(x) &#8660; <div className='column'>&#8897;
                        <sub><small>x&#8712;X</small></sub></div> &nbsp;(&#8764;S(x))</p>

                <p className='oneLine'><div className='column'>&#8764; &#8897;<sub><small>&nbsp;&nbsp;&nbsp;&nbsp;x&#8712;X</small>
                </sub></div> &nbsp;S(x) &#8660; <div className='column'> &#8896;<sub><small>x&#8712;X</small></sub></div>
                        &nbsp;(&#8764;S(x))</p>

                <p className='oneLine'><div className='column'><div>&#8764; &#8896;</div><sub><small>&nbsp;&nbsp;&nbsp;&nbsp;
                        x&#8712;X</small></sub></div>
                    &nbsp;<div className='column'>&#8897;<sub><small>y&#8712;Y</small></sub></div> S(x,y) &#8660;
                    &nbsp;<div className='column'>&#8897;<sub><small>x&#8712;X</small></sub></div>
                    &nbsp;<div className='column'>&#8896;<sub><small>y&#8712;Y</small></sub></div> (&#8764;S(x,y))</p>

            <p>Przy zaprzeczaniu duży kwantyfikator przechodzi w mały, mały przechodzi w duży, oraz zdanie S(x,y) przechodzi
            w zdanie &#8764;S(x,y)</p>


        </div>
    );
}