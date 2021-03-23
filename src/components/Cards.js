import React from "react";
import CardItem from "../SimpleComponents/CardItem";
import './Cards.css';

export default function Cards(){
    return(
        <div className='cards'>

            <h1>Sprawdź ten projekt</h1>

            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <CardItem
                            src='images/juiceAnimated.jpg'
                            text='Pomocnik zdrowotny'
                            label='Adventure'
                            path='/kontakt'
                        />

                        <CardItem
                            src='images/eminem.jpg'
                            text='Snake'
                            label='Adventure'
                            path='/kontakt'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}