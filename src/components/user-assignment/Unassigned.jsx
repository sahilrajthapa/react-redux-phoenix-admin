import React, { Component } from 'react'
import ContentHeader from '../common/ContentHeader'
import AssignmentList from './AssignmentList'

class Unassigned extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <ContentHeader  heading="Unassigned Users" subHeading="Users"/>
                <AssignmentList status="Unassigned"/>
            </div>
        )
    }
}


export default Unassigned
