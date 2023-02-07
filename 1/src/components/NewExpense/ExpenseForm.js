import { useState } from "react"
import './ExpenseForm.css'
export const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
    const [formData, setFormData] = useState({ title: "", amount: "", date: "" })
    const titleChangeHandler = (event) => {
        // setFormData({ ...formData, title: event.target.value })

        // If we are depending on the previous state then we have to use the following meethod.
        // here we are passing an arrow function to the set method which accepts the previous state and we use that to update te state
        setFormData((prevState) => {
            return { ...prevState, title: event.target.value }
        })
    }
    const amountChangeHandler = (event) => {
        // setFormData({ ...formData, amount: event.target.value })
        setFormData((prevState) => {
            return { ...prevState, amount: event.target.value }
        })
    }
    const dateChangeHandler = (event) => {
        // setFormData({ ...formData, date: event.target.value })
        setFormData((prevState) => {
            return { ...prevState, date: event.target.value }
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const tempFormData = { expenseTitle: formData.title, expenseAmount: +formData.amount, expenseDate: new Date(formData.date) }
        onSaveExpenseData(tempFormData)
    }
    const handleCancel = () => {
        onCancel(false)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={formData.title} placeholder={"Enter the title"} type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={formData.amount} type="text" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={formData.date} type="date" min="2019-0101" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={handleCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}