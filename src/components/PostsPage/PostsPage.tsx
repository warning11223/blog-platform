import React from 'react';

import s from './PostsPage.module.css'
import ItemPageHeader from '../smallComponents/ItemPageHeader/ItemPageHeader';
import {useParams} from 'react-router-dom';
import ButtonBack from '../smallComponents/ButtonBack/ButtonBack';

import top_img from '../../img/top_img.png'
import main_image from '../../img/main_image.png'

const PostsPage = () => {
    const {name} = useParams();

    return (
        <div>
            <ItemPageHeader title='Posts' name={name!} />
            <ButtonBack title='posts' to='/posts' />

            <div className={s.top}>
                <img className={s.topImg} src={top_img} alt="top_img"/>
                <h4 className={s.topTitle}>Back-end blog</h4>
            </div>
            <div className={s.dataContainer}>
                <h3 className={s.dataTitle}>{name} <span className={s.dataSpan}>(for public posts)</span></h3>
                <p className={s.dataTime}>12/12/2022 at 15:46:58</p>
            </div>
            <div>
                <img className={s.mainImage} src={main_image} alt="main_image"/>
            </div>
            <div>
                <p className={`${s.text1} ${s.text}`}>Lorem ipsum dolor sit amet consectetur adipiscing elit, magna felis vestibulum metus aptent velit, tempor posuere natoque habitasse phasellus dignissim.</p>
                <p className={`${s.text2} ${s.text}`}>Nec libero purus etiam venenatis velit cras nascetur euismod ornare sodales, ex ut augue sed vestibulum molestie dis quisque laoreet, tempor ullamcorper mus odio nostra est dolor magna justo.</p>
                <p className={`${s.text3} ${s.text}`}>Lorem ipsum dolor sit amet consectetur adipiscing elit, magna felis vestibulum metus aptent velit, tempor posuere natoque habitasse phasellus dignissim.</p>
                <p className={`${s.text4} ${s.text}`}>Nec libero purus etiam venenatis velit cras nascetur euismod ornare sodales, ex ut augue sed vestibulum molestie dis quisque laoreet, tempor ullamcorper mus odio nostra est dolor magna justo.</p>
            </div>
        </div>
    );
};

export default PostsPage;
