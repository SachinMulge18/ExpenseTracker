import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(expense) {

  return (
  <li>
    <Card className="expense-item">
        <ExpenseDate date={expense.date}/>
      <div className="expense-item-description">         
        <h2> {expense.title} </h2>
      </div>
        <div className="expense-item_price"> ₹{expense.amount} </div>
    </Card>

  </li>
        
  );
}

export default ExpenseItem;




