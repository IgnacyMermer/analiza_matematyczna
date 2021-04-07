import React from "react";
import './AnalizaMain.css';
import MathJax from 'react-mathjax-preview';

export default function DwumianNewtona(){
    return(
        <div className='conceptsContainer'>
            <h1>Dwumian Newtona</h1>
            <p className='oneLine centerVertical'>Dwumianem Newtona nazywamy wzór na n-tą potęgę a+b. W tym wzorze używamy symbolu &nbsp;
                {/*(&nbsp<div className='column'><sup>n</sup> k</div>&nbsp;)*/}
                <MathJax math={'`((n),(k))`'}/> &nbsp; i jest on określony następująco:
            </p>
            <p className='oneLine centerVertical'>{/*(&nbsp;<div className='column'><sup>n</sup> k</div>&nbsp;) =
                <div className='column'><sup>n!</sup> <hr className='dwumianOgol'/> <sub>k!(n-k)!</sub></div>*/}
                <MathJax math={'`((n),(k)) = (n!)/(k!(n-k))`'}/>
            </p>

            <p>Symbol ! - oznacza silnię, czyli iloczyn wszystkich liczb naturalnych nie większych niż n.</p>
            <br/><br/>

            <p>Przykład:</p>
            {/*<p className='oneLine centerVertical'>(&nbsp;<div className='column'><sup>n</sup> 1</div>&nbsp;) = n</p>*/}
            <MathJax math={'`((n),(1)) = n`'}/>
            {/*<p className='oneLine centerVertical'>(&nbsp;<div className='column'><sup>n</sup> 3</div>&nbsp;) =
                <div className='column'><sup>n(n-1)(n-2)</sup> <hr className='dwumianOgol'/> <sub>1 &#8901; 2 &#8901; 3</sub></div>
            </p>*/}
            <MathJax math={'`((n),(3)) = (n(n-1)(n-2))/(1cdot2cdot3)`'}/>

            <br/><br/>

            <p>Wzór na dwumian Newtona:</p>
            <p className='oneLine centerVertical'>
                <MathJax math={'`(a+b)^n = sum_(k=0)^n &nbsp; ((n),(k)) &nbsp; a^(n-k) &nbsp; cdot b^k &nbsp; = &nbsp; a^n &nbsp;+&nbsp;' +
                '((n),(1)) &nbsp; a^(n-1) cdot b &nbsp; + &nbsp; ((n),(2)) &nbsp; a^(n-2)cdotb^2&nbsp;+&nbsp;...&nbsp;+b^n`'}/>
                {/*(a+b)<sup>n</sup>&nbsp;&nbsp; =&nbsp;
                <div className='column'><sup>n</sup> &#8721; <sub>k=0</sub></div>&nbsp;
                (<div className='column'><sup>n</sup><sub>k</sub></div>)&nbsp;
                a<sup>n-k</sup> &#8901; b<sup>k</sup>&nbsp;&nbsp; = &nbsp;a<sup>n</sup>+
                (<div className='column'><sup>n</sup><sub>1</sub></div>)&nbsp;
                a<sup>n-1</sup> &#8901; b + (<div className='column'><sup>n</sup><sub>2</sub></div>)&nbsp;
                a<sup>n-2</sup> &#8901; b<sup>2</sup> +...+ b<sup>n</sup>*/}
            </p>
            <br/><br/>

            <p>Przykład:</p>
            <p className='oneLine centerVertical'>Oblicz piąty wyraz rozwinięcia: {/*(a+b<sup>2</sup>)<sup>9</sup>*/} <MathJax math={'`(a+b^2)^9`'}/></p>
            <p>Piąty wyraz będzie równy: </p>
            <p className='oneLine centerVertical'>{/*(<div className='column'><sup>9</sup><sub>4</sub></div>)
                &nbsp;&#8901;&nbsp;a<sup>9-4</sup>&nbsp;&#8901;&nbsp;b<sup>4</sup> &nbsp;&nbsp; = &nbsp;&nbsp;
                126 &#8901; a<sup>5</sup> &#8901; b<sup>4</sup>*/}
                <MathJax math={'`((9),(4)) cdot a^(9-4) cdot b^4 = 126 cdot a^5 cdot b^4`'}/>
            </p>

        </div>
    );
}