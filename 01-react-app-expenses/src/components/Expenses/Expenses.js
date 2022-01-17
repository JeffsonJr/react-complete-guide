import './Expenses.css';

import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
	const [year, setYear] = useState('2022');

	const filterChangeHandler = (selectedYear) => {
		setYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === year;
	});

	return (
		<li>
			<Card className='expenses'>
				<ExpenseFilter
					selectedYear={year}
					onFilterChange={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</li>
	);
};

export default Expenses;
