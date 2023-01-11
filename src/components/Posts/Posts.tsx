import React from 'react';

import s from './Posts.module.css'
import arrow from '../../img/arrowUp.svg';
import {BlogsType, PostsType} from '../Main/Main';

import search from '../../img/search.svg'
import PostsCard from '../PostsCard/PostsCard';
import ButtonShowMore from '../smallComponents/ButtonShowMore/ButtonShowMore';
import {Link} from 'react-router-dom';

type PostsProps = {
    posts?: PostsType[]
    blogs?: BlogsType[]
    title: string
    input?: boolean
}

const Posts: React.FC<PostsProps> = ({posts, blogs, title, input}) => {
    const blogsRender = blogs?.map(item => {
        return (
            <div className={s.blog} key={item.id}>
                <Link to={`/${item.title}`}>
                    <img className={s.blogImg} src={item.img} alt="img"/>
                </Link>
                <div className={s.blogRight}>
                    <Link className={s.Link} to={`/${item.title}`}>
                        <h4 className={s.blogTitle}>{item.title}</h4>
                    </Link>
                    <p className={s.blogWebsite}>Website: <a className={s.blogLink} href={item.website}>{item.website}</a></p>
                    <p className={s.blogText}>{item.text} </p>
                </div>
            </div>
        )
    })

    return (
        <>
            <h3 className={s.rightTitle}>{title}</h3>
            <div className={s.mainRightContainer}>
                <div className={s.filter}>
                    {input ?
                        <div className={s.input}>
                            <img className={s.inputIcon} src={search} alt="icon"/>
                            <input className={s.inputText} type="text" placeholder='Search'/>
                        </div> : ''
                    }
                    <div className={s.filterInner}>
                        <span>New {title.toLowerCase()} first</span>
                        <img src={arrow} alt="icon"/>
                    </div>
                </div>

                <div className={s.cards}>
                    {posts!?.length > 0 ? <PostsCard posts={posts!}/> : ''}
                </div>
                <div className={s.blogs}>
                    {blogs!?.length > 0 ? blogsRender : ''}
                </div>
                <ButtonShowMore />
            </div>
        </>
    );
};

export default Posts;
