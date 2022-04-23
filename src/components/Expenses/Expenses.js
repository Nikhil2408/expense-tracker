import React from "react";

import Expense from "./Expense";
import "../../styles/Expenses.css";

function Expenses(props){
    return (
        <div class="Expenses">
            {
                props.allExpenses.map(expense => {
                    return <Expense expense = {expense} />
                })
            }
        </div>
    )
}

export default Expenses;