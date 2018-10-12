import React, { Component, Fragment } from 'react'
import Modal from "react-responsive-modal";

class AssignmentList extends Component {
    state = {
        open: false
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { status } = this.props
        const { open } = this.state
        return (
            <Fragment>
                <div className="content">
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
                                                <th>Gender</th>
                                                <th>City</th>
                                                <th>Age</th>
                                                <th>Status</th>
                                                {status === 'unassigned' ? (<th></th>) : (<th></th>)}
                                                {status === "assigned" ? (<th>Assigned Doctor</th>) : (<th></th>)}
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <img className="profile-user-img-sm img-responsive img-circle" src="/img/user4-128x128.jpg" alt="profile picture1" />
                                                </td>
                                                <td>Anna Flintoff</td>
                                                <td>Female</td>
                                                <td>London</td>
                                                <td>27</td>
                                                <td>
                                                    {status === "assigned" ? 'Assigned' : 'Unassigned'}</td>
                                                <td>
                                                    {status === "unassigned" ? (<button type="button" onClick={this.onOpenModal} className="btn btn-block btn-info btn-xs">Assign To</button>) : ''}
                                                </td>
                                                <td>

                                                    {status === "assigned" ? (<img className="profile-user-img-sm img-responsive img-circle" src="/img/user7-128x128.jpg" alt="profile picture1" />) : ''}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>
                                                    <img className="profile-user-img-sm img-responsive img-circle" src="/img/user3-128x128.jpg" alt="profile picture2" />
                                                </td>
                                                <td>Anna Marie</td>
                                                <td>Female</td>
                                                <td>London</td>
                                                <td>27</td>
                                                <td>
                                                    {status === "assigned" ? 'Assigned' : 'Unassigned'}</td>
                                                <td>
                                                    {status === "unassigned" ? (<button type="button" onClick={this.onOpenModal} className="btn btn-block btn-info btn-xs">Assign To</button>) : ''}
                                                </td>
                                                <td>

                                                    {status === "assigned" ? (<img className="profile-user-img-sm img-responsive img-circle" src="/img/user7-128x128.jpg" alt="profile picture1" />) : ''}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>
                                                    <img className="profile-user-img-sm img-responsive img-circle" src="/img/user1-128x128.jpg" alt="profile picture3" />
                                                </td>
                                                <td>Andrew Flintoff</td>
                                                <td>Male</td>
                                                <td>London</td>
                                                <td>27</td>
                                                <td>
                                                    {status === "assigned" ? 'Assigned' : 'Unassigned'}</td>
                                                <td>
                                                    {status === "unassigned" ? (<button type="button" onClick={this.onOpenModal} className="btn btn-block btn-info btn-xs">Assign To</button>) : ''}
                                                </td>
                                                <td>

                                                    {status === "assigned" ? (<img className="profile-user-img-sm img-responsive img-circle" src="/img/user7-128x128.jpg" alt="profile picture1" />) : ''}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>
                                                    <img className="profile-user-img-sm img-responsive img-circle" src="/img/user6-128x128.jpg" alt="profile picture4" />
                                                </td>
                                                <td>Adam GilChrist</td>
                                                <td>Male</td>
                                                <td>Perth</td>
                                                <td>37</td>
                                                <td>
                                                    {status === "assigned" ? 'Assigned' : 'Unassigned'}</td>
                                                <td>
                                                    {status === "unassigned" ? (<button type="button" onClick={this.onOpenModal} className="btn btn-block btn-info btn-xs">Assign To</button>) : ''}
                                                </td>
                                                <td>

                                                    {status === "assigned" ? (<img className="profile-user-img-sm img-responsive img-circle" src="/img/user7-128x128.jpg" alt="profile picture1" />) : ''}
                                                </td>
                                            </tr>

                                        </tbody></table>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div className="box-body table-responsive no-padding">
                        <table className="table table-hover">
                            <tbody><tr>
                                <th>ID</th>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Speciality</th>
                                <th></th>
                            </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img className="profile-user-img-sm img-responsive img-circle" src="/img/user4-128x128.jpg" alt="profile picture1" />
                                    </td>
                                    <td>Anna Flintoff</td>
                                    <td>Cardiologist</td>
                                    <td><button type="button" className="btn btn-block btn-info btn-xs">Assign To</button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <img className="profile-user-img-sm img-responsive img-circle" src="/img/user3-128x128.jpg" alt="profile picture2" />
                                    </td>
                                    <td>Anna Marie</td>
                                    <td>Surgeon</td>
                                    <td><button type="button" className="btn btn-block btn-info btn-xs">Assign To</button></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <img className="profile-user-img-sm img-responsive img-circle" src="/img/user1-128x128.jpg" alt="profile picture3" />
                                    </td>
                                    <td>Andrew Flintoff</td>
                                    <td>Cardiologist</td>
                                    <td><button type="button" className="btn btn-block btn-info btn-xs">Assign To</button></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <img className="profile-user-img-sm img-responsive img-circle" src="/img/user6-128x128.jpg" alt="profile picture4" />
                                    </td>
                                    <td>Adam GilChrist</td>
                                    <td>Allergist/Immunologist </td>
                                    <td><button type="button" className="btn btn-block btn-info btn-xs">Assign To</button></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img className="profile-user-img-sm img-responsive img-circle" src="/img/user4-128x128.jpg" alt="profile picture1" />
                                    </td>
                                    <td>Anna Flintoff</td>
                                    <td>Cardiologist</td>
                                    <td><button type="button" className="btn btn-block btn-info btn-xs">Assign To</button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <img className="profile-user-img-sm img-responsive img-circle" src="/img/user3-128x128.jpg" alt="profile picture2" />
                                    </td>
                                    <td>Anna Marie</td>
                                    <td>Surgeon</td>
                                    <td><button type="button" className="btn btn-block btn-info btn-xs">Assign To</button></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <img className="profile-user-img-sm img-responsive img-circle" src="/img/user1-128x128.jpg" alt="profile picture3" />
                                    </td>
                                    <td>Andrew Flintoff</td>
                                    <td>Cardiologist</td>
                                    <td><button type="button" className="btn btn-block btn-info btn-xs">Assign To</button></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <img className="profile-user-img-sm img-responsive img-circle" src="/img/user6-128x128.jpg" alt="profile picture4" />
                                    </td>
                                    <td>Adam GilChrist</td>
                                    <td>Allergist/Immunologist </td>
                                    <td><button type="button" className="btn btn-block btn-info btn-xs">Assign To</button></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img className="profile-user-img-sm img-responsive img-circle" src="/img/user4-128x128.jpg" alt="profile picture1" />
                                    </td>
                                    <td>Anna Flintoff</td>
                                    <td>Cardiologist</td>
                                    <td><button type="button" className="btn btn-block btn-info btn-xs">Assign To</button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <img className="profile-user-img-sm img-responsive img-circle" src="/img/user3-128x128.jpg" alt="profile picture2" />
                                    </td>
                                    <td>Anna Marie</td>
                                    <td>Surgeon</td>
                                    <td><button type="button" className="btn btn-block btn-info btn-xs">Assign To</button></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <img className="profile-user-img-sm img-responsive img-circle" src="/img/user1-128x128.jpg" alt="profile picture3" />
                                    </td>
                                    <td>Andrew Flintoff</td>
                                    <td>Cardiologist</td>
                                    <td><button type="button" className="btn btn-block btn-info btn-xs">Assign To</button></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <img className="profile-user-img-sm img-responsive img-circle" src="/img/user6-128x128.jpg" alt="profile picture4" />
                                    </td>
                                    <td>Adam GilChrist</td>
                                    <td>Allergist/Immunologist </td>
                                    <td><button type="button" className="btn btn-block btn-info btn-xs">Assign To</button></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img className="profile-user-img-sm img-responsive img-circle" src="/img/user4-128x128.jpg" alt="profile picture1" />
                                    </td>
                                    <td>Anna Flintoff</td>
                                    <td>Cardiologist</td>
                                    <td><button type="button" className="btn btn-block btn-info btn-xs">Assign To</button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <img className="profile-user-img-sm img-responsive img-circle" src="/img/user3-128x128.jpg" alt="profile picture2" />
                                    </td>
                                    <td>Anna Marie</td>
                                    <td>Surgeon</td>
                                    <td><button type="button" className="btn btn-block btn-info btn-xs">Assign To</button></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <img className="profile-user-img-sm img-responsive img-circle" src="/img/user1-128x128.jpg" alt="profile picture3" />
                                    </td>
                                    <td>Andrew Flintoff</td>
                                    <td>Cardiologist</td>
                                    <td><button type="button" className="btn btn-block btn-info btn-xs">Assign To</button></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <img className="profile-user-img-sm img-responsive img-circle" src="/img/user6-128x128.jpg" alt="profile picture4" />
                                    </td>
                                    <td>Adam GilChrist</td>
                                    <td>Allergist/Immunologist </td>
                                    <td><button type="button" className="btn btn-block btn-info btn-xs">Assign To</button></td>
                                </tr>

                            </tbody></table>
                    </div>
                </Modal>
            </Fragment>
        )
    }
}

export default AssignmentList
