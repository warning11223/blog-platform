import React from 'react';
import {PostsType} from '../../state/state';

import s from './BlogsPage.module.css'
import main_image from '../../img/mainImage.png'
import item_image from '../../img/item_image.png'
import arrow_down_btn from '../../img/arrow_down_btn.svg'


import ButtonShowMore from '../smallComponents/ButtonShowMore/ButtonShowMore';
import {useParams} from 'react-router-dom';
import ItemPageCards from '../ItemPageCards/ItemPageCards';
import ItemPageHeader from '../smallComponents/ItemPageHeader/ItemPageHeader';
import ButtonBack from '../smallComponents/ButtonBack/ButtonBack';


type ItemPageProps = {
    posts: PostsType[]
}

const BlogsPage: React.FC<ItemPageProps> = ({posts}) => {
    const {name} = useParams();

    const cards = posts.map(item => {
        return <ItemPageCards card={item} key={item.id}/>
    })

    return (
        <>
            <ItemPageHeader title='Blogs' name={name!} />
            <ButtonBack title={'blogs'} to={'/'}/>
            <div className={s.imageContainer}>
                <div className={s.mainImage}>
                    <img className={s.image} src={main_image} alt="main_image"/>
                </div>
                <div className={s.imageBottom}>
                    <img src={item_image} alt="item_image"/>
                    <div className={s.imageRight}>
                        <h4 className={s.imageTitle}>{name}</h4>
                        <p className={s.imageDate}>Blog creation date: <span style={{color: 'black'}}>12.12.2022</span></p>
                        <p className={s.imageLink}>Website: <a className={s.imageLinkA} href="https://www.youtube.com/">https://www.youtube.com/</a></p>
                        <p className={s.imageText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                        <button className={s.imageBtn}>
                            <span>Show more</span>
                            <img src={arrow_down_btn} alt="arrow down"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className={s.cardsContainer}>
                <div className={s.cards}>
                    {cards}
                </div>
                <ButtonShowMore />
            </div>
        </>
    );
};

export default BlogsPage;
