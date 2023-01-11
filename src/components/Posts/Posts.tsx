import React from 'react';

import s from './Posts.module.css'
import arrow from '../../img/arrowUp.svg';
import card from '../../img/card.png';
import cardInner from '../../img/card_inner.png';

const Posts = () => {
    return (
        <>
            <h3 className={s.rightTitle}>Posts</h3>
            <div className={s.mainRightContainer}>
                <div className={s.filter}>
                    <div className={s.filterInner}>
                        <span>New posts first</span>
                        <img src={arrow} alt="icon"/>
                    </div>
                </div>

                <div className={s.cards}>

                    <div className={s.card}>
                        <img className={s.cardImg} src={card} alt="card" />
                        <div className={s.cardDown}>
                            <img className={s.cardDownImg} src={cardInner} alt=""/>
                            <div className={s.cardDownText}>
                                <h4 className={s.cardDownTitle}>Let's fly into space</h4>
                                <p className={s.cardDownText}>The best blog in our village</p>
                                <p className={s.cardDownTime}>12.12.2022</p>
                            </div>
                        </div>
                    </div>

                    <div className={s.card}>
                        <img className={s.cardImg} src={card} alt="card" />
                        <div className={s.cardDown}>
                            <img className={s.cardDownImg} src={cardInner} alt=""/>
                            <div className={s.cardDownText}>
                                <h4 className={s.cardDownTitle}>Let's fly into space</h4>
                                <p className={s.cardDownText}>The best blog in our village</p>
                                <p className={s.cardDownTime}>12.12.2022</p>
                            </div>
                        </div>
                    </div>

                    <div className={s.card}>
                        <img className={s.cardImg} src={card} alt="card" />
                        <div className={s.cardDown}>
                            <img className={s.cardDownImg} src={cardInner} alt=""/>
                            <div className={s.cardDownText}>
                                <h4 className={s.cardDownTitle}>Let's fly into space</h4>
                                <p className={s.cardDownText}>The best blog in our village</p>
                                <p className={s.cardDownTime}>12.12.2022</p>
                            </div>
                        </div>
                    </div>

                    <div className={s.card}>
                        <img className={s.cardImg} src={card} alt="card" />
                        <div className={s.cardDown}>
                            <img className={s.cardDownImg} src={cardInner} alt=""/>
                            <div className={s.cardDownText}>
                                <h4 className={s.cardDownTitle}>Let's fly into space</h4>
                                <p className={s.cardDownText}>The best blog in our village</p>
                                <p className={s.cardDownTime}>12.12.2022</p>
                            </div>
                        </div>
                    </div>

                    <div className={s.card}>
                        <img className={s.cardImg} src={card} alt="card" />
                        <div className={s.cardDown}>
                            <img className={s.cardDownImg} src={cardInner} alt=""/>
                            <div className={s.cardDownText}>
                                <h4 className={s.cardDownTitle}>Let's fly into space</h4>
                                <p className={s.cardDownText}>The best blog in our village</p>
                                <p className={s.cardDownTime}>12.12.2022</p>
                            </div>
                        </div>
                    </div>

                    <div className={s.card}>
                        <img className={s.cardImg} src={card} alt="card" />
                        <div className={s.cardDown}>
                            <img className={s.cardDownImg} src={cardInner} alt=""/>
                            <div className={s.cardDownText}>
                                <h4 className={s.cardDownTitle}>Let's fly into space</h4>
                                <p className={s.cardDownText}>The best blog in our village</p>
                                <p className={s.cardDownTime}>12.12.2022</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={s.button}>
                    <span>Show more</span>
                    <img src={arrow} alt="arrow"/>
                </div>
            </div>
        </>
    );
};

export default Posts;
