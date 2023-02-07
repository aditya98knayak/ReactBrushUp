import './ExpenseDate.css'
export const ExpenseDate = ({ date }) => {
    const month = date.toLocaleString('en-us', { month: 'long' })
    const day = date.toLocaleString('en-us', { day: '2-digit' })
    const year = date.toLocaleString('en-us', { year: 'numeric' })
    return (
        <div className="expense-date">
            <div className="expense-date__day">
                {day}
            </div>
            <div className="expense-date__month">
                {month}
            </div>
            <div className="expense-date__year">
                {year}
            </div>
        </div>
    )
}