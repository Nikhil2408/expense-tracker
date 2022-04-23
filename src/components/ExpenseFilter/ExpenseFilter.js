import React, {useState} from "react";

import "../../styles/ExpenseFilter.css";

function ExpenseFilter(props){

    const [filterYear, setFilterYear] = useState("noYear");
    
    function changeHandler(eventObj){
        props.filterAllExpenses(eventObj.target.value);
        setFilterYear(eventObj.target.value);
    }

    return (
        <div className="ExpenseFilter">
            <h3 className = "ExpenseFilter-header">Filter Expenses By Year : </h3>
            <select className = "ExpenseFilter-select" name="yearFilter" value = {filterYear} onChange = {changeHandler}>
                <option value="noYear">--SELECT--</option>
                <option value="all">All</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;