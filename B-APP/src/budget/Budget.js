import React from 'react';
import InputBudget from './InputBudget';
import InputExpenses from './InputExpenses';
import DisplayBudget from '../display/DisplayBudget';
import Navbar from '../auth/navbar';

const Budget = () => {
    return (
        <div>
           <Navbar/>
        <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <InputBudget />
                <InputExpenses />
            </div>
            <div className="col-lg-8">
                <DisplayBudget />
            </div>
        </div>
        </div>
        </div>


    )
}

export default Budget