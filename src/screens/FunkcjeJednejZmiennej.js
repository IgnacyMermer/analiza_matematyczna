import React from "react";
import './AnalizaMain.css';
import MathJax from 'react-mathjax-preview';
import {Link} from "react-router-dom";

export default function FunkcjeJednejZmiennej(){
	return(
		<div className='conceptsContainer'>
			<h1>Funkcja jednej zmiennej</h1>
			<p>Możemy powiedzieć, że w zbiorze X jest określona pewna funckja f(tj. funkcja jednej zmiennej), jeżeli dla każdej liczby
			x ze zbioru X jest przyporządkowana dokładnie jedna liczba y ze zbioru Y. Zapisujemy to:</p>
			<p><b>y=f(x)</b>, gdzie x - argument funkcji / zmienna niezależna, y - zmienna zależna.</p>
			<p>Dziedzina funkcji f - to zbiór X wartości argumentów funkcji f.</p>
			<p>Zakres funkcji f - to zbiór Y wartości funkcji f.</p>
			<p>Dla wyjaśnienia:</p>
			<p>Zakresem funkcji <b>y=x<sup><small>2</small></sup>-4</b> jest zbiór liczb y spełniających nierówność: <b>y&#8805;-2</b>.</p>
			<p className='oneLine centerVertical'>Zakresem funkcji <b><MathJax math={'`sqrt(16-x^2)`'}/></b>&nbsp; jest zbiór liczb y
			spełniających nierówność: <b>-2&#8804;x&#8805;2</b>.</p>

			<br/><br/>

			<h2>Funkcja złożona</h2>
			<p>Funkcja <b>y=f(g(x))</b> jest przykładem funkcji złożonej.</p>
			<p>Jeżeli polem funkcji <b>g(x)</b> jest zbiór liczb A, a zakresem zbiór liczb B. Polem funkcji <b>f(z)</b> jest zbiór liczb C,
				a zakresem zbiór liczb D, i B jest zawarte w C</p>
			<p>to oba zbiory przyporzodkowują każdej liczbie x ze zbioru A dokładnie jedną liczbą D.</p>

			<br/><br/>

			<h2>Funkcja różnowartościowa</h2>
			<p>Jest to funkcja, w której nie ma dwóch takich liczb, dla których wartość funkcji wynosi tyle samo.</p>
			<p>Funkcją różnowartościową może być funkcja liniowa, która cały czas maleje lub rośnie.</p>

			<br/><br/>

			<h2>Funkcja odwrotna</h2>
			<p>Jest to funkcja, w której argument z jednej funkcji jest wartością dla drugiej, dla wyjaśnienia:</p>
			<p>y=f(x) &#8743; x=g(y)</p>


			<br/><br/>

			<Link to="/analiza/pojecia-wstepne/symetria-prosta"><button>Symetria punktów i osi względem prostej</button></Link>

		</div>
	);
}