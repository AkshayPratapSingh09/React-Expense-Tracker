import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

//Used Context for getting the form data
const AddExpenseForm = (props) => {
  const { dispatch } = useContext(AppContext);

 
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
	  category,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setName("");
    setCost("");
  };
console.log(category)
	//Real Component is here
  return (
    <form onSubmit={onSubmit}>
      <div class="row">
        <div class="col-sm col-lg-4">
          <label for="name">Name</label>
          <input
          placeholder="Enter Expense Name"
            required="required"
            type="text"
            class="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div class="col-sm col-lg-4">
          <label for="cost">Cost</label>
          <input
          placeholder="Eg. 20, 30, 1000"
            required="required"
            type="number"
            class="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
      </div>

      <div class="mt-3 col-sm col-lg-4">
        <select class="form-select" aria-label="Default select example" required='required' id='category' value={category} onChange={(event) => setCategory(event.target.value)}>
          <option selected>Please Select the category</option>
          <option value="Food">Food</option>
          <option value="Housing">Housing</option>
          <option value="Transporation">Transporation</option>
          <option value="Health">Health</option>
          <option value="Credit Bill">Credit</option>
          <option value="Shopping">Shopping</option>
          <option value="Eletrcity">Eletrcity</option>
          <option value="Gas">Gas</option>
          <option value="Misc">Others</option>
        </select>
      </div>

      <div class="row mt-3">
        <div class="col-sm">
          <button type="submit" class="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
