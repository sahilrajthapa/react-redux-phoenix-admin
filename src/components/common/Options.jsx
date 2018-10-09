import React, { Component } from 'react'
import Modal from 'react-modal';
import TextFieldGroup from './TextFieldGroup';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

class Options extends Component {
    state = {
        optionsLabel: '',
        optionsValue: '',
        modalIsOpen: false
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.closeModal();
        let addOptions = {
            ...this.state
        }
        this.props.addOptions(addOptions)
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    componentWillMount() {
        this.openModal()
    }


    render() {

        let { optionsLabel, optionsValue } = this.state
        return (
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <TextFieldGroup
                    label="Label"
                    name="optionsLabel"
                    placeholder="Enter a label"
                    value={optionsLabel}
                    onChange={this.onChange}
                />

                <TextFieldGroup
                    label="Value"
                    name="optionsValue"
                    placeholder="Enter value for label"
                    value={optionsValue}
                    onChange={this.onChange}
                />

                <div className="form-group">
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                </div>
            </Modal>
        )
    }
}

export default Options
