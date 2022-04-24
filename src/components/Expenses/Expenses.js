import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";

import Expense from "./Expense";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import TotalExpenseByYear from "../TotalExpense/TotalExpenseByYear";
import "../../styles/Expenses.css";

function Expenses(props){

    const[filteredYear, setFilteredYear] = useState("noYear");

    let filteredExpenses;
    if(filteredYear !== "noYear" && filteredYear!=="all"){
        filteredExpenses = props.allExpenses.filter(expense => {
            return parseInt(filteredYear) === expense.date.getFullYear();
        })
    }
    else if(filteredYear === "all"){
        filteredExpenses = props.allExpenses;
    }
    else{
        filteredExpenses = [];
    }

    function filterAllExpenses(filterYear){
        setFilteredYear(filterYear);
    }

    return (
        <div className="Expenses">
            <ExpenseFilter filterAllExpenses = {filterAllExpenses}/>
            
            {
                filteredExpenses.length === 0 && filteredYear !== "noYear"
                ?
                    <h3 className="Expenses-noExpense">There are no expenses in {filteredYear} year(s)</h3>
                :
                    filteredExpenses.map(expense => {
                        return <Expense key={uuidv4()} expense = {expense} />
                    })
            }

            <TotalExpenseByYear filteredExpenses = {filteredExpenses}/>
        </div>
    )
}

export default Expenses;