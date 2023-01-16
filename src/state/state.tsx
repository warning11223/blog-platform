import card from '../img/card.png';
import blog_img from '../img/blog_img.png'
import card_inner from '../img/card_inner.png'


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

export type StateType = {
    itemPagePosts: PostsType[]
    blogs: BlogsType[]
    posts: PostsType[]
}

export const state: StateType = {
    itemPagePosts: [
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
    ],
    blogs: [
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
    ],
    posts: [
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
    ],
}
