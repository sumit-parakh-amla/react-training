import React from 'react';
import { Link } from 'react-router-dom';

/**
 * First way
 */
export const About = () => {
    return <p>
        About Page
        <Link to="/">Home</Link>
        </p>
}