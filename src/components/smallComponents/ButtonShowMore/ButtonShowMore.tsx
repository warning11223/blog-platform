import React from 'react';
import arrow from '../../../img/arrowUp.svg';

import s from './ButtonShowMore.module.css'

const ButtonShowMore = () => {
    return (
        <div className={s.button}>
            <span>Show more</span>
            <img src={arrow} alt="arrow"/>
        </div>
    );
};

export default ButtonShowMore;
