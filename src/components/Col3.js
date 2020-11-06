import React, { Component } from 'react';
import EditForm from './EditForm';

class Col3 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOn: false
        }
    }

    displayButton = () => {
        if (this.state.isOn === true) {
            return (
                <button onClick={() => this.changeState()} type="button" className="btn btn-outline-warning btn-lg btn-block mb-3 ">Close</button>
            )
        } else {
            return (
                <button onClick={() => this.changeState()} type="button" className="btn btn-outline-primary btn-lg btn-block mb-3">Add</button>
            )
        }
    }

    changeState = () => {
        this.setState({
            isOn: !this.state.isOn
        });
    }

    render() {
        return (
            <div className="col-3">
                {this.displayButton()}
                {this.state.isOn ? <EditForm getNewUser={this.props.getNewUser} /> : null}
            </div>
        );
    }
}

export default Col3;