import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { Badge } from 'react-bootstrap';

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const Update = () =>{
	console.log('Working')
  }
console.log(props,'props')
  return (
    <li class="list-group-item d-flex justify-content-between">
      <button onClick={Update}>{props.name}</button>
      <div>
        <Badge bg="primary">₹{props.cost}</Badge>
        <Badge bg="primary">{props.category}</Badge>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;
