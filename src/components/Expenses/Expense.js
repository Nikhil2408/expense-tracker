import React from "react";

import "../../styles/Expense.css";

function Expense(props){
    const year = props.expense.date.getFullYear();
    const month = props.expense.date.toLocaleString("en-US", {month: "long"});
    const date = props.expense.date.getDate();
    return (
        <div className="Expense">
            <div className="Expense-date">
                <p>{year}</p>
                <p>{month}</p>
                <p>{date}</p>
            </div>
            <h2>{props.expense.title}</h2>
            <h2>Rs. {props.expense.amount}</h2>
        </div>
    );
}

export default Expense;