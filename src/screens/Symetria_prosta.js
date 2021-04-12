import React from "react";
import './AnalizaMain.css';
import MathJax from 'react-mathjax-preview';

export default function Symetria_prosta(){
	return(
		<div className='conceptsContainer'>
			<h1>Symetria punktów i osi względem prostej p</h1>
			<p>
				1) Możemy powiedzieć, że dwa punkty A i B są <span className='italic'>punktami symetrycznie położonymi względem
				prostej p</span>, jeżeli prosta p jest symetralną odcinka AB (czyli przechodzi przez środek odcinka AB i jest do niego
				prostopadła).
			</p>

			<p>
				2) Dwie linie F i G nazywamy <span className='italic'>liniami symentrycznymi względem prostej p</span>, jeżeli
				każdemu punktowi C odpowiada punkt D, tak że oba punkty są położone symetrycznie względem prostej p.
			</p>

			<br/><br/>

			<h2>Wykres funkcji odwrotnej</h2>
			<p>
				{/*rysunek*/}
			</p>

			<br/><br/>

			<p>
				
			</p>
		</div>
	);
}