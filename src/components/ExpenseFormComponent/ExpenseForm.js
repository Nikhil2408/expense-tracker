import React, {useState} from "react";

import "../../styles/ExpenseForm.css";

function ExpenseForm(props){

    let [userInput, setUserInput] = useState({
        title: "",
        amount: "",
        date: ""
    });

    function changeHandler(eventObj){
        setUserInput(function(currentState){
            return {
                ...currentState,
                [eventObj.target.name] : eventObj.target.value
            }
        })
    }

    function submitHandler(eventObj){
        eventObj.preventDefault();
        if(userInput.title !== '' && userInput.amount !== '' && userInput.date!== ''){
            userInput = {
                ...userInput,
                date: new Date(userInput.date)
            }
            props.addExpense(userInput);
            setUserInput({
                title: "",
                amount: "",
                date: ""
            })
        }

    }

    return (
        <div className="ExpenseForm">
            <form onSubmit = {submitHandler}>
                <label className = "ExpenseForm-label" htmlFor = "title">Title</label>
                <input className="ExpenseForm-input" type="text" id="title" name="title" value={userInput.title} onChange = {changeHandler}/>

                <label className = "ExpenseForm-label" htmlFor = "amount">Amount Spent (In Rs.)</label> 
                <input className="ExpenseForm-input" type="number" id="amount" name="amount" value={userInput.amount} onChange = {changeHandler}/>

                <label className = "ExpenseForm-label" htmlFor = "date">Date</label>
                <input className="ExpenseForm-input" type="date" id="date" name="date" value = {userInput.date} onChange = {changeHandler}/>

                <button className = "ExpenseForm-btn">Add Expense</button>
            </form>
        </div>
    )
}

export default ExpenseForm;