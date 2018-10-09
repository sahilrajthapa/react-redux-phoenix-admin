import React, { Component } from 'react';
import TextFieldGroup from './TextFieldGroup'

class QuestionForm extends Component {
    render() {
        return (
            <div className="content">
                <div className="row">
                    <div className="col-md-6">
                        <div className="box box-primary">
                            <div className="box-header with-border">
                                <h3 className="box-title">Question Form</h3>
                            </div>
                            <form >
                                <div className="box-body">
                                    <TextFieldGroup
                                        label="Question Name"
                                        name="qname"
                                        placeholder="Enter name for questions"
                                        value={this.props.qname}
                                        onChange={this.props.onChange}
                                    />
                                    <TextFieldGroup
                                        label="Question Label"
                                        name="qlabel"
                                        placeholder="Enter label of question"
                                        value={this.props.dueDate}
                                        onChange={this.props.onChange}
                                    />
                                    <div className="form-group">
                                        <label htmlFor="formType">Form Type</label>
                                        <select
                                            className="form-control"
                                            name="formType"
                                            value={this.props.formType}
                                            onChange={this.props.onFormTypeChange}
                                        >
                                            {this.props.selectOptions}
                                        </select>
                                    </div>
                                    {this.props.showOptions && <TextFieldGroup
                                        label="Options"
                                        name="options"
                                        placeholder="Enter options for question"
                                        value={this.props.options}
                                        onChange={this.props.onChange}
                                    />}
                                </div>
                                <div className="box-footer">
                                    <button type="submit" className="btn btn-primary" onSubmit="onSubmit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default  QuestionForm