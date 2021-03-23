import React from "react";
import './AnalizaMain.css';

export default function Relacje(){
    return (
        <div className='conceptsContainer'>
            <h1>Relacje (dwuargumentowe)</h1>
            <p>A i B oznaczają pewne zbiory.</p>
            <p>Iloczyn kartezjański (A x B) jest zbiorem wszystkich par (a,b), gdzie a&#8712;A, b&#8712;B</p>
            <p>Możemy go zapisać w następujący sposób:</p>
            <p> A x B = &#123;(a, b) : a&#8712;A, b&#8712;B&#125;</p>
            <br/>
            <p>Wynikiem iloczynu kartezjańskiego (A x A) będzie natomiast zbiór par (a&#39;, a&#39;&#39;), gdzie
            a&#39;&#8712;A, a&#39;&#39;&#8712;A, możemy to również zapisać: a&#39; A a&#39;&#39;.</p>

            <br/><br/>

            <h3>Relacja przechodnia</h3>
            <p>Nazywamy tak relacje R w zbiorze A, gdy zachodzi implikacja:</p>
            <p className='oneLine'>
                <div className='column'>&#8896;<sub>a&#8712;A</sub></div>&nbsp;
                <div className='column'>&#8896;<sub>b&#8712;A</sub></div>&nbsp;
                <div className='column'>&#8896;<sub>c&#8712;A</sub></div>&nbsp;
                ((a R b )&#8743;(b R c))&#8658;(a R c).
            </p>
            <p>R - oznacza dowolny podzbiór iloczynu kartezjańskiego (A x A),</p>
            <p>a,b,c - oznaczają dowolne podzbiory pewnego zbioru X,</p>
            <p>A - oznacza rodzinę wszystkich pozbiorów X.</p>

            <br/><br/>

            <h3>Relacja zwrotna</h3>
            <p>Nazywamy tak relacje R w zbiorze A, gdy zachodzi implikacja:</p>
            <p className='oneLine'>
                <div className='column'>&#8896;<sub>a&#8712;A</sub></div>&nbsp;
                a R a.
            </p>

            <h3>Relacja symetryczna</h3>
            <p>Nazywamy tak relacje R w zbiorze A, gdy zachodzi implikacja:</p>
            <p className='oneLine'>
                <div className='column'>&#8896;<sub>a&#39;&#8712;A</sub></div>&nbsp;
                <div className='column'>&#8896;<sub>a&#39;&#39;&#8712;A</sub></div>&nbsp;
                (a&#39; R a&#39;&#39;)&#8658;(a&#39;&#39; R a&#39;).
            </p>

            <h3>Relacja antysymetryczna</h3>
            <p>Nazywamy tak relacje R w zbiorze A, gdy zachodzi implikacja:</p>
            <p className='oneLine'>
                <div className='column'>&#8896;<sub>a&#39;&#8712;A</sub></div>&nbsp;
                <div className='column'>&#8896;<sub>a&#39;&#39;&#8712;A</sub></div>&nbsp;
                ((a&#39; R a&#39;&#39;)&#8743;(a&#39;&#39; R a&#39;))&#8658;(a&#39; = a&#39;&#39;).
            </p>
            <br/><br/>

            <p>Zbiór A jest częściowo uporządkowany ze względu na relację R, jeśli relacja R w zbiorze A jest zwrotna, przechodnia
            oraz antysymetryczna.</p>

            <br/>

            <p>Zbiór A jest liniowo uporządkowany ze względu na relację R, jeśli relacja R w zbiorze A jest zwrotna, przechodnia
                ,antysymetryczna i zachodzi warunek:</p>

            <p className='oneLine'>
                <div className='column'>&#8896;<sub>a&#39;&#8712;A</sub></div>&nbsp;
                <div className='column'>&#8896;<sub>a&#39;&#39;&#8712;A</sub></div>&nbsp;
                (a&#39; R a&#39;&#39;)&#8744;(a&#39;&#39; R a&#39;).
            </p>
            <br/>
            <p>Przykładem może być zbiór liczb reczywistych, ponieważ jest on liniowo uporządkowany ze względu na relację &#8804;,
            relacja ta jest zwrotna, przechodnia, antysymetryczna i jeżeli mamy dane dwie liczby rzeczywiste to na pewno jedna z nich
            jest mniejsza lub równa drugiej.</p>
        </div>
    );
}