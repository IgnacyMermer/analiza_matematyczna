import React from "react";
import './AnalizaMain.css';


export default function Nierownosci1Grade1(){
    return(
        <div  className='conceptsContainer'>
            <p>Mówimy, że mamy nierówność stopnia n, gdy połączymy dwa wielomiany, gdzie jeden jest stopnia n, a drugi
                co najwyżej stopnia n.</p>
            <p>Nierówność stopnia pierwszego nazywamy nierównością liniową, a nierówność stopnia drugiego nierównością kwadratową.</p>
            <p>Nierówność ze znakiem &#60; lub &#62; nazywamy nierównością ostrą, a ze znakiem &#8804; lub &#8805; nazywamy nierównością
            słabą.</p>

            <br/><br/>

            <p>Dwie nierówności nazywamy nierównościami równoważnymi, jeżeli mają takie rozwiązanie. Możemy również, wtedy wywnioskować, że:</p>
            <ul>
                <li>Jeżeli do obydwu stron nierówności dodamy ten sam wielomian, to otrzymamy nierówność równoważną.</li>
                <li>Jeżeli obydwie strony nierówności pomnożymy przez liczbę dodatnią, to otrzymamy nierówność równoważną.</li>
                <li>Jeżeli obydwie strony nierówności pomnożymy przez liczbę ujemną, to musimy zmienić znak nierówności, żeby
                otrzymać nierówność równoważną.</li>
            </ul>
        </div>
    );
}