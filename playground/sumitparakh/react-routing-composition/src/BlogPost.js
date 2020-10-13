import React from 'react';

import { useParams } from "react-router-dom";

export function BlogPost() {
    let { slug } = useParams();
    return <div>Now showing post {slug}</div>;
}