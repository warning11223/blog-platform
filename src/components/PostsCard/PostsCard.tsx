import React from 'react';

import s from './PostsCard.module.css'
import {PostsType} from '../Main/Main';
import {Link} from 'react-router-dom';

type PostsCardsType = {
    posts: PostsType[]
}

const PostsCard: React.FC<PostsCardsType> = ({posts}) => {
    const postsRender = posts?.map(item => {
        return (
            <div className={s.card} key={item.id}>
                <Link to={`/posts/${item.title}`}>
                    <img className={s.cardImg} src={item.img} alt="card" />
                </Link>
                <div className={s.cardDown}>
                    <img className={s.cardDownImg} src={item.img_inner} alt="card_inner"/>
                    <div className={s.cardDownText}>
                        <Link className={s.link} to={`/posts/${item.title}`}>
                            <h4 className={s.cardDownTitle}>{item.title}</h4>
                        </Link>
                        <p className={s.cardDownText}>{item.text}</p>
                        <p className={s.cardDownTime}>{item.time}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            {postsRender}
        </>
    );
};

export default PostsCard;
