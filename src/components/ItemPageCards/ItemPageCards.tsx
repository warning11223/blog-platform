import React from 'react';

import card_img from '../../img/card.png'
import s from './ItemPageCards.module.css'
import {PostsType} from '../Main/Main';

type ItemPageCardsProps = {
    card: PostsType
}

const ItemPageCards: React.FC<ItemPageCardsProps> = ({card}) => {
    return (
        <div>
            <img className={s.cardImage} src={card.img} alt="card"/>
            <div className={s.cardBottom}>
                <h4 className={s.cardTitle}>{card.title}</h4>
                <p className={s.cardText}>{card.text}</p>
                <p className={s.cardDate}>{card.time}</p>
            </div>
        </div>
    );
};

export default ItemPageCards;
