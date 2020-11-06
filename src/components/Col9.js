import React, { Component } from 'react';
import Edituser from './Edituser';

class Col9 extends Component {

    isEditUSerShow = () => {
        if (this.props.editUserShow === true) {
            return <Edituser getNewValue={this.props.getNewValue} changeUserStatus={() => this.props.changeUserStatus()}
                editUserObject={this.props.editUserObject}
            />
        }
        //  else {
        //     return (

        //     )
        // }
    }

    editClick = (value) => {
        this.props.editClick(value)
        this.props.changeUserStatus()
    }

    getAdminName = (adminId) => {
        switch (adminId) {
            case 1:
            case "1":
                return adminId = "admin"
            case 2:
            case "2":
                return adminId = "user"
            default:
                return adminId = "normal"
        }
    }

    render() {
        return (
            <div className="col-9">
                <table className="table  table-hover table-outline mb-0">
                    <thead className="thead-light">
                        <tr>
                            <th>User</th>
                            <th>Country</th>
                            <th>Tel</th>
                            <th>Admin</th>
                            <th>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.getData.map((value, key) => (
                                <tr key={key}>
                                    <td>
                                        {value.name}
                                    </td>
                                    <td>
                                        {value.country}
                                    </td>
                                    <td>
                                        {value.tel}
                                    </td>
                                    <td>
                                        {this.getAdminName(value.admin)}
                                    </td>
                                    <td>
                                        <div className="btn btn-group">
                                            <div onClick={() => this.editClick(value)} className={"btn btn-success " + (this.props.editUserShow ? "hide" : "")} >edit</div>
                                            <div className="btn btn-danger" onClick={() => this.props.deleteUser(value)}>delete</div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {this.isEditUSerShow()}
            </div>
        );
    }
}

export default Col9;