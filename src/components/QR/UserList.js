import React, { Component } from 'react'
import QRModal from './QRModal'
import ContentHeader from '../common/ContentHeader'


class UserList extends Component {
    state = {
        open: false,
        userId: null,
    }

    componentDidMount(){
        console.log("this.props",this.props);
        this.props.getUsers();
    }

    generateQR = (userId) => {
        this.setState({
            open: true,
            userId
        })
    }

    closeModal = () => {
        this.setState({
            open: false,
            userId: null,
            doctorId: null,
            assignId: null
        })
    }

    render() {
        const { userList } = this.props
        console.log("userlist",userList);
        let renderUsers;
        if (userList && userList.length > 0) {
                renderUsers = userList.map((user, index) => {
                    return (
                        <tr key={user._id}>
                            <td>
                              <img className="profile-user-img-sm img-responsive img-circle" src={user.headimgurl} alt={user.nickname} />
                            </td>
                            
                            <td>{user.nickname}</td>
                            
                            <td>
                                <button type="button" onClick={() => this.generateQR(user._id)} className="btn btn-block btn-info btn-xs">View QR</button>
                            </td>
                        </tr>
                    )
                })            
        }

        return (
            <div className="content-wrapper">
              <ContentHeader  heading="Users List" subHeading="Users"/>
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
                                                <th>Avatar</th>
                                                <th>Name</th>                                            
                                            </tr>

                                            {renderUsers}

                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>
                    </div>
                  {this.state.open && <QRModal open={this.state.open} userId={this.state.userId} closeModal={this.closeModal} />}
               </div >
            </div>    
        )
    }
}

export default UserList;