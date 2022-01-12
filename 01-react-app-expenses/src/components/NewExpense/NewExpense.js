import { useState } from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const [editing, setEditing] = useState(false);

	const saveExpenseDataHandler = (expenseData) => {
		props.onAddExpense({
			...expenseData,
			id: Math.random().toString(),
		});
	};

	const toggleEditingHandler = () => {
		setEditing((prevState) => {
			return !prevState;
		});
	};

	return (
		<div className='new-expense'>
			{!editing && <button onClick={toggleEditingHandler}>Add expense</button>}
			{editing && (
				<ExpenseForm
					onSaveExpense={saveExpenseDataHandler}
					onCancelExpense={toggleEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;