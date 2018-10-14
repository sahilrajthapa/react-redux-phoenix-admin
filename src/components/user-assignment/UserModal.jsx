import React, { Component } from 'react'
import Modal from "react-responsive-modal";
import { withRouter } from 'react-router-dom'
import  { connect } from  'react-redux'
import { getDoctors, assignUser } from '../../actions/assignmentActions'

 class UserModal extends Component {
    onCloseModal = () => {
        this.props.closeModal()
    };

    assignTo = (userId, doctorId) => {      
        const assignData = {
            userId: userId,
            doctorId: doctorId
        }
        this.props.closeModal()
        this.props.assignUser(assignData, this.props.history)    
    }
    
    componentDidMount() {
         this.props.getDoctors()
    }

  render() {
     
    const { doctors, userId } = this.props
    let doctorList 
    if ( doctors && doctors.length > 0 ) {
        doctorList = doctors.map((doctor, index) => {
             return (
                <tr key={doctor._id}>
                <td>{index + 1}</td>
                <td>
                    <img className="profile-user-img-sm img-responsive img-circle" src={doctor.headimgurl} alt={doctor.nickname} />
                </td>
                <td>{doctor.nickname}</td>
                <td>Cardiologist</td>
                <td><button type="button" className="btn btn-block btn-info btn-xs" onClick={() => this.assignTo(userId, doctor._id)}>Assign To</button></td>
            </tr>
             )
        })
    }
    return (
        <Modal open={this.props.open} onClose={this.onCloseModal} center>
        <div className="box-body table-responsive no-padding">
            <table className="table table-hover">
                <tbody><tr>
                    <th>ID</th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Speciality</th>
                    <th></th>
                </tr>
                 { doctorList }   

                </tbody></table>
        </div>
    </Modal>
    )
  }
}

const mapStateToProps = state => ({
    doctors: state.assignment.doctors
})

export default connect(mapStateToProps, { getDoctors, assignUser })(withRouter(UserModal))
