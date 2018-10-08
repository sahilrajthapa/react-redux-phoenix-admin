import React, { Component } from 'react'
import Options from './Options';
import TextFieldGroup from './TextFieldGroup'

class Questions extends Component {
    state = {
        question: '',
        qname: '',
        formType: '',
        options: [],
        showOptions: false
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onFormTypeChange = (e) => {
        console.log(e.target.value)
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
    onSubmit = (e) => {
        e.preventDefault();
        let addQuestions = {
            ...this.state
        }
        this.props.onSubmit(addQuestions)
    }

    addOptions = (addedOptions) => {
        this.setState({
            ...this.state,
            showOptions: false,
            options: [...this.state.options, addedOptions]
        })
    }

    render() {
        let { showOptions, question, qname, formType } = this.state

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
            <div className="box box-primary">
                <div className="box-header with-border">
                    <h3 className="box-title">Quick Example</h3>
                </div>
                <form >
                    <div className="box-body">
                        <TextFieldGroup
                            label="Question Name"
                            name="qname"
                            placeholder="Enter name for question"
                            value={qname}
                            onChange={this.onChange}
                        />

                        <TextFieldGroup
                            label="Question"
                            name="question"
                            placeholder="Enter actual question"
                            value={question}
                            onChange={this.onChange}
                        />
                        <div className="form-group">
                            <label htmlFor="formType">Form Type</label>
                            <select
                                className="form-control"
                                name="formType"
                                value={formType}
                                onChange={this.onFormTypeChange}
                                onSelect={this.onFormTypeChange}
                            >
                                {selectOptions}
                            </select>
                        </div>
                        {showOptions && <Options addOptions={this.addOptions} />}
                    </div>
                    <div className="box-footer">
                        <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default Questions;
