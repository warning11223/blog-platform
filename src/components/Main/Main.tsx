import React from 'react';
import icon1 from '../../img/icon1.svg'
import icon2 from '../../img/icon2.svg'
import card from '../../img/card.png'
import card_inner from '../../img/card_inner.png'
import blog_img from '../../img/blog_img.png'

import {NavLink, Route, Routes} from 'react-router-dom';

import s from './Main.module.css'
import BlogsPage from '../BlogsPage/BlogsPage';
import Posts from '../Posts/Posts';
import PostsPage from '../PostsPage/PostsPage';

export type PostsType = {
    id: number
    img: string
    img_inner?: string
    title: string
    text: string
    time: string
}

export type BlogsType = {
    id: number
    img: string
    title: string
    website: string
    text: string
}

const posts: PostsType[] = [
    {
        id: 1,
        img: card,
        img_inner: card_inner,
        title: 'Let\'s fly into space',
        text: 'The best blog in our village',
        time: '12.12.2022',
    },
    {
        id: 2,
        img: card,
        img_inner: card_inner,
        title: 'I\'m sitting at work',
        text: 'it industry',
        time: '12.12.2022',
    },
    {
        id: 3,
        img: card,
        img_inner: card_inner,
        title: 'I sell cosmetics',
        text: 'Blog of beauties',
        time: '12.12.2022',
    },
    {
        id: 1,
        img: card,
        img_inner: card_inner,
        title: 'I\'m happy like a child',
        text: 'The best blog in our village',
        time: '12.12.2022',
    },
    {
        id: 4,
        img: card,
        img_inner: card_inner,
        title: 'Cooking buns',
        text: 'it industry',
        time: '12.12.2022',
    },
    {
        id: 5,
        img: card,
        img_inner: card_inner,
        title: 'First day at the office',
        text: 'Blog of beauties',
        time: '12.12.2022',
    }
]
const blogs: BlogsType[] = [
    {
        id: 1,
        img: blog_img,
        title: 'The best blog in our village',
        website: 'https://www.youtube.com/',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 2,
        img: blog_img,
        title: 'Warriors',
        website: 'https://www.youtube.com/',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 3,
        img: blog_img,
        title: 'Audience Platform',
        website: 'https://www.youtube.com/',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 4,
        img: blog_img,
        title: 'The best blog in our village',
        website: 'https://www.youtube.com/',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 5,
        img: blog_img,
        title: 'The best blog in our village',
        website: 'https://www.youtube.com/',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    }
]
const itemPagePosts: PostsType[] = [
    {
        id: 1,
        img: card,
        title: 'Let\'s fly into space',
        text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit...',
        time: '12.12.2022'
    },
    {
        id: 2,
        img: card,
        title: 'I\'m sitting at work',
        text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit...',
        time: '12.12.2022'
    },
    {
        id: 3,
        img: card,
        title: 'I sell cosmetics',
        text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit...',
        time: '12.12.2022'
    },
    {
        id: 4,
        img: card,
        title: 'Let\'s fly into space',
        text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit...',
        time: '12.12.2022'
    },
    {
        id: 5,
        img: card,
        title: 'I\'m sitting at work',
        text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit...',
        time: '12.12.2022'
    },
    {
        id: 6,
        img: card,
        title: 'I sell cosmetics',
        text: 'Lorem ipsum dolor sit amet, consectet adipiscing elit...',
        time: '12.12.2022'
    },
]

const Main = () => {
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
                    <Route path='/posts' element={<Posts posts={posts} title='Posts' />}/>
                    <Route path='/' element={<Posts blogs={blogs} title='Blogs' input/>}/>
                    <Route path='/:name' element={<BlogsPage posts={itemPagePosts} />} />
                    <Route path='/posts/:name' element={<PostsPage />} />
                </Routes>
            </div>
        </div>
    );
};

export default Main;
