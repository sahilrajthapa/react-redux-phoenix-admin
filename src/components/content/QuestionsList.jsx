import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import List from '../common/List'

class QuestionsList extends Component {
    state = {
        question: []
    }
    componentDidMount() {
        axios.get('/data.json')
            .then(res => this.setState({
                question: res.data
            }))
            .catch(err => console.log(err))
    }
    
    render() {

        let { question } = this.state,
            { match } = this.props,
            filterQuest, introQuestionList, coreQuestionList;


        if (question.length > 0) {
            filterQuest = question.filter(quest => quest.type === match.params.type)[0];
            introQuestionList = <List question={filterQuest.introQuestions} qcategory="IntroQuestion" qtype={match.params.type} />
            coreQuestionList = <List question={filterQuest.coreQuestions} qcategory="CoreQuestion" qtype={match.params.type} />
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

export default QuestionsList





