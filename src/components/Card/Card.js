import React from 'react';
import './Card.scss'
import path from '../../assets/assets_Homework_Front-End_01/path.png'

const Card = (props) => {
    return (
        <div class="card">
            <div class="card-container">
                <h2>{ props?.title}</h2> 
                <p>{props?.jokeText}</p>
            </div>
            <div className='card-stats'>
                <p>SEE STATS</p>
                <img src={path} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Card;