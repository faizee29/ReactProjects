import { useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'

import './App.css';

// Components
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import ExpenseFilter from './components/ExpenseFilter';

export const categories=['Utilities','Entertainment','Groceries']

const App =() =>{

  const originalExp = [
    {id:1,description:'movie',amount:10,category:'Entertainment'},
    {id:2,description:'internet',amount:10,category:'Utilities'},
    {id:3,description:'PS4',amount:10,category:'Entertainment'},
    {id:4,description:'milk',amount:10,category:'Groceries'}
  ]
const [expenses,setExpenses]=useState(originalExp);
const [filteredExpenses,setFilteredExpenses] = useState(originalExp)

const [filterValue, setFilterValue] = useState('all');

const handleChangeFilter = (e) => {
  const selectedValue = e.target.value;
  setFilterValue(selectedValue);

  // Update the exp state based on the selected value
  if (selectedValue === 'all') {
    setFilteredExpenses(expenses);
  } else {
    setFilteredExpenses(expenses.filter(item => item.category === selectedValue));
  }
};

const submitHandler = (e) =>{
  const newExpense = {...e,id:uuidv4()};
  setExpenses([...expenses,newExpense]);

  if(filterValue === 'all' || filterValue === newExpense.category){
    setFilteredExpenses([...filteredExpenses,newExpense])
  }

}

const handleDeleteAll=()=>{
  setExpenses([])
  setFilteredExpenses([])
    }

  return (
    <div>
      <ExpenseForm handSubmit={submitHandler} handleDeleteAll={handleDeleteAll}/>
      <ExpenseFilter handleSelect={handleChangeFilter} />
      <ExpenseList handleDelete={(id)=>{setExpenses(expenses.filter(e=>e.id!==id)); setFilteredExpenses.filter(e=>e.id !== id)}} expenses={filteredExpenses}/>
    </div>
  );
}

export default App;


