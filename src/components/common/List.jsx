import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { deleteIntroQuestion, deleteCoreQuestion } from '../../actions/questionActions'

class List extends Component {
    onDelete = (qcategory, parentId, questId) => {
        if (qcategory === 'IntroQuestion') {
            this.props.deleteIntroQuestion(parentId, questId)
        } else {
            this.props.deleteCoreQuestion(parentId, questId)
        }

    }
    render() {
        let { question, qcategory, qtype, parentId } = this.props

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
                        <td><button className="btn btn-danger" onClick={() => this.onDelete(qcategory, parentId, quest._id)}>Delete</button></td>
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
                                <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
                                    <div className="col-md-6">
                                        <h3 className="box-title">{qcategory} Table</h3>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            
                                            <div className="col-xs-12 col-sm-4 col-md-4 pull-right">
                                                <div className="input-group input-group-sm custom-input" style={{ width: "150px" }}>
                                                    <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />

                                                    <div className="input-group-btn">
                                                        <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-4 col-md-4 pull-right">
                                                <Link to={`/create-question/${qtype}/${qcategory}`} className="btn btn-primary" style={{ width: "150px", padding: '4px 12px' }}>Add </Link>
                                            </div>
                                        </div>
                                    </div>
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

List.propTypes = {
    question: PropTypes.array.isRequired,
    qtype: PropTypes.string.isRequired,
    qcategory: PropTypes.string.isRequired,
    parentId: PropTypes.string.isRequired,
    deleteIntroQuestion: PropTypes.func.isRequired,
    deleteCoreQuestion: PropTypes.func.isRequired
}

export default connect(null, { deleteIntroQuestion, deleteCoreQuestion })(withRouter(List))