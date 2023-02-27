import React, { Children } from 'react';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <main>{Children}</main>
            <Footer/>
        </div>
    );
};

export default Layout;