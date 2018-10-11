import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getQuestions } from '../../actions/questionActions'
import List from '../common/List'

class QuestionsList extends Component {

    componentDidMount() {
        this.props.getQuestions(this.props.match.params.type)
    }

    render() {

        let { question } = this.props.question;
        let { match } = this.props;
        let introQuestionList, coreQuestionList;

        if (Object.keys(question).length > 0) {
            introQuestionList = <List question={question.introQuestions} qcategory="IntroQuestion" qtype={match.params.type} parentId={question._id} />

            coreQuestionList = <List question={question.coreQuestions} qcategory="CoreQuestion" qtype={match.params.type} parentId={question._id} />
        }

        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <h1>
                        Questions
              </h1>
                    <ol className="breadcrumb">
                        <li><Link to="/"><i className="fa fa-dashboard"></i> Home</Link></li>
                        <li><Link to="#">Questions</Link></li>
                        <li className="active">Questions</li>
                    </ol>
                </div>
                {introQuestionList}
                {coreQuestionList}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    question: state.question
})

export default connect(mapStateToProps, { getQuestions })(QuestionsList)





