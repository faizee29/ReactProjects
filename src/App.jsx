import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import ExpenseFilter from './components/ExpenseFilter';
import { v4 as uuidv4 } from 'uuid'

export const categories=['Utilities','Entertainment','Groceries']
function App() {
  const handleDeleteAll=()=>{
setExpenses([])
  }
  // const [test,setTest]=useState()
const [expenses,setExpenses]=useState([
  {id:1,description:'movie',amount:10,category:'Entertainment'},
    {id:2,description:'internet',amount:10,category:'Utilities'},
    {id:3,description:'PS4',amount:10,category:'Entertainment'},
    {id:4,description:'milk',amount:10,category:'Groceries'}
])
const[newExpenses,setNewExpenses]=useState(expenses)
const handleSelect=(category)=>{
  console.log(category);
  if (category==='all')setExpenses(expenses)
  else{
  setExpenses(expenses.filter((e)=>e.category===category))
// setNewExpenses(category.target.value)

}}
  return (
    <div>
      <ExpenseForm handSubmit={e=>setExpenses([...expenses,{...e,id:uuidv4()}])} handleDeleteAll={handleDeleteAll}/>
      <ExpenseFilter handleSelect={handleSelect} />
      <ExpenseList handleDelete={(id)=>setExpenses(expenses.filter(e=>e.id!==id))} expenses={expenses} newExpenses={newExpenses}/>
    </div>
  );
}

export default App;
