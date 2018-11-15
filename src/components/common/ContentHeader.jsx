import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
 
const ContentHeader = ({heading, subHeading}) => {
    return (
        <div className="content-header">
            <h1>
                {heading}
              </h1>
            <ol className="breadcrumb">
                <li><Link to="/admin"><i className="fa fa-dashboard"></i> Home</Link></li>
                <li><Link to="#">{subHeading}</Link></li>
                <li className="active">{heading}</li>
            </ol>
        </div>
    )
}

ContentHeader.propTypes = {
     heading: PropTypes.string.isRequired,
     subHeading:  PropTypes.string.isRequired
}
export default ContentHeader
