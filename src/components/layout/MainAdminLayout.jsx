import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './Header'
import SideBar from './SideBar';

const MainAdminLayout = ({ auth, component: Component, ...rest }) => {
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

const mapStateToProps = (state) =>({
    auth: state.auth
})
export default connect(mapStateToProps, null)(MainAdminLayout)
