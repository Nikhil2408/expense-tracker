import React from "react";

import "../../styles/TotalExpenseByYear.css";

function TotalExpenseByYear(props){
    let amount = 0;
    if(props.allExpenses.length > 0){
        props.allExpenses.forEach(expense => {
            amount+=parseInt(expense.amount);
        })
    }
    return (
        <div className="TotalExpenseByYear">
            <h2 className="TotalExpenseByYear-header">The Total Expense: {amount}</h2>
        </div>
    )
}

export default TotalExpenseByYear;