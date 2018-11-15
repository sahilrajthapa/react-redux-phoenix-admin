import React, { Component } from 'react'
import Chips, { Chip } from 'react-chips'

class ChipInputGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chips: []
        }
    }

    onChange = chips => {
        console.log('this onchange')
        this.setState({ chips });
    }
    render() {
       const  { label, info, input, placeholder, meta:{ touched, error } } = this.props
        console.log('chipinput',this.props )
        return (

            <div className="form-group">
                {label && <label htmlFor={input.name}>{label}</label>}
                {info && <p className="text-sm text-muted">{info}</p>}

                <Chips
                    {...input}
                    value={this.state.chips}
                    placeholder={placeholder}
                    onChange={(el) => {  console.log('onchange')}}
                />
                <input onChange={( value) => this.onChange(value)} />
                {touched && error && <p className="text-sm text-danger">{error}</p>}
            </div>

        )
    }
}

export default ChipInputGroup

