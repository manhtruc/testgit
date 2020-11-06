import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            country: "",
            tel: "",
            admin: 1
        }
    }

    getValue = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });

    }


    render() {
        return (

            <form className="form-group">
                <div className="form-group">
                    <input onChange={(e) => this.getValue(e)} name="name" className="form-control" type="text" placeholder="user" />
                </div>
                <div className="form-group">
                    <input onChange={(e) => this.getValue(e)} name="country" className="form-control" type="text" placeholder="country" />
                </div>
                <div className="form-group">
                    <input onChange={(e) => this.getValue(e)} name="tel" className="form-control" type="text" placeholder="tel" />
                </div>
                <div className="form-group">
                    <select onChange={(e) => this.getValue(e)} name="admin" className="form-control">
                        <option value={1}>admin</option>
                        <option value={2}>user</option>
                        <option value={3}>normal</option>
                    </select>
                </div>
                <input className="form-control" type="reset"
                    onClick={(name, country, tel, admin) =>
                        this.props.getNewUser(this.state.name, this.state.country, this.state.tel, this.state.admin)} className="btn btn-info" value="add new user" />
            </form>

        );
    }
}

export default EditForm;