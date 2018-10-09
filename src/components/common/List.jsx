import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteIntroQuestion, deleteCoreQuestion } from '../../actions/questionActions'

class List extends Component {
    onDelete = (qtype, qcategory, parentId, questId) => {
    console.log(parentId)
    console.log(qcategory)
      if (qcategory === 'Introquestion') {
          console.log('deleted')
          this.props.deleteIntroQuestion(qtype, parentId, questId, this.props.history)
      } else {
        this.props.deleteCoreQuestion(qtype, parentId, questId, this.props.history)
      }
      
    }
    render() {
        let { question, qcategory, qtype , parentId} = this.props

        if (question) {
            var list = question.map((quest, index) => {
                let options
                if (quest.options) {
                    options = quest.options.map(opt => {
                        return (
                            <li key={opt._id}>{opt.label}</li>
                        )
                    })
                } else {
                    options = ''
                }

                return (
                    <tr key={quest._id}>
                        <td>{index + 1}</td>
                        <td>{quest.name}</td>
                        <td>{quest.label}</td>
                        <td>{quest.formType}</td>
                        <td>
                            <ul>{options}</ul>
                        </td>
                        <td><Link to={`/edit-question/${qtype}/${qcategory}/${quest._id}`} className="btn btn-primary">Update</Link></td>
                        <td><button className="btn btn-danger" onClick={() => this.onDelete(qtype,qcategory, parentId, quest._id)}>Delete</button></td>
                    </tr>

                )
            })
        }
        return (
            <div className="content">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <div className="box-header">
                                <h3 className="box-title">{qcategory} Table</h3>

                                <div className="box-tools">
                                    <div className="input-group input-group-sm" style={{ width: "150px" }}>
                                        <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />

                                        <div className="input-group-btn">
                                            <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                                        </div>
                                    </div>

                                    <Link to={`/create-question/${qtype}/${qcategory}`} className="btn btn-primary" style={{ width: "150px", position: 'absolute', top: '0', right: '160px', padding: '4px 12px' }}>Add </Link>
                                </div>
                            </div>
                            <div className="box-body table-responsive no-padding">
                                <table className="table table-hover">
                                    <tbody><tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Label</th>
                                        <th>Form Type</th>
                                        <th>Options</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                        {list}

                                    </tbody></table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { deleteIntroQuestion, deleteCoreQuestion })(withRouter(List))