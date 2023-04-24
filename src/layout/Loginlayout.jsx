import React from 'react';
import Navigationbar from '../pages/Shared/Navigationbar/Navigationbar';
import { Outlet } from 'react-router-dom';

const Loginlayout = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Loginlayout;