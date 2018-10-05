import React, { Component } from 'react'
import Options from './Options';

class Questions extends Component {
    state = {
        label: '',
        name: '',
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
        if(e.target.value === 'checkbox' || e.target.value === 'radio') {
            this.setState({
                [e.target.name]: e.target.value,
                showOptions: true
            })
        } else  {
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
          
           options: [...this.state.options, addedOptions ]
        })
     }

    render() {
        let { showOptions, label, name, formType } = this.state

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
            <div>
                <div className="form-group">
                    <label htmlFor="label">Label</label>
                    <input type="text" className="form-control" name="label" value={label} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="formType">Form Type</label>
                    <select
                        name="formType"
                        value={formType}
                        onChange={this.onFormTypeChange}
                    >
                        {selectOptions}
                    </select>
                </div>
                {showOptions && <Options addOptions={this.addOptions}/> }

                <div className="form-group">
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Questions;
