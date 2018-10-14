import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContentHeader from '../common/ContentHeader'
import AssignmentList from './AssignmentList'
import { getAssignedUser } from '../../actions/assignmentActions'

class Assigned extends Component {
    componentDidMount () {
        this.props.getAssignedUser()
    }
    render() {
        const { assignedUser } = this.props.assignment
        return (
            <div className="content-wrapper">
                <ContentHeader  heading="Assigned Users" subHeading="Users"/>
                <AssignmentList status="assigned" users={assignedUser}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    assignment: state.assignment
})
export default connect(mapStateToProps ,{getAssignedUser})(Assigned)
