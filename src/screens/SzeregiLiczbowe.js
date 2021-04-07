import React from "react";
import './AnalizaMain.css';
import {Link} from "react-router-dom";
import MathJax from 'react-mathjax-preview'

export default function SzeregiLiczbowe(){

    const szeregHarm = '`sum_(n=1)^infty (n+1)/n^a`';
    const szeregGeo = '`sum_(n=1)^infty aq^(n-1)   lub   a+aq+aq^2+...+aq^(n-1)`';


    return(
        <div className='conceptsContainer'>
            <h1>Nieskończony szereg liczbowy</h1>
            <p className='oneLine centerVertical'>Oznaczamy go symbolem:
                &nbsp;<MathJax math={'`sum_(n=1)^infty ((1),(.)) lub u_1+u_2+...+u_n+...`'}/>
            </p>
            <br/><br/>
            <p>Suma szeregu: s<sub><small>n</small></sub>=u<sub><small>1</small></sub>+u<sub><small>2</small></sub>+
            ...+u<sub><small>n</small></sub>, gdzie u<sub><small>1</small></sub>,u<sub><small>2</small></sub>,... - to wyrazy szeregu,
            a u<sub><small>n</small></sub> - to wyraz ogólny szeregu.
            </p>
            <br/><br/>
            <p className='oneLine centerVertical'>
                Jeżeli ciąg sum cząstkowych jest zbieżny, tzn. ma skończoną granicę s, to mówimy, że szereg jest zbieżny, a sumą
                szeregu nieskończonego jest liczba s. Oznaczamy to:
                {/*&nbsp;<div className='column'><sup className='nospace'>&#8734;</sup> &#8721; <sub>n=1</sub></div>
                u<sub><small>n</small></sub> = s.*/}
                <MathJax math={'`sum_(n=1)^infty (n+1)/n^a`'}/>
            </p>
            <p>Jeżeli szereg nie jest zbieżny, to mówimy, że jest to szereg rozbieżny.</p>
            <br/>
            <p className='oneLine centerVertical'>Głównym i koniecznym warunkiem zbieżności każdego szeregu
                <MathJax math={'`sum_(n=1)^infty u_n`'}/> &nbsp;jest to, żeby wyraz ogólny szeregu dążył do zero, czyli
                <MathJax math={'`lim_(n to infty) u_n = 0.`'}/>
            </p>
            <br/><br/>

            <h2>Typy szeregów:</h2>
            <h3>Szereg geometryczny</h3>
            {/*<p className='oneLine centerVertical'>
                <div className='column'><sup className='nospace'>&#8734;</sup> &#8721; <sub>n=1</sub></div>
                aq<sup><small>n-1</small></sup> &nbsp;&nbsp; lub &nbsp; a+aq+aq<sup><small>2</small></sup>+...+
                aq<sup><small>n-1</small></sup>
            </p>*/}
            <MathJax math={szeregGeo} />
            <p>Szereg geometryczny jest zbieżny, gdy q&#8714;&#8804;-1,1&#8805;</p>
            <br/>

            <h3>Szereg harmoniczny rzędu a</h3>
            {/*<p className='oneLine centerVertical'>
                <div className='column'><sup className='nospace'>&#8734;</sup> &#8721; <sub>n=1</sub></div>
                <div className='column'><sup className='nospace'>n+1</sup> <hr className='dwumianOgol'/>
                <sub className='nospace'>n<sup><small>a</small></sup></sub></div>
            </p>*/}
            <MathJax math={szeregHarm} />

            <p>Jeżeli a&#8804; to szereg jest rozbieżny, jeżeli a&#62;1 to szereg jest zbieżny.</p>
            <br/><br/>

            <Link to="/analiza/pojecia-wstepne/szeregi-liczbowe/nieujemne"><button>Szeregi o wyrazach nieujemnych</button></Link><br/>
            <Link to="/analiza/pojecia-wstepne/szeregi-liczbowe/przemienne"><button>Szeregi przemienne</button></Link><br/>
        </div>
    );
}