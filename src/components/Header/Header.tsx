import React from 'react';

import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerContainer}>
                <h1 className={s.headerTitle}>Blogger Platform</h1>
            </div>
        </header>
    );
};

export default Header;
