import React, { useState } from "react";

import ExpenseForm from "./ExpenseFormComponent/ExpenseForm";
import Expenses from "./Expenses/Expenses";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import TotalExpenseByYear from "./TotalExpense/TotalExpenseByYear";
import '../styles/App.css';


function App() {

  const [allExpenses, setAllExpenses] = useState({
    allExpenses : []
  });
  const [filterExpenses, setFilterExpenses] = useState({
    filterExpenses : []
  });

  function addExpense(newExpense){
    setAllExpenses(function(currentState){
        return {
          allExpenses : [...currentState.allExpenses, newExpense]
        }
    });
  }

  function filterAllExpenses(filterYear){
    let filtered;
    if(filterYear !== "noYear" && filterYear !== "all"){
        filtered = allExpenses.allExpenses.filter(expense => {
          return parseInt(filterYear) === expense.date.getFullYear();
        });
    }
    else if(filterYear === "all"){
      filtered = allExpenses.allExpenses;
    }
    else{
      filtered = [];
    }
    setFilterExpenses({
      filterExpenses: filtered
    });
  }

  return (
    <div className="App">
      <h1 className = "App-header">Expense Tracker</h1>
      <ExpenseForm addExpense = {addExpense}/>
      <ExpenseFilter filterAllExpenses = {filterAllExpenses}/>
      <Expenses allExpenses = {filterExpenses.filterExpenses}/>
      <TotalExpenseByYear allExpenses = {filterExpenses.filterExpenses} />
    </div>
  );
}


export default App;
