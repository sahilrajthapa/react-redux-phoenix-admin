import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import QuestionForm from '../common/QuestionForm'

class CreateForm extends Component {
    state = {
        qname: '',
        qlabel: '',
        formType: '',
        showOptions: false,
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onFormTypeChange = (e) => {
        if (e.target.value === 'checkbox' || e.target.value === 'radio') {
            this.setState({
                [e.target.name]: e.target.value,
                showOptions: true
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value,
                showOptions: false
            })
        }

    }

    render() {
        let { qname, qlabel, formType, showOptions } = this.state
        const options = [
            { label: "* Select Form Type", value: "* Select Form Type" },
            { label: "text", value: "text" },
            { label: "number", value: "number" },
            { label: "checkbox", value: "checkbox" },
            { label: "radio", value: "radio" }
        ];

        const selectOptions = options.map(option => (
            <option key={option.label} value={option.value}>
                {option.value}
            </option>
        ));
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <h1>
                        Create questions
              </h1>
                    <ol className="breadcrumb">
                        <li><Link to="/"><i className="fa fa-dashboard"></i> Home</Link></li>
                        <li><Link to="#">Questions</Link></li>
                        <li className="active">Create Question</li>
                    </ol>
                </div>
                <QuestionForm selectOptions={selectOptions} qname={qname} qlabel={qlabel} formType={formType} showOptions={showOptions}/>
                
            </div>
        )
    }
}

export default CreateForm;
