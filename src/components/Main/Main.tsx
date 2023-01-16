import React from 'react';
import icon1 from '../../img/icon1.svg'
import icon2 from '../../img/icon2.svg'

import {NavLink, Route, Routes} from 'react-router-dom';

import s from './Main.module.css'
import BlogsPage from '../BlogsPage/BlogsPage';
import Posts from '../Posts/Posts';
import PostsPage from '../PostsPage/PostsPage';
import {StateType} from '../../state/state';

type MainProps = {
    state: StateType
}

const Main: React.FC<MainProps> = ({state}) => {
    return (
        <div className={s.mainContainer}>
            <div className={s.mainLeft}>
                <ul className={s.list}>
                    <li>
                        <NavLink to='/' className={({isActive}) => (isActive ? `${s.listItem} ${s.active}` : `${s.listItem}`)}>
                            <img className={s.icon} src={icon1} alt="icon"/>
                            <span>Blogs</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/posts' className={({isActive}) => (isActive ? `${s.listItem} ${s.active}` : `${s.listItem}`)}>
                            <img src={icon2} alt="icon"/>
                            <span>Posts</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={s.mainRight}>
                <Routes>
                    <Route path='/posts' element={<Posts posts={state.posts} title='Posts' />}/>
                    <Route path='/' element={<Posts blogs={state.blogs} title='Blogs' input/>}/>
                    <Route path='/:name' element={<BlogsPage posts={state.itemPagePosts} />} />
                    <Route path='/posts/:name' element={<PostsPage />} />
                </Routes>
            </div>
        </div>
    );
};

export default Main;
