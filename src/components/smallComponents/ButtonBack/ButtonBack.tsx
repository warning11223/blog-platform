import React from 'react';

import s from './ButtonBack.module.css'
import {Link} from 'react-router-dom';
import arrow_left from '../../../img/arrow_left.svg';

type ButtonBackProps = {
    title: string
    to: string
}

const ButtonBack: React.FC<ButtonBackProps> = ({title, to}) => {
    return (
        <div className={s.buttonBack}>
            <Link className={s.link} to={to}>
                <img src={arrow_left} alt="arrow_left"/>
                <span>Back to {title}</span>
            </Link>
        </div>
    );
};

export default ButtonBack;
