import React, { Component } from 'react';
import Bstatements from './Bstatements'
import AddBstatements from './AddBstatements'
import Navbar from './components/Navbar'
class App extends Component {
  state ={
    bstatements:[
      {id:1, content:'30 dollars at diner'},
      {id:2, content:'40 dollars bowling'}
    ]
  }
  deleteBstatements = (id) =>{
      const bstatements = this.state.bstatements.filter(bstatements => {
          return bstatements.id !== id
      })
      this.setState({
        bstatements
      })

  }
  addBstatement = (bstatement) =>{
   bstatement.id = Math.random(); 
    let bstatements = [...this.state.bstatements, bstatement];
    this.setState({
      bstatements
    })
  }
  render() {
    return (
      <div className="bstatements-app container">
      <Navbar/>
            <h1 className="center blue-text">
            Items I spent Money On:
            </h1>
        <Bstatements bstatements={this.state.bstatements} deleteBstatements={this.deleteBstatements}/>
        <AddBstatements addBstatement={this.addBstatement}/>
      </div>
    );
  }
}

export default App;
