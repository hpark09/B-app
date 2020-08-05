import React, { Component } from 'react';
import {BudgetConsumer} from '../store';
import fire from '../config/fire';


class InputExpenses extends Component {
state = {
    expenses : [],
    expenseTitle: '',
    amount:''
}

handleInput = (e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = (dispatch, e) =>{
    e.preventDefault()
    const db = fire.firestore();
    db.settings({ timestampsInSnapshots:true})
    db.collection('Expenses').add({
        type:"ADD_EXPENSES",
        expenses: this.state.expenses
    });
    dispatch({
        type:"ADD_EXPENSES",
        expenses: this.state.expenses
    })
}

addExpenses = () =>{
    this.setState({
        expenses:[
            ...this.state.expenses,
            {title: this.state.expenseTitle, amount: this.state.amount},
        ],
        expenseTitle:'',
        amount: ''
    })
}

    render() {
        return (
            <BudgetConsumer>
                {
                    value =>{
                        const {dispatch} = value
                        return(
                                <div className="card card-body">
                                    <form onSubmit ={this.handleSubmit.bind(this,dispatch)}>
                                        <label>Expenses</label>
                                        <input 
                                            onChange = {this.handleInput}
                                            value ={this.state.expenseTitle}
                                            className="form-control"
                                            name="expenseTitle"
                                        />
                                        <label>Amount</label>
                                        <input 
                                            onChange={this.handleInput}
                                            value={this.state.amount}
                                            className="form-control"
                                            name="amount"
                                        />
                                        <button onClick={this.addExpenses}className="btn btn-dark btn-block mt-3">Submit</button>
                                    </form>
                                </div>
                        )
                    }
                }
            </BudgetConsumer>
        )
    }
}

export default InputExpenses