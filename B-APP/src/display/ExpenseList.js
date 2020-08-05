import React, { Component } from 'react';
import {BudgetConsumer} from '../store';

class ExpenseList extends Component {
    render() {
        return (
            <div className="card mt-5">
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <BudgetConsumer>
                        {value =>{
                            const ExpenseList = value.expenses.length > 0 ? (
                                value.expenses.map((expense, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{expense.title}</td>
                                            <td>{expense.amount}</td>
                                            
                                        </tr>
                                    )
                                })
                            ):(
                                <tr>
                                    <td>No Listed Expense</td>
                                </tr>
                            )
                            return <tbody> {ExpenseList} </tbody>
                        }}
                    </BudgetConsumer>
                          
                </table>
            </div>
        )
    }
}

export default ExpenseList
