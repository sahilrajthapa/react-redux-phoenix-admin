import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getQuestionType } from '../../actions/questionActions'
import Moment from 'react-moment'
import ContentHeader from '../common/ContentHeader'

class QuestionsType extends Component {

    componentDidMount() {
        this.props.getQuestionType()
    }

    render() {
        let { questionType } = this.props.question;
        let questType;
        if (questionType.length > 0) {
            questType = questionType.map((qtype, index) => {
               return (
                    <tr key={qtype.type}>
                        <td>{index + 1}</td>
                        <td><Link to={`/qset/${qtype.type}`}>{qtype.type}</Link></td>
                        <td><Link to={`/qset/${qtype.type}`}><Moment format="YYYY/MM/DD">{qtype.createdAt}</Moment></Link></td>
                        <td><Link to={`/qset/${qtype.type}`}><Moment format="YYYY/MM/DD">{qtype.dueDate}</Moment></Link></td>
                    </tr >
                )
            })
        }
        return (
            <div className="content-wrapper" >
                <ContentHeader heading="Questions Set" subHeading="Questions"/>
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Questions Set Table</h3>
                                </div>
                                <div className="box-body">
                                    <table className="table table-bordered">
                                        <tbody><tr>
                                            <th style={{ width: "10px" }}>#</th>
                                            <th>Set</th>
                                            <th>Created At</th>
                                            <th>DueDate</th>
                                        </tr>
                                            {questType}
                                            
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

const mapStateToProps = state => ({
    question: state.question
})

export default connect(mapStateToProps, {getQuestionType})(QuestionsType);
