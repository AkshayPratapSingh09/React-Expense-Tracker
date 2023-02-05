import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
	const { expenses,dispatch } = useContext(AppContext);

	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);
	const [selectedItem,setSelectedItem]=useState('')

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

	
	const handleOnClick = (id)=>{
		setSelectedItem(id)
	}
	const handleUpdateExpense= (e)=>{
		dispatch({
			type:'UPDATE_EXPENSE',
			payload:{
				id:selectedItem,
				name:e.target.value
			}
		})
	}
	const handleSubmitExpense = (e) => {
    e.preventDefault();
    setSelectedItem("");
  };
	return (
		<>
			<input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<ul class='list-group mt-3 mb-3'>
			
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
						category={expense.category}
						selectedItem={selectedItem}
						handleOnClick={handleOnClick}
						handleUpdateExpense={handleUpdateExpense}
						handleSubmitExpense={handleSubmitExpense}
					/>
				))}
			</ul>
		</>
	);
};

export default ExpenseList;
