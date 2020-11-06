import React, { Component } from 'react';

class Edituser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editUserObject.id,
            name: this.props.editUserObject.name,
            country: this.props.editUserObject.country,
            tel: this.props.editUserObject.tel,
            admin: this.props.editUserObject.admin
        }
    }

    changeUserStatus = () => {
        this.props.changeUserStatus()
        this.props.getNewValue(this.state.id, this.state.name, this.state.country, this.state.tel, this.state.admin)
    }

    changeValue = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form className="form-group ">
                <div className="form-group">
                    <input defaultValue={this.props.editUserObject.name} onChange={(e) => this.changeValue(e)} name="name" className="form-control" type="text" placeholder="user" />
                </div>
                <div className="form-group">
                    <input defaultValue={this.props.editUserObject.country} onChange={(e) => this.changeValue(e)} name="country" className="form-control" type="text" placeholder="country" />
                </div>
                <div className="form-group">
                    <input defaultValue={this.props.editUserObject.tel} onChange={(e) => this.changeValue(e)} name="tel" className="form-control" type="text" placeholder="tel" />
                </div>
                <div className="form-group">
                    <select defaultValue={this.props.editUserObject.admin} onChange={(e) => this.changeValue(e)} name="admin" className="form-control">
                        <option value={1}>admin</option>
                        <option value={2}>user</option>
                        <option value={3}>normal</option>
                    </select>
                </div>
                <input className="form-control" type="button"
                    className="btn btn-info" value="save" onClick={() => this.changeUserStatus(this.state.id, this.state.name, this.state.country, this.state.tel, this.state.admin)} />
            </form>
        );
    }
}

export default Edituser;