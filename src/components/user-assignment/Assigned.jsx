import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContentHeader from '../common/ContentHeader'
import AssignmentList from './AssignmentList'
import { getDoctors, getAssignedUser, deleteUserAssignment } from '../../actions/assignmentActions'

class Assigned extends Component {
    componentDidMount () {
        this.props.getAssignedUser()
        this.props.getDoctors()
    }

    deleteUser = (assignId) => {
        this.props.deleteUserAssignment(assignId)
    }

    render() {
        const { assignedUser, doctors } = this.props.assignment
        return (
            <div className="content-wrapper">
                <ContentHeader  heading="Assigned Users" subHeading="Users"/>
                <AssignmentList status="assigned" users={assignedUser} doctors={doctors} deleteUser={this.deleteUser}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    assignment: state.assignment
})

export default connect(mapStateToProps ,{getAssignedUser, deleteUserAssignment, getDoctors})(Assigned);