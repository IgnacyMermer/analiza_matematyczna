import React from "react";
import './AnalizaMain.css';
import TeX from "@matejmazur/react-katex";
import MathJax from 'react-mathjax-preview';

export default function LiczbyZespolone(){
	return(
		<div className='conceptsContainer'>
			<h1>Liczby zespolone</h1>
			<p><TeX math={'i'}/> - oznacza tzw. jednostkę urojoną, która spełnia warunek: <TeX math={'i^2=-1'}/>.</p>
			<p>Liczby zespolone mające postać sumy: <TeX math={'z=x+iy'}/>, (x, y - liczby rzeczywiste). Część rzeczywistą liczby
				zespolonej <TeX math={'z'}/> oznaczamy symbolem <span className='formula'>Re z</span>, a część
				urojoną oznaczamy <span className='formula'>Im z</span>.
			</p>
			<h4>Jeśli chodzi o dodawanie, odejmowanie, mnożenie i dzielenie, to stosujemy te same reguły, jak dla liczb rzeczywistych,
				z wyjątkiem iloczynu <TeX math='i^2=-1'/>.
			</h4>
			<br/><br/>
			<p>Kilka przykładów:</p>
			<p className='oneLine centerVertical'>1)&nbsp;&nbsp;<MathJax math={'`z_1=a+bi&nbsp;&nbsp;z_2=c+di`'}/></p>
			<MathJax math={'`z_1z_2=(a+bi)(c+di)`'}/>
			<MathJax math={'`z_1z_2=ac+adi+bci+bdi^2`'}/>
			<MathJax math={'`z_1z_2=(ac-bd)(ad+bc)i`'}/>
			<p><span className='italic'>Liczbą sprężoną</span> nazywamy liczbę zespoloną różniącą się od liczby <TeX math={'z=a+bi'}/>
				tylko znakiem współczynnika przy <TeX math={'i'}/>, i oznaczamy ją <MathJax math={'`barz=a-bi`'}/></p>

		</div>
	);
}