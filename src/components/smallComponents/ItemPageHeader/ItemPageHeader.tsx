import React from 'react';
import arrow_right from '../../../img/arrow_right.svg';

import s from './ItemPageHeader.module.css'

type ItemPageHeaderProps = {
    name: string
    title: string
}

const ItemPageHeader: React.FC<ItemPageHeaderProps> = ({name, title}) => {
    return (
        <div className={s.container}>
            <h3 className={s.rightTitle}>{title}</h3>
            <img src={arrow_right} alt="arrow"/>
            <p className={s.text}>{name}</p>
        </div>
    );
};

export default ItemPageHeader;
