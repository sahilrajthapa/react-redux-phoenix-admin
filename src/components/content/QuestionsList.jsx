import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getQuestions } from '../../actions/questionActions'
import List from '../common/List'

class QuestionsList extends Component {

    componentDidMount() {
        this.props.getQuestions()
    }
    
    render() {

        let { question } = this.props.question;
        let { match } = this.props;
        let filterQuest, introQuestionList, coreQuestionList;

        if (question.length > 0) {
            filterQuest = question.filter(quest => quest.type === match.params.type)[0];

            introQuestionList = <List question={filterQuest.introQuestions} qcategory="IntroQuestion" qtype={match.params.type} parentId={filterQuest._id}/>

            coreQuestionList = <List question={filterQuest.coreQuestions} qcategory="CoreQuestion" qtype={match.params.type} parentId={filterQuest._id}/>
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

export default connect(mapStateToProps,{ getQuestions })(QuestionsList)





