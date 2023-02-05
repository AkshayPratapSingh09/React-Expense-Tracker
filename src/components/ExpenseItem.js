import React, { useContext } from "react";
import { TiDelete,TiPen } from "react-icons/ti";
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

console.log(props.selectedItem,'props')
  return (
    <li class="list-group-item d-flex justify-content-between">
      {props.selectedItem === props.id ? (
        <form onSubmit={props.handleSubmitExpense}>
          <input
            type="text"
            value={props.name}
            onChange={(e) => props.handleUpdateExpense(e)}
            autoFocus
            maxLength={30}
          />
        </form>
      ) : (
        <div
          style={{ width: "10rem" }}
          className="d-flex justify-content-between align-items-center"
        >
          <span>{props.name}</span>
          <TiPen
            role="button"
            onClick={() => props.handleOnClick(props?.id)}
          ></TiPen>
        </div>
      )}

      <div>
        <Badge bg="primary">₹{props.cost}</Badge>
        <Badge bg="dark">{props.category}</Badge>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;
