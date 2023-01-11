import React from 'react';
import icon1 from '../../img/icon1.svg'
import icon2 from '../../img/icon2.svg'

import {Link, Route, Routes} from 'react-router-dom';

import s from './Main.module.css'
import Posts from '../Posts/Posts';

const Main = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.mainLeft}>
                <ul className={s.list}>
                    <li>
                        <Link to='/' className={s.listItem}>
                            <img className={s.icon} src={icon1} alt="icon"/>
                            <span>Blogs</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/posts' className={s.listItem}>
                            <img src={icon2} alt="icon"/>
                            <span>Posts</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={s.mainRight}>
                <Routes>
                    <Route path='/posts' element={<Posts />}/>
                </Routes>
            </div>
        </div>
    );
};

export default Main;
