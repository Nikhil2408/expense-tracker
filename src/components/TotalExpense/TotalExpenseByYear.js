import React from "react";

import "../../styles/TotalExpenseByYear.css";

function TotalExpenseByYear(props){
    let amount = 0;
    if(props.filteredExpenses.length > 0){
        props.filteredExpenses.forEach(expense => {
            amount+=parseInt(expense.amount);
        })
    }
    return (
        <div className="TotalExpenseByYear">
            <h2 className="TotalExpenseByYear-header">The Total Expense: Rs. {amount}</h2>
        </div>
    )
}

export default TotalExpenseByYear;