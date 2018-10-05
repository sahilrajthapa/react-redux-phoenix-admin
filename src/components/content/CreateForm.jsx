import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Questions from '../common/Questions';

class CreateForm extends Component {
  state = {
    type: '',
    dueDate: '',
    introQuestions: [],
    questions: [],
    displayQuestions: false
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  addToQuestions = (addedQuestions) => {
    this.setState({
      ...this.state,
      displayQuestions: false,
      introQuestions: [...this.state.introQuestions, addedQuestions]
    })
  }

  render() {
    const { displayQuestions, introQuestions } = this.state
    let formQuestions;
    let QuestionList;

    if (displayQuestions) {
      formQuestions = <Questions onSubmit={this.addToQuestions} />
    }
    if (introQuestions.length > 0) {
      QuestionList = introQuestions.map((question) => {
        let options = question.options.map(option => {
          console.log(option)
          return (
            <li>{option.optionsLabel}</li>
          )
        })
        return (
          <tr>
            <td>{question.name}</td>
            <td>{question.label}</td>
            <td>{question.formType}</td>
            <td><ul>{options}</ul></td>
          </tr>
        )
      })
    }
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            General Form Elements
        <small>Preview</small>
          </h1>
          <ol className="breadcrumb">
            <li><Link to="/"><i className="fa fa-dashboard"></i> Home</Link></li>
            <li><Link to="#">Forms</Link></li>
            <li className="active">General Elements</li>
          </ol>
        </section>
        <div className="content">
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Quick Example</h3>
            </div>

            { /* ------------Form ------------------ */}

            <form >
              <div className="box-body">
                <div className="form-group">
                  <label htmlFor="type">Type</label>
                  <input type="text" className="form-control" name="type" value={this.state.type} onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="dueDate">DueDate</label>
                  <input type="date" className="form-control" name="dueDate" value={this.state.dueDate} onChange={this.onChange} />
                </div>
                {QuestionList && (
                  <div className="box" style={{ maxHeight: '350px', overflow: 'scroll'}}>
                    <div className="box-header">
                      <h3 className="box-title">User Personal Questions</h3>

                      <div className="box-tools">
                        <div className="input-group input-group-sm" style={{ width: "150px" }}>
                          <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />

                          <div className="input-group-btn">
                            <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-body table-responsive no-padding">
                      <table className="table table-hover">
                        <tbody><tr>
                          <th>Name</th>
                          <th>Label</th>
                          <th>Form Type</th>
                          <th>Options</th>
                        </tr>

                          {QuestionList}

                        </tbody></table>
                    </div>
                  </div>
                )}
                {formQuestions}
                <button type="button" onClick={() => {
                  this.setState(prevState => ({
                    displayQuestions: !prevState.displayQuestions
                  }))
                }}>Create IntroQuestions</button>
              </div>
              <div className="box-footer">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateForm
