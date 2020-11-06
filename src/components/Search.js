import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ""
        }
    }

    getSearchText = (e) => {
        this.setState({
            searchText: e.target.value
        });
        // console.log(this.state.searchText)
    }

    render() {
        return (
            <div className="col-12 mt-3">
                <div className="search">
                    <div className="btn-group">
                        <input onChange={(e) => this.getSearchText(e)} className="pl-3" type="text" placeholder="search" />
                        <div onClick={() => this.props.getText(this.state.searchText)} className="btn btn-info">Search</div>
                    </div>
                    <hr />
                </div>
            </div>
        );
    }
}

export default Search;