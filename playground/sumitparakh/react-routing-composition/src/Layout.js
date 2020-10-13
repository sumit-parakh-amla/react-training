import React from 'react';

import { Footer } from "./Footer/Footer"
import { Header } from "./Header"
import './Layout.css';

export const Layout = (props) => {
    return <>
        <Header></Header>
        {props.children}
        <Footer></Footer>
    </>
}