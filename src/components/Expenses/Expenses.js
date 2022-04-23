import React from "react";
import {v4 as uuidv4} from "uuid";

import Expense from "./Expense";
import "../../styles/Expenses.css";

function Expenses(props){
    return (
        <div className="Expenses">
            {
                props.allExpenses.map(expense => {
                    return <Expense key={uuidv4()} expense = {expense} />
                })
            }
        </div>
    )
}

export default Expenses;