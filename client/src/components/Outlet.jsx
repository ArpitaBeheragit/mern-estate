import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Header />
            <div className='pt-16'> 
                <Outlet /> 
            </div>
        </div>
    );
};

export default Layout;
