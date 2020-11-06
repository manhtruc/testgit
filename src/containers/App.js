// import Col3 from '../components/Col3';
// import Col9 from '../components/Col9';
// import Search from '../components/Search';
// import './App.css';
// import dt from '../components/data.json';

// function App() {
//   constructor(props) {
//     super(props)
//     this.state = {
//       data: dt
//     }
//   }
//   return (
//     <div className="container">
//       <div className="row">
//         <Search />
//         <Col9 getData={this.state.data} />
//         <Col3 />
//       </div>
//     </div>

//   );
// }

// export default App;
import React, { Component } from 'react';
import Col3 from '../components/Col3';
import Col9 from '../components/Col9';
import Search from '../components/Search';
import './App.css';
import dt from '../components/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchText: '',
      editUserStatus: false,
      editUserObject: {},
      editNewValue: {},
    }
  }

  componentWillMount() {
    if (localStorage.getItem("data") === null) {
      localStorage.setItem("data", JSON.stringify(dt))
    } else {
      var newData = JSON.parse(localStorage.getItem("data"))
      this.setState({
        data: newData,
      });
    }
  }


  editUser = (user) => {
    this.setState({
      editUserObject: user
    });
  }

  deleteUser = (user) => {
    var temp = this.state.data.filter((value) => (value !== user))
    this.setState({
      data: temp
    });

    localStorage.setItem("data", JSON.stringify(temp))


  }

  getNewValue = (id, name, country, tel, admin) => {
    var newEdit = {}
    newEdit.id = id
    newEdit.name = name
    newEdit.country = country
    newEdit.tel = tel
    newEdit.admin = admin
    var newEdits = this.state.data
    newEdits.forEach((value, key) => {
      if (value.id === newEdit.id) {
        value.name = newEdit.name
        value.country = newEdit.country
        value.tel = newEdit.tel
        value.admin = newEdit.admin
      }
    })
    localStorage.setItem("data", JSON.stringify(newEdits))

  }

  changeUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  getText = (text) => {
    this.setState({
      searchText: text
    });
    console.log(this.state.searchText)
  }

  getNewUser = (name, country, tel, admin) => {
    var item = {}
    item.name = name
    item.country = country
    item.tel = tel
    item.admin = admin
    var items = this.state.data
    items.push(item)
    console.log(items)

    this.setState({
      data: items
    });

    localStorage.setItem("data", JSON.stringify(items))

  }

  render() {


    var result = []
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        result.push(item)
      }
    })

    return (
      <div className="container">
        <div className="row">
          <Search getText={(text) => this.getText(text)} />
          <Col9 getData={result}
            editClick={(user) => this.editUser(user)}
            editUserShow={this.state.editUserStatus}
            changeUserStatus={() => this.changeUserStatus()}
            editUserObject={this.state.editUserObject}
            getNewValue={(id, name, country, tel, admin) => this.getNewValue(id, name, country, tel, admin)}
            deleteUser={(user) => this.deleteUser(user)}
          />
          <Col3 getNewUser={(name, country, tel, admin) => this.getNewUser(name, country, tel, admin)} />
        </div>
      </div>
    );
  }
}

export default App;
