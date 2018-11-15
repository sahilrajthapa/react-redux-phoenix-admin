import React, { Component } from 'react'
import Modal from "react-responsive-modal";
import { withRouter } from 'react-router-dom'
import  { connect } from  'react-redux'
import { assignUser, updateUserAssignment } from '../../actions/assignmentActions'
var QRCode = require('qrcode.react');


 class QRModal extends Component {
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

 

  render() {
     
    var userId= {userId:this.props.userId};
    userId=JSON.stringify(userId);
    console.log("userId",userId);
    return (
        <Modal open={this.props.open} onClose={this.onCloseModal} center>
             <QRCode value={userId} size="200" renderAs="svg" style={{margin:"50px"}}  />,
        </Modal>
    )
  }
}

// const mapStateToProps = state => ({
//     doctors: state.assignment.doctors
// })

export default connect(null, {  assignUser, updateUserAssignment })(withRouter(QRModal))