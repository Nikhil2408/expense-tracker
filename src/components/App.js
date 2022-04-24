import React, { useState } from "react";

import ExpenseForm from "./ExpenseFormComponent/ExpenseForm";
import Expenses from "./Expenses/Expenses";
// import TotalExpenseByYear from "./TotalExpense/TotalExpenseByYear";
import '../styles/App.css';


function App() {

  const [allExpenses, setAllExpenses] = useState({
    allExpenses : []
  });

  function addExpense(newExpense){
    setAllExpenses(function(currentState){
        return {
          allExpenses : [...currentState.allExpenses, newExpense]
        }
    });
  }

  return (
    <div className="App">
      <h1 className = "App-header">Expense Tracker</h1>
      <ExpenseForm addExpense = {addExpense}/>
      <Expenses allExpenses = {allExpenses.allExpenses}/>
      {/* <TotalExpenseByYear allExpenses = {filterExpenses.filterExpenses} /> */}
    </div>
  );
}


export default App;
