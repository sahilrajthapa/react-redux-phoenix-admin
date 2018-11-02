import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar';

const auth = {
    isAuthenticated: true
}

const MainAdminLayout = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => {
            return auth.isAuthenticated === true ?
                (
                    <div>
                        <Header />
                        <SideBar />
                        <Component {...matchProps} />
                    </div>
                ) : (
                    <Redirect to="/admin/login" />
                )
        }} />
    )
};

export default MainAdminLayout
