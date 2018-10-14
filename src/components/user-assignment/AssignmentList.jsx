import React, { Component, Fragment } from 'react'
import UserModal from './UserModal'

class AssignmentList extends Component {
    state = {
        open: false,
        id: null
    }

    assignUserClick = (id) => {
        this.setState({
            open: true,
            id: id
        })
    }

    closeModal = () => {
        this.setState({
            open: false,
            id: null
        })
    }

    render() {
        const { status, users } = this.props

        let userList;
        if (users && users.length > 0) {
            if (status === 'unassigned') {
               userList = users.map((user, index) => {
                        return (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img className="profile-user-img-sm img-responsive img-circle" src={user.headimgurl} alt={user.nickname} />
                                </td>
                                <td>{user.nickname}</td>
                                <td>Unassigned</td>
                                <td>
                                    <button type="button" onClick={() => this.assignUserClick(user._id)} className="btn btn-block btn-info btn-xs">Assign To</button>
                                </td>
                            </tr>
                        )
                })
            } else {
               userList = users.map((user, index) => {
                    return (
                        < tr key={user._id} >
                            <td>{index + 1}</td>
                            <td>
                                <img className="profile-user-img-sm img-responsive img-circle" src={user.user.headimgurl} alt={user.nickname} />
                            </td>
                            <td>{user.user.nickname}</td>
                            <td> Assigned</td>
                            <td>
                                <img className="profile-user-img-sm img-responsive img-circle" src={user.doctor.headimgurl} alt={user.doctor.nickname} />
                            </td>
                            <td>
                                {user.doctor.nickname}
                            </td>
                        </tr >
                    )
                })
            }
        }
        return (
            <div className="content" >
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <div className="box-header">
                                <h3 className="box-title">Users Table</h3>

                                <div className="box-tools">
                                    <div className="input-group input-group-sm" style={{ width: "150px" }}>
                                        <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />

                                        <div className="input-group-btn">
                                            <button type="submit" onClick={this.onOpenModal} className="btn btn-default"><i className="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-body table-responsive no-padding">
                                <table className="table table-hover">
                                    <tbody>
                                        <tr>
                                            <th>ID</th>
                                            <th>Avatar</th>
                                            <th>Name</th>
                                            <th>Status</th>
                                            {status === "assigned" ? (<th>Assigned Doctor</th>) : null}
                                            {status === "assigned" ? (<th>Doctor Name</th>) : null}
                                        </tr>
                                        {userList}
                                        
                                    </tbody></table>
                            </div>

                        </div>

                    </div>
                </div>
                {this.state.open && <UserModal open={this.state.open} userId={this.state.id} closeModal={this.closeModal} />}
            </div >
        )
    }
}

export default AssignmentList
