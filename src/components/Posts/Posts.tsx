import React, {useEffect, useState} from 'react';
import {BlogsType, PostsType} from '../../state/state';

import arrow from '../../img/arrowUp.svg';
import search from '../../img/search.svg'

import PostsCard from '../PostsCard/PostsCard';
import ButtonShowMore from '../smallComponents/ButtonShowMore/ButtonShowMore';
import {Link} from 'react-router-dom';

import s from './Posts.module.css'


type PostsProps = {
    posts?: PostsType[]
    blogs?: BlogsType[]
    title: string
    input?: boolean
}

const Posts: React.FC<PostsProps> = ({posts, blogs, title, input}) => {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const [activeFilter, setActiveFilter] = useState(`New ${title.toLowerCase()} first`)

    useEffect(() => {
        setActiveFilter(`New ${title.toLowerCase()} first`)
    }, [title]);


    const blogsRender = blogs?.map(item => {
        return (
            <div className={s.blog} key={item.id}>
                <Link to={`/${item.title}`}>
                    <img className={s.blogImg} src={item.img} alt="img"/>
                </Link>
                <div className={s.blogRight}>
                    <Link className={s.Link} to={`/${item.title}`}>
                        <span className={s.blogTitle}>{item.title}</span>
                    </Link>
                    <p className={s.blogWebsite}>Website: <a className={s.blogLink} href={item.website}>{item.website}</a></p>
                    <p className={s.blogText}>{item.text} </p>
                </div>
            </div>
        )
    })

    const blogsFilters = [
        {id: 1, name: 'New blogs first'},
        {id: 2, name: 'Old blogs first'},
        {id: 3, name: 'From A to Z'},
        {id: 4, name: 'From Z to A'},
    ]

    const postsFilters = [
        {id: 1, name: 'New posts first'},
        {id: 2, name: 'Old posts first'},
    ]

    let filtersToRender = title === 'Posts' ? postsFilters : blogsFilters;

    const popup = (
        <div className={`${title === 'Posts' ? `${s.filterPopupPosts}` : `${s.filterPopup}`}`} >
            <ul className={s.filterPopupList}>

                {filtersToRender.map(item => {
                    const activePopupHandler = (name: string) => {
                        setActiveFilter(name)
                        setVisiblePopup(false)
                    }

                    return (
                        <li className={s.filterPopupListItem} key={item.id}>
                            <a className={s.filterPopupListLink} href="#" onClick={() => activePopupHandler(item.name)}>{item.name}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

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
                    {title === 'Blogs' && (
                        <div className={s.filterInner} onClick={() => setVisiblePopup(!visiblePopup)}>
                            <span>{activeFilter}</span>
                            <img src={arrow} alt="icon"/>
                        </div>
                    )}
                    {title === 'Posts' && (
                        <div className={s.filterInner} onClick={() => setVisiblePopup(!visiblePopup)}>
                            <span>{activeFilter}</span>
                            <img src={arrow} alt="icon"/>
                        </div>
                    )}
                    {visiblePopup && popup}
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
