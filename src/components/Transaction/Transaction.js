import React, { useState } from "react";
import styles from "./Transaction.module.css";
import EditImage from "../../images/edit.png";
import DeleteImage from "../../images/trash-bin.png";

const Transaction = ({ expense, changeExpenseToUpdate, deleteExpense, index }) => {
  const [currentHoverIndex, setCurrentHoverIndex] = useState(null); //index value
  // console.log('current ', currentHoverIndex ); ----> prints index value of particulr expense from the list

  return (
    <li
      key={expense.id}
      className={`${styles.transaction} ${
        expense.amount > 0 ? styles.profit : styles.loss
      }`}
      onMouseOver={() => {
        setCurrentHoverIndex(index);
      }}
      onMouseLeave={() => {
        setCurrentHoverIndex(null);
      }}
    >
      {/* text div */}
      <div>{expense.text}</div>

      {/* amount div */}
      <div className={styles.transactionOptions}> 
        <div
          className={`${styles.amount} ${
            currentHoverIndex === index && styles.movePrice
          }`}
        >
          ${expense.amount}
        </div>


        {/* open this when we HOVER */}
        <div
          className={`${styles.btnContainer} ${
            currentHoverIndex === index && styles.active
          }`}
        >
          {/* update icon */}
          <div
            className={styles.edit}
            onClick={() => {
              changeExpenseToUpdate(expense);
            }}
          >
            <img src={EditImage} height="100%" alt="Edit" />
          </div>
          {/* delete icon */}
          <div
            className={styles.delete}
            onClick={() => deleteExpense(expense.id)}
          >
            <img src={DeleteImage} height="100%" alt="Delete" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Transaction;
