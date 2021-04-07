import React from "react";
import MathJax from 'react-mathjax-preview';
import './AnalizaMain.css';


export default function SzeregiPrzemienne(){
    return(
        <div className='conceptsContainer'>
            <h1>Szeregi przemienne</h1>
            <p>Wcześniej mogliśmy grupować i zmieniać kolejność wyrazów szeregu. Jednak teraz przy szeregach przemiennych,
                gdy wyrazy na przemian są różnego znaku, nie możemy tego czynić przy określaniu sumy, granicy lub zbieżności.
            </p>
            <h3>Kryterium Leibniza</h3>
            <p className='oneLine centerVertical'>
                Jeżeli od pewnego wyrazu szeregu przemiennego <MathJax math={'`sum_(n=1)^(infty) u_n`'}/>&nbsp; wartości
                bezwzględne dażą do zera to ciąg jest zbieżny.
            </p>
            <p>Możemy z tego wywnioskować, że:</p>
            <p><MathJax math={'|`u_(n+1)|&#8804;|u_n|`'}/></p>
            <p><MathJax math={'`lim_(n to infty) u_n = 0`'}/></p>
            <br/><br/>

            <h3>Kryterium bezwzględnej zbieżności szeregów</h3>
            <p className='oneLine centerVertical'>
                Jeżeli szereg <MathJax math={'`sum_(n=1)^(infty) |u_n|`'}/>&nbsp;jest zbieżny to również szereg
                <MathJax math={'`sum_(n=1)^(infty) u_n`'}/>&nbsp; jest zbieżny. Jedyny warunkiem jest to, że wartości bezwględne
                drugiego szeregu muszą być równe wartościom pierwszego szeregu.
            </p>
            <p>Przykład:</p>
            <MathJax math={'`sum_(n=1)^(infty) ((-1)^(n+1))/(n^3)`'}/>
            <p className='oneLine centerVertical'>Szereg ten jest zbieżny, ponieważ szereg
                <MathJax math={'`sum_(n=1)^(infty) 1/(n^3)`'}/> jest zbieżny.

            </p>


        </div>
    );
}