import React from "react";
import './AnalizaMain.css';

export default function CiagiNiesk(){
    return(
      <div className='conceptsContainer'>
          <h1>Ciąg nieskończony</h1>
          <p>Ciąg nieskończony to ciąg, który nie ma określonego wyrazu ostatniego, znaczy to, że każdej liczbie naturalnej
          n odpowiada wyraz tego ciągu.</p>
          <br/>
          <p>Ciąg nieskończony ma granicę g, jeżeli dla każdej liczby dodatniej ϵ istnieje w ciągu takie miejsce N, że dla każdego
          n&#8805;N zachodzi nierówność:</p>
          <p>|a<sub><small>n</small></sub>-g|&#60;ϵ</p>
          <p>Zapis, że ciąg dąży do granicy g wygląda następująco:</p>
          <p className='oneLine centerVertical'>u<sub><small>n</small></sub>&#10141;g, gdy n&#10141;&#8734; &nbsp;&nbsp; lub &nbsp;&nbsp;
              <div className='column'><sup className='verySmall'>&#8901;</sup> lim <sub>n&#10141;&#8734;</sub></div>
              u<sub><small>n</small></sub> = &#8734;
          </p>
          <br/><br/>

          <p>Ciąg nieskończony, który ma granicę skończoną nazywamy ciągiem zbieżnym.</p>
          <br/>

          <p>Ciąg dąży do plus nieskończoności, jeżeli dla każdej liczby M&#62;0 można znaleźć w ciągu taki wyraz na pozycji n, dla
              którego u<sub><small>n</small></sub>&#62;M</p>

          <p>Ciąg dąży do minus nieskończoności, jeżeli dla każdej liczby M&#62;0 można znaleźć w ciągu taki wyraz na pozycji n, dla
              którego u<sub><small>n</small></sub>&#60;-M</p>
          <br/>
          <p>Mamy jednak wyjątki, ponieważ nie każdy ciąg nieskończony ma granicę. Np. ciąg 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, ...
              nie ma granicy.</p>
          <p>Jest to ciąg rozbieżny, np. jeśli granicą jest plus nieskończoność to mówimy, że ciąg jest rozbieżny do plus
              nieskończonośći, ponieważ nie jest to granica skończona.</p>
          <br/>

          <p>TIP! Jeżeli ciąg a<sub><small>n</small></sub> ma granicę a i ciąg b<sub><small>n</small></sub> ma granicę b to ciąg
              &#123;a<sub><small>n</small></sub> + b<sub><small>n</small></sub>&#125; ma granicę a+b.
          </p>

          <p>TIP! Jeżeli ciąg a<sub><small>n</small></sub> ma granicę a i ciąg b<sub><small>n</small></sub> ma granicę b oraz żaden z
              wyrazów ciągu b<sub><small>n</small></sub> nie równa się 0 i granica b nie równa się 0 to ciąg
              ilorazów &#123;a<sub><small>n</small></sub> / b<sub><small>n</small></sub>&#125; ma granicę a/b.
          </p>

          <p>TIP! Jeżeli licznik ułamka jest wielomianem względem zmiennej naturalnej n, której stopień jest wyższy niż stopnień
          mianownika, to gdy n&#10141;&#8734;, wartość ułamka dąży do plus/minus nieskończoności.</p>

          <p className='oneLine centerVertical'><div className='column'><sup className='verySmall'>&#8901;</sup>
              lim <sub>n&#10141;&#8734;</sub></div>(&nbsp;1 + &nbsp;
              <div className='column'><sup className='nospace'>1</sup> <hr className='dwumianOgol'/> <sub className='nospace'>n</sub></div>
              &nbsp;) <sup className='bigspace'>n</sup> = e, gdzie n jest dowolnym wyrazem ciągu a<sub><small>n</small></sub>
              (n&#8800;0),&nbsp;&nbsp;<p>e - liczba Eulera (2,71828...).</p>
          </p>




      </div>
    );
}