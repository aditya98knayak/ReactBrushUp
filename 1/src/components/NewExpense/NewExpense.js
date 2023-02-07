import { useState } from "react"
import { ExpenseForm } from './ExpenseForm'
import './NewExpense.css'

export const NewExpense = ({ onAddExpenseData }) => {
    const [isEditing, setIsEditing] = useState(false)

    const onSaveExpenseSaveHandler = (submittedExpenseData) => {
        const expData = { ...submittedExpenseData, id: Math.random().toString() }
        onAddExpenseData(expData)
        setIsEditing(false)
    }

    const handleClick = () => {
        setIsEditing(true)
    }
    const handleEditing = () => {
        setIsEditing(false)
    }

    return (<div className='new-expense'>
        {!isEditing && <button onClick={handleClick}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseSaveHandler} onCancel={handleEditing} />}
    </div>

    )
}