import React from "react";
import './AnalizaMain.css';
import MathJax from 'react-mathjax-preview';

export default function GraniceFunkcji(){
	return(
		<div className='conceptsContainer'>
			<h2>Definicja granicy funkcji w punkcie x=c w sensie Cauchy'ego</h2>
			<h2>Granice lewostronna</h2>
			<p>
				Jeżeli granicą lewostronną funkcji f(x) jest liczba g w punkcie c to możemy ją zapisać:
			</p>
			<MathJax math={'`lim_(x to c-0) f(x)=g`'}/>
			<p>, jeśli tylko dla każdego &#949;&#62;0 istanieje taka liczba, że &#948;&#62;0, żeby </p>
			<p className='oneLine centerVertical'><MathJax math={'`|f(x)-g|&#60;epsilon`'}/>
				&nbsp;&nbsp; dla &nbsp;&nbsp;c-&#948;&#60;x&#60;c.
			</p>
			<p className='oneLine'>Jeżeli granica lewostronna znajduje się w punkcie x=0 to zapisujemy ją
				<MathJax math={'`lim_(x to 0) f(x)`'}/>
			</p>
			<p>Trzeba również zauważyć, że jeśli granica lewostronna ma istnieć, to funkcja powinna być określona w pewnym przedziale
				otwartym, którego końcem jest liczba c.
			</p>
			<p>Za to dla x=c lub x&#62;c funkcja może być nieokreślona.</p>

			<br/><br/>
			<p>+&#8734; jest lewostronną granicą funkcji f(x) w punkcie x=c</p>
			<MathJax math={'`lim_(x to c-0)f(x)=+&#8734;`'}/>
			<p>, jeśli dla każdej liczby M&#62;0 istnieje taka liczba &#948;&#62;0, że</p>
			<p>f(x)&#62;M &nbsp;dla &nbsp;c-&#948;&#60;x&#60;c</p>
			<br/>

			<p>-&#8734; jest lewostronną granicą funkcji f(x) w punkcie x=c</p>
			<MathJax math={'`lim_(x to c-0)f(x)=-&#8734;`'}/>
			<p>, jeśli dla każdej liczby M&#62;0 istnieje taka liczba &#948;&#62;0, że</p>
			<p>f(x)&#60;-M &nbsp;dla &nbsp;c-&#948;&#60;x&#60;c</p>

			<br/><br/>

			<p>
				Z granicą prawostronną jest podobnie(do poprawy tutaj)
			</p>

			<br/><br/>

			<p>Jeżeli za to chcemy zapisać, że liczba g jest granicą funkcji f(x) w punkcie x=c to:</p>
			<MathJax math={'`lim_(x to c)f(x)=g.`'}/>
			<br/>
			<h2>Twierdzenia o granicach:</h2>
			<MathJax math={'`lim_(x to c) (f(x)&#177;g(x))=lim_(x to c) f(x)&#177;lim_(x to c) g(x)`'}/>
			<MathJax math={'`lim_(x to c) (f(x)cdotg(x))=lim_(x to c) f(x)cdotlim_(x to c) g(x)`'}/>
			<p className='oneLine centerVertical'><MathJax math={'`lim_(x to c) f(x)/g(x) = (lim_(x to c)f(x))/(lim_(x to c) g(x))`'}/>
				&nbsp; oraz &nbsp;<MathJax math={'`lim_(x to c) g(x)ne0`'}/>
			</p>
			<p>Dla granic lewostronnych musimy zastąpić x-&#62;c symbolem x-&#62;c-0, a dla granic prawostronnych symbolem x-&#62;c+0.</p>
			<br/><br/>

			<h2>Ciągłość funkcji</h2>
			<p className='oneLine'>
				Mówimy, że funkcja f(x) jest ciągła w punkcie x=c, jeżeli istnieje granica <MathJax math={'`lim_(x to c)f(x)`'}/>
				i jest ona równa f(c).
			</p>
			<p>Możemy również wypisać twierdzenia:</p>
			<p className='italic'>Suma dwóch funkcji ciągłych w punkcie x=c jest funkcją ciągłą w tym punkcie.</p>
			<p className='italic'>Iloczyn dwóch funkcji ciągłych w punkcie x=c jest funkcją ciągłą w tym punkcie.</p>
			<p className='italic'>Iloraz dwóch funkcji ciągłych w punkcie x=c (dzielnik jest różny od zera)
				jest funkcją ciągłą w tym punkcie.
			</p>
			<p className='italic'>
				Funkcja potęgowa x<sup><small>a</small></sup>, (gdzie a to dowolna stała) jest określona i ciągła dla wartości x&#62;0.
			</p>
			<p className='italic'>Funkcja wykładnicza a<sup><small>x</small></sup> jest ciągła dla wszystkich wartości x.</p>
			<p className='italic'>Funkcja logarytmiczna log<sub><small>a</small></sub>x, (a&#62;0, a&#8800;1) jest ciągła
				dla x&#62;0.
			</p>
			<p className='italic'>Funkcje sinus i cosinus są ciągłe dla wszystkich wartości x.</p>
			<p className='italic oneLine centerVertical'>Funkcja tangens jest ciągła dla wszystkich wartości x, z wyjątkiem
				x=<MathJax math={'`1/2 (2k+1)pi`'}/>, (k&#8714; C).
			</p>
			<p className='italic oneLine centerVertical'>Funkcja tangens jest ciągła dla wszystkich wartości x, z wyjątkiem
				x=k&pi;, (k&#8714; C).
			</p>

			<p>

			</p>

		</div>
	);
}