import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class List extends Component {
    render() {
        let { question, qcategory, qtype } = this.props

        if (question) {
            console.log('question', question)
            var list = question.map((quest, index) => {
                let options
                if (quest.options) {
                    options = quest.options.map(opt => {
                        return (
                            <li>{opt.label}</li>
                        )
                    })
                } else {
                    options = ''
                }

                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{quest.name}</td>
                        <td>{quest.label}</td>
                        <td>{quest.formType}</td>
                        <td>
                            <ul>{options}</ul>
                        </td>
                        <td><span className="btn btn-primary">Update</span></td>
                        <td><span className="btn btn-danger">Delete</span></td>
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

export default List