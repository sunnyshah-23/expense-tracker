import React from "react";
import ExpenseItem from "./Expenses/ExpenseItem";
import "./ExpensesList.css";
function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expense-list__fallback">Found No expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
