import React, { Component } from 'react';
import { BudgetConsumer} from '../store';
import fire from '../config/fire';
class InputBudget extends Component {
    state ={
        budget:'' 
    }
        handleInput = (e) =>{
            this.setState({budget: e.target.value})
        }
        handleSubmit = (dispatch, e) => {
            e.preventDefault()
            const db = fire.firestore();
            db.settings({ timestampsInSnapshots:true})
            db.collection('Expenses').add({
                type:"ADD_BUDGET",
                budget: this.state.budget
            });
            dispatch({
                type:"ADD_BUDGET",
                budget: this.state.budget
            })

        }
    render() {
        return (
            <BudgetConsumer>
                { value => {
                    const {dispatch}= value
                    return(
                        <div className="card card-body mb-3" style={{marginTop: 7 + 'em'}}>
                <label>Your Budget</label>
                <form className="form-inline">
                    <input 
                        onChange={this.handleInput}
                        value = {this.state.budget}
                        className="form-control mr-2"
                        type="number"
                    />
                    <button onClick={this.handleSubmit.bind(this, dispatch)} className="btn btn-dark">Submit</button>
                </form>
            </div>             
                    )
                }}
            </BudgetConsumer>
           
        )
    }
}

export default InputBudget