import React, { Component } from 'react';
import Logins from './Logins';
import AddLogin from './AddLogin';
class App extends Component {
  state = {
    logins:[
    {name: 'Hyungjun Park', age: 21, role:'SDE', id: 1  },
    {name: 'Vaishali', age: 20, role:'Project Manager', id: 2  },
    {name: 'Aimeric tsubuyashi', age: 21, role:'SDE', id: 3  }
    ]
  }
  addLogin = (login) =>{
    login.id = Math.random();
    let logins = [...this.state.logins, login]
    this.setState({
      logins: logins

    })
  }
  deleteLogin = (id) =>
  {
    let logins = this.state.logins.filter(login => {
      return login.id !== id
      
    })
    this.setState({
      logins: logins
    })
  }
  componentDidMount(){
    console.log('component mounted')
  }
  render() {
    return (
      <div className="App">
      <h1>First React run</h1>
      <p> sup </p>
      <Logins deleteLogin={this.deleteLogin} logins={this.state.logins}/>
      <AddLogin addLogin={this.addLogin}/>
      </div>
    );
  }
}

export default App;
