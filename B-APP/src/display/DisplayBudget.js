import React from "react";
import BalanceDisplay from './BalanceDisplay';
import ExpenseList from './ExpenseList';
import Chart from './Chart'


const DisplayBudget = () => {
    return (
        <div className="card card-body">
            <h3 className="text-center">Your Budget Info</h3>
            <BalanceDisplay />
            <Chart />
            <ExpenseList />

        </div>
    )
}

export default DisplayBudget