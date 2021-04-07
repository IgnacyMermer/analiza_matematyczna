import React from "react";
import './AnalizaMain.css';
import MathJax from 'react-mathjax-preview';

export default function SzeregiNieujemne(){
    return(
      <div className='conceptsContainer'>
          <h1>Kryteria zbieżności i rozbieżności szeregów</h1>
          <br/><br/>
          <h3>Kryterium porównawcze.</h3>
          <p>Polega ono na porównywaniu szeregu z drugim szeregiem, którego zbieżność znamy. Jeśli wiemy, że badany szereg jest
          mniejszy od innego szeregu zbieżnego, to musi być on również zbieżny.</p>
          <br/>
          <p className='oneLine centerVertical'>
              {/*<div className='column'><sup className='nospace'>&#8734;</sup> &#8721; <sub>n=1</sub></div>a<sub><small>n</small></sub>*/}
              <MathJax math={'`sum_(n=1)^infty a_n`'}/>
              &nbsp;&nbsp;(A)
          </p>
          <p className='centerVertical oneLine'>
              {/*<div className='column'><sup className='nospace'>&#8734;</sup> &#8721; <sub>n=1</sub></div>b<sub><small>n</small></sub>*/}
              <MathJax math={'`sum_(n=1)^infty b_n`'}/>
              &nbsp;&nbsp;(B)
          </p>
          <p>Jeśli wiemy, że a<sub><small>n</small></sub> &#8804; b<sub><small>n</small></sub> to możemy wywnioskować:</p>
          <ul>
              <li>ze zbieżności szeregu B wynika zbieżność szeregu A</li>
              <li>z rozbieżności szeregu A wynika rozbieżność szeregu B</li>
          </ul>
          <br/><br/>

          <h3>Kryterium d'Alemberta</h3>

          <p className='centerVertical oneLine'>
              Mamy szereg
              {/*<div className='column'><sup className='nospace'>&#8734;</sup> &#8721; <sub>n=1</sub></div>u<sub><small>n</small></sub>*/}
              <MathJax math={'`sum_(n=1)^infty u_n`'}/>
              &nbsp;o wyrazach dodatnich. Jeżeli:
          </p>
          <p className='oneLine centerVertical'>
              {/*<div className='column'><sup className='nospace'>u<sub><small>n+1</small></sub></sup> <hr className='dwumianOgol'/>
              <sub className='nospace'>u<sub><small>n</small></sub></sub></div>*/}
              <MathJax math={'`u_(n+1)/u_n`'}/>
              &nbsp; &#60; 1, to szereg jest zbieżny.
          </p>
          <p className='oneLine centerVertical'>
              {/*<div className='column'><sup className='nospace'>u<sub><small>n+1</small></sub></sup> <hr className='dwumianOgol'/>
                  <sub className='nospace'>u<sub><small>n</small></sub></sub></div>*/}
              <MathJax math={'`u_(n+1)/u_n`'}/>
              &nbsp; &#8805; 1, to szereg jest rozbieżny.
          </p>

          <p>Dzięki twierdzeniu d'Alemberta możemy wywnioskować, że:</p>
          <p className='oneLine centerVertical'>{/*<div className='column'><sup className='verySmall'>&#8901;</sup>
              lim <sub>n&#10141;&#8734;</sub></div>
              <div className='column'><sup className='nospace'>u<sub><small>n+1</small></sub></sup>
                  <hr className='dwumianOgol'/> <sub className='nospace'>u<sub><small>n</small></sub></sub></div>
              &nbsp;&#60;*/}
              <MathJax math={'`lim_(n to infty) u_(n+1)/u_n`'}/>
              &nbsp;&#60;1, to szereg jest zbieżny.
          </p>
          <p className='oneLine centerVertical'>{/*<div className='column'><sup className='verySmall'>&#8901;</sup>
              lim <sub>n&#10141;&#8734;</sub></div>
              <div className='column'><sup className='nospace'>u<sub><small>n+1</small></sub></sup>
                  <hr className='dwumianOgol'/> <sub className='nospace'>u<sub><small>n</small></sub></sub></div>*/}
              <MathJax math={'`lim_(n to infty) u_(n+1)/u_n`'}/>
              &nbsp;&#62; 1, to szereg jest rozbieżny.
          </p>
          <p className='oneLine centerVertical'>{/*<div className='column'><sup className='verySmall'>&#8901;</sup>
              lim <sub>n&#10141;&#8734;</sub></div>
              <div className='column'><sup className='nospace'>u<sub><small>n+1</small></sub></sup>
                  <hr className='dwumianOgol'/> <sub className='nospace'>u<sub><small>n</small></sub></sub></div>*/}
              <MathJax math={'`lim_(n to infty) u_(n+1)/u_n`'}/>
              &nbsp;= 1, to szereg jest trudny do określenia i jest konieczne użycie innej metody badania zbieżności szeregów.
          </p>

          <h3>Kryterium Cauchy'ego</h3>
          <p>Głównymi wnioskami, które możemy wyciągnąć z podanych kryteriów Cauchy'ego:</p>
          <p className='centerVertical oneLine'>
              Jeżeli <MathJax math={'`lim_(n to infty) root(n)(u_n)`'}/> &nbsp; &#60; 1, to szereg jest zbieżny
          </p>
          <p className='centerVertical oneLine'>
              Jeżeli <MathJax math={'`lim_(n to infty) root(n)(u_n)`'}/> &nbsp; &#62; 1, to szereg jest rozbieżny
          </p>
          <p className='centerVertical oneLine'>
              Jeżeli <MathJax math={'`lim_(n to infty) root(n)(u_n)`'}/> &nbsp; = 1, to szereg jest niemożliwy do określenia tym kryterium.
          </p>
          {/*<p>Jeżeli granica n&#10141;&#8734; z pierwiastka o stopniu n z u<sub><small>n</small></sub> &#60; 1, to szereg jest zbieżny</p>
          <p>Jeżeli granica n&#10141;&#8734; z pierwiastka o stopniu n z u<sub><small>n</small></sub> &#62; 1, to szereg jest rozbieżny</p>
          <p>Jeżeli granica n&#10141;&#8734; z pierwiastka o stopniu n z u<sub><small>n</small></sub> = 1, to szereg jest sporny do określenia</p>*/}


      </div>
    );
}