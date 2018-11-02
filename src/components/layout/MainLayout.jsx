import React from 'react'
import { Route } from 'react-router-dom'

const MainLayout = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => {
            return <Component {...matchProps} />
      } } />
    )
};

export default MainLayout
