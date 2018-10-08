import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class QuestionsType extends Component {
    state = {
        question: []
    }
    componentDidMount() {
        axios.get('/data.json')
            .then(res => {
                this.setState({
                question: res.data
                }, () => console.log(this.state.question))
        })
            .catch(err => console.log(err))
    }

    render() {
        let { question } = this.state
        let questionType
        if (question.length > 0) {
            questionType = question.map((qtype, index) => {
               return (
                    <tr key={qtype.type}>
                        <td>{index + 1}</td>
                        <td><Link to={`/qset/${qtype.type}`}>{qtype.type}</Link></td>
                        <td><Link to={`/qset/${qtype.type}`}>{qtype.dueDate}</Link></td>
                    </tr >
                )
            })
        }
        return (
            <div className="content-wrapper" >
                <section className="content-header">
                    <h1>
                        Questions Type
                    </h1>
                    <ol className="breadcrumb">
                        <li><Link to="/"><i className="fa fa-dashboard"></i> Home</Link></li>
                        <li><Link to="#">Questions</Link></li>
                        <li className="active">Questions Type</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Questions Type Table</h3>
                                </div>
                                <div className="box-body">
                                    <table className="table table-bordered">
                                        <tbody><tr>
                                            <th style={{ width: "10px" }}>#</th>
                                            <th>Type</th>
                                            <th>DueDate</th>
                                        </tr>
                                            {questionType}
                                            
                                        </tbody></table>
                                </div>

                                <div className="box-footer clearfix">
                                    <ul className="pagination pagination-sm no-margin pull-right">
                                        <li><Link to="#">«</Link></li>
                                        <li><Link to="#">1</Link></li>
                                        <li><Link to="#">2</Link></li>
                                        <li><Link to="#">3</Link></li>
                                        <li><Link to="#">»</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default QuestionsType;
