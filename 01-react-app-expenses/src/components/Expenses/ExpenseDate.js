import './ExpenseDate.css';

import React from 'react';

const formatDateToString = (date, options) => {
  return date.toLocaleString('en-US', options);
};

const ExpenseDate = (props) => {
  const day = formatDateToString(props.date, { day: '2-digit' });
  const month = formatDateToString(props.date, { month: 'long' });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
};

export default ExpenseDate;
