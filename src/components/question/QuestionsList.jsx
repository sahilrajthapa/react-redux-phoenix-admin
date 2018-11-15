import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { getQuestions } from '../../actions/questionActions'
import List from '../common/List'
import ContentHeader from '../common/ContentHeader'

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
                <ContentHeader  heading="Questions" subHeading="Questions"/>
                {introQuestionList}
                {coreQuestionList}
            </div>
        )
    }
}

QuestionsList.propTypes = {
    question: PropTypes.object.isRequired,
    getQuestions: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    question: state.question
})

export default connect(mapStateToProps, { getQuestions })(QuestionsList)





