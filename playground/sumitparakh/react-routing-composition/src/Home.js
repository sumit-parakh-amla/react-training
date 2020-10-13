import React from 'react';
import { Link } from 'react-router-dom';

/**
 * First way
 */
export const Home = () => {
    const iterate = 50;
    const jsx = [];
    for (let index = 0; index < iterate; index++) {
        jsx.push(<p key={index}>
            lasdfas
            sdf
            as
            df
            asdfasd
            fasdfasfd
        </p>);
    }

    return <div>
        Home page
        <Link to="/blog/my-article">Blog Post</Link>
        <Link to="/about">Go to About</Link>
        {jsx}
        <a href="#">Go To Top</a>
    </div>
}