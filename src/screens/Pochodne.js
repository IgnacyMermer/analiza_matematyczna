import React, {useEffect} from "react";
import './AnalizaMain.css';
import MathJax from 'react-mathjax-preview';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

export default function Pochodne(){

	useEffect(()=>{
		document.title="Pochodne";
	},[])

	return(
		<div className='conceptsContainer'>
			<h1>Pochodne funkcji postaci y=f(x)</h1>
			<br/>

			<h2>Pochodne rzędu pierwszego</h2>
			<p>
				Pochodna funkcji <span className='italic'>y=f(x)</span> w punkcie x to granica, do której dąży stosunek przyrostu funkcji
				&#8710;y do odpowiedniego przyrostu zmiennej niezależnej &#8710;x. Przyrost zmiennej niezależnej dąży do zera.
			</p>
			<MathJax math={'`lim_(&#8710;x to 0) (&#8710;y)/(&#8710;x) = lim_(&#8710;x to 0) (f(x+&#8710;x)-f(x))/(&#8710;x)`'}/>
			<p>Jeżeli taka granica nie istnieje, to w tym punkcie funkcja nie ma również pochodnej.</p>
			<br/>

			<p>Pochodną funkcji f(x) możemy zapisać:</p>
			<p className='oneLine centerVertical'>
				<MathJax math={'`y\', f\'(x), doty, dy/dx, (df(x))/dx`'}/>.
			</p>
			<br/>

			<p className='italic'>
				Pochodna funkcji y=f(x) w danym punkcie równa się współczynnikowi kątowemu stycznej do wykresu funkcji (wsp. kątowy prostej
				jest tangensem kąta a, który prosta tworzy z dodatnim zwrotem osi OX).
			</p>

			{/*rysunek*/}

			<br/><br/>

			<p>Wypiszmy również główne twierdzenie pochodnych:</p>
			<p className='italic'>
				Jeśli funkcja ma w danym punkcie pochodną skończoną, jest funkcją różniczkowalną, to jest w tym punkcie ciągła.
			</p>
			<p>Lecz nie zawsze funkcja stała musi mieć pochodną (np. y=|x|)</p>
			<br/>

			<p className='italic'>Pochodna funkcji stałej równa się zero (y'=0), jeżeli y=c.</p>
			<p className='italic oneLine centerVertical'>
				Pochodna iloczynu stałej przez funkcje równa się iloczynowi stałej przez pochodną funkcji. Oznacza to, że jeśli
				&nbsp;<MathJax math={'`y=c&#8901;f(x)`'}/> &nbsp;&nbsp;to&nbsp;&nbsp; <MathJax math={'`y\'=c&#8901;f\'(x)`'}/>.
			</p>
			<p>Pochodna sumy funkcji, jeżeli &nbsp;<TeX math={'y=f(x)+g(x)'}/> &nbsp;&nbsp;jest równa&nbsp;&nbsp;
				<TeX math={'y\'=f\'(x)+g\'(x)'}/>.
			</p>
			<p className='italic oneLine centerVertical'>
				Pochodna iloczynu funkcji, jeżeli &nbsp;<MathJax math={'`y=f(x)cdotg(x)`'}/> &nbsp;&nbsp;jest równa&nbsp;&nbsp;
				<MathJax math={'`y\'=f\'(x)cdotg(x)+g\'(x)cdotf(x)`'}/>.
			</p>
			<p className='italic oneLine centerVertical'>
				Pochodna ilorazu funkcji, jeżeli &nbsp;<MathJax math={'`y=f(x)/g(x)`'}/>, (g(x)&#8800;0) &nbsp;&nbsp;jest równa
				&nbsp;&nbsp;<MathJax math={'`y\'=(f\'(x)cdotg(x)-g\'(x)cdotf(x))/g(x)^2`'}/>.
			</p>
			<p>
				Pochodna funkcji odwrotnej. Jeżeli &nbsp;<TeX math={'y=f(x)'}/> &nbsp;&nbsp;ma funkcję odwrotną
				&nbsp;&nbsp;<TeX math={'x=g(y)'}/>&nbsp;&nbsp; to pochodna funkcji odwrotnej równa się odwrotności pochodnej
				danej funkcji &nbsp;&nbsp;<TeX math={'y=f(x)'}/>.
			</p>
			<MathJax math={'`dx/dy=1/(dy/dx)`'}/>
			<p>f(x) oraz g(x) są funkcjami różniczkowalnymi.</p>
			<br/>
			<p className='italic'>Różniczką dy funkcji y=f(x) jest iloczyn pochodnej pochodnej tej funkcji przez przyrost dx zmiennej
				niezależnej.</p>
			<TeX math={'dy=f\'(x)dx'}/>
			<br/><br/>

			<p>Różniczka przedstawia główną część przyrostu funkcji.</p>

			{/*rysunek*/}

			<br/><br/>

			<h3>Wzory rachunku różniczkowego</h3>
			<p className='oneLine centerVertical'><MathJax math={'`(x^a)\'=ax^(a-1)`'}/>, gdzie x&#62;0, a&#8714;R.</p>
			<TeX math={'(sin x)\'=cos x.'}/><br/>
			<TeX math={'(cos x)\'=-sin x.'}/>
			<p className='oneLine centerVertical'><MathJax math={'`(tg x)\'=1/cos^2x=1+tg^2x`'}/>, gdzie cosx&#8800;0.</p>
			<p className='oneLine centerVertical'><MathJax math={'`(ctg x)\'=-1/sin^2x=-(1+ctg^2x)`'}/>, gdzie sinx&#8800;0.</p>
			<p className='oneLine centerVertical'><MathJax math={'`(arcsin x)\'=-1/sqrt(1-x^2)`'}/>, gdzie -1&#60;x&#60;1, 0&#8804;
				arcsin x &#8804;&frac12;&pi;.
			</p>
			<p className='oneLine centerVertical'><MathJax math={'`(arccos x)\'=1/sqrt(1-x^2)`'}/>, gdzie -1&#60;x&#60;1, 0&#8804;
				arccos x &#8804;&pi;.
			</p>
			<p className='oneLine centerVertical'><MathJax math={'`(arctg x)\'=1/(1+x^2)`'}/>, gdzie -&frac12;&pi;&#8804;
				arctg x &#8804;&frac12;&pi;.
			</p>
			<p className='oneLine centerVertical'><MathJax math={'`(arcctg x)\'=(-1)/(1+x^2)`'}/>, gdzie 0&#8804;
				arcctg x &#8804;&pi;.
			</p>
			<p className='oneLine centerVertical'><MathJax math={'`(e^x)\'=e^x`'}/>. </p>
			<p className='oneLine centerVertical'><MathJax math={'`(a^x)\'=a^xlna`'}/>, gdzie a&#62;0.</p>
			<p className='oneLine centerVertical'><MathJax math={'`(ln|x|)\'=1/x`'}/>, gdzie x&#8800;0.</p>
			<p className='oneLine centerVertical'><MathJax math={'`(log_a|x|)\'=1/(xlna)=1/xlog_ae`'}/>, gdzie x&#8800;0, a&#62;0,
				a&#8800;1.
			</p>
			<br/><br/>

			<h3>Kilka przykładów dla wyjaśnienia:</h3>

			<p>1) &nbsp;<TeX math={'y=2x^6+5x^4-12x^2-15'}/>.</p>
			<p className='oneLine centerVertical'><MathJax math={'`y=2&#8901;6x^5+5&#8901;4x^3-12&#8901;2x-0 =12x^5+20x^3-24x.`'}/></p>
			<br/>

			<p className='oneLine centerVertical'>
				2) &nbsp;<MathJax math={'`y=(6x^3+6x)/sqrt(2)`'}/>
			</p>
			<p className='oneLine centerVertical'>
				<MathJax math={'`y\'=1/sqrt(2)cdot(6x^3+6x)\'=((18x^2+6)cdot sqrt(2))/(sqrt(2)cdot sqrt(2))=(9x^2+3)cdot sqrt(2)`'}/>.
			</p>
			<br/>

			<p className='oneLine centerVertical'>
				3) &nbsp;<MathJax math={'`y=(5x^5+6x^3+2x+1)/(4x^3)`'}/>
			</p>
			<p className='oneLine centerVertical'>
				<MathJax math={'`y=5/4x^2+6/4+1/2x^(-2)+1/4x^(-3)`'}/>
			</p>
			<p className='oneLine centerVertical'>
				<MathJax math={'`y\'=10/4x+0+(-2)/2x^(-3)+(-3)/4x^(-4)`'}/>
			</p>
			<p className='oneLine centerVertical'>
				<MathJax math={'`y\'=10x^5-4x-3`'}/>
			</p>
			<br/>

			<p className='oneLine centerVertical'>4)&nbsp;&nbsp;<MathJax math={'`y=(6x^2-5x^(7/3))/(3x^(1/2))`'}/></p>
			<p className='oneLine centerVertical'><MathJax math={'`y=2x^(3/2)-5/3x^(11/6)`'}/></p>
			<p className='oneLine centerVertical'><MathJax math={'`y\'=3x^(1/2)-55/18x^(5/6)=3sqrt(2)-55root(6)(x^5)`'}/></p>
			<br/>

			<p>5)&nbsp;&nbsp;<TeX math={'y=3x^4sinx'}/></p>
			<p><TeX math={'y\'=12x^3cosx'}/></p>
			<br/>

			<p>6)&nbsp;&nbsp;<TeX math={'y=(3x^4+4x^2-7x+1)^4'}/></p>
			<h5>Funkcja jest funkcją złożoną, z tego powodu rozpiszemy ją na dwie funkcje y i z.</h5>
			<p><TeX math={'z=3x^4+4x^2-7x+1'}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<TeX math={'y=z^4'}/></p>
			<MathJax math={'`dy/dx=(dy)/(dz)cdot(dz)/(dx)`'}/>
			<MathJax math={'`(dy)/(dz)=4z^3`'}/>
			<MathJax math={'`(dz)/(dx)=12x^3+8x-7`'}/>
			<MathJax math={'`(dy)/(dx)=4z^3(12x^3+8x-7)`'}/>
			<MathJax math={'`(dy)/(dx)=4(3x^4+4x^2-7x+1)^3(12x^3+8x-7)`'}/>
			<br/>

			<p>7)&nbsp;&nbsp;<TeX math={'y=cos3x'}/></p>
			<p><TeX math={'y=cosz'}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<TeX math={'z=3x'}/></p>
			<MathJax math={'`(dy)/(dz)=cosz`'}/>
			<MathJax math={'`(dz)/(dx)=3`'}/>
			<MathJax math={'`(dy)/(dx)=3cos3x`'}/>
			<br/>

			<p className='oneLine centerVertical'>8)&nbsp;&nbsp;<TeX math={'y=sin^2x'}/></p>
			<p><TeX math={'y=z^2'}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<TeX math={'z=sinx'}/></p>
			<MathJax math={'`(dy)/(dz)=2z`'}/>
			<MathJax math={'`(dz)/(dx)=cosx`'}/>
			<MathJax math={'`(dy)/(dx)=2sin^(2)xcosx`'}/>
			<br/>

			<p className='oneLine centerVertical'>9)&nbsp;&nbsp;<MathJax math={'`y=e^(3x^3+2x)`'}/></p>
			<p><TeX math={'y=e^z'}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<TeX math={'z=3x^3+2x'}/></p>
			<MathJax math={'`(dy)/(dz)=e^z`'}/>
			<MathJax math={'`(dz)/(dx)=9x^2+2`'}/>
			<MathJax math={'`(dy)/(dx)=(9x^2+2)e^z=(9x^2+2)e^(3x^3+2x)`'}/>
			<br/>

			<h4 className='oneLine centerVertical'>W powyższych przykładach &nbsp;<MathJax math={'`dy/dx`'}/>&nbsp;
				możemy zamienić z &nbsp;<MathJax math={'`y\'`'}/></h4>

			<br/><br/><br/>

			<h2>Pochodne rzędów wyższych</h2>
			<p>Pochodną rzędu drugiego nazywamy pochodną pierwszej pochodnej funkcji, możemy również powiedzieć drugą pochodną funkcji
			y=f(x). Pochodna rzędu trzeciego nazywamy pochodną poprzedniej pochodnej funkcji f(x). Pochodną rzędu drugiego możemy
			zapisać następująco:</p>
			<MathJax math={'`y\'\', f\'\'(x), ddoty, (d^2y)/(dx^2)`'}/>
			<p>Pochodne kolejnych rzędów możemy zapisywać (na przykładzie pochodnej rzędu szóstego):</p>
			<MathJax math={'`y^((6)), y^(VI), f^((6))(x), f^(VI)(x), (d^6y)/(dx^6)`'}/>
			<br/>
			<p>Przykład:</p>
			<p>Wypisz 7 pochodnych wyższych rzędów funkcji:</p>
			<MathJax math={'`y=x^6+4x^5-3x^3-7x^2+8x`'}/>
			<MathJax math={'`y\'=6x^5+20x^4-9x^2-14x+8`'}/>
			<MathJax math={'`y\'\'=30x^4+80x^3-18x-14`'}/>
			<MathJax math={'`y^(3)=120x^3+240x^2-18`'}/>
			<MathJax math={'`y^(4)=360x^2+480x`'}/>
			<MathJax math={'`y^(5)=720x+480`'}/>
			<MathJax math={'`y^(6)=720`'}/>
			<MathJax math={'`y^(7)=0`'}/>
			<h4>Każda kolejna pochodna, czyli pochodna wyższego rzędu niż wielomian będzie równa zero.</h4>

			<br/><br/><br/>

			<h2>Pochodne funkcji określonej równaniami parametrycznymi</h2>
			<p>Mamy dwie funkcje:&nbsp;&nbsp; <TeX math={'x=f(z),  y=g(z),'}/>
			&nbsp;&nbsp; (gdzie &nbsp;<TeX math={'z'}/>&nbsp; ,które jest parametrem, przybiera wartości z
				pewnego przedziału) to możemy powiedzieć, że te funkcje określają krzywą na płaszczyźnie. Powyższe równania
				zakreślają pewną krzywą, i są jej równaniami parametrycznymi.
			</p>
			<p>Równania parametryczne mogą przedstawiać te samą krzywą, znaczy to że punkt ruchomy może poruszać w różny sposób
			po tej samej krzywej.</p>
			<p>Jeśli, na przykład <TeX math={'z'}/> będzie oznaczało czas, to równania będą równaniami ruchu punktu zakreślającego
			pewną krzywą.</p>
			<p>Krzywą możemy traktować jako wykres funkcji <TeX math={'y=h(x)'}/>, gdy każda prosta, która jest równoległa do osi OY
				ma z nią co najwyżej jeden punkt wspólny. Wtedy równania <TeX math={'x=f(z)'}/> i <TeX math={'y=g(z)'}/>
                &nbsp;określają również <TeX math={'y'}/> jako funkcję zmiennej <TeX math={'x'}/>.
			</p>
		</div>
	);
}