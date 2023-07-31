import React from 'react'
import { categories } from '../App'

const ExpenseFilter=({handleSelect})=> {
  return (
    <div className="mb-5">
        <select onChange={(e)=>handleSelect(e.target.value)} className='form-select'>
            <option value="all">All Categories</option>
            {categories.map(category=><option key={category} value={category}>{category}</option>)}
        </select>
    </div>
  )
}

export default ExpenseFilter