import React, { Component } from 'react'

class Options extends Component {
    state = {
        optionsLabel: '',
        optionsValue: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        let addOptions = {
            ...this.state
        }
        this.props.addOptions(addOptions)
    }
    onChange = (e) => {
        console.log('event target')
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    render() {

        let { optionsLabel, optionsValue } = this.state
        return (
            <div style={{ width: '40%'}}>
                <div className="form-group">
                    <label htmlFor="optionsLabel">Label</label>
                    <input type="text" className="form-control" name="optionsLabel" value={optionsLabel} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="optionsValue">Value</label>
                    <input type="text" className="form-control" name="optionsValue" value={optionsValue} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Options
