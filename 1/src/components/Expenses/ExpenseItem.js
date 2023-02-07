import './ExpenseItem.css'
import { ExpenseDate } from './ExepnseDate'
import { Card } from './../UI/Card'
import { useState } from 'react'
export const ExpenseItem = ({ date, title, amount }) => {
    const [title_, setTitle_] = useState(title)
    const handleClick = () => {
        setTitle_("New")
    }
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                </div>
                <div className='expense-item__price'>${amount}</div>
            </Card>
        </li>
    )
}