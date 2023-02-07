
import { ExpensesFilter } from './ExpensesFilter'
import { Card } from './../UI/Card'
import { useState } from "react"
import { ExpensesList } from "./ExpensesList"
import { ExpenseChart } from './ExpensesChart'
export const Expenses = ({ expenses }) => {
    const [filterYear, setFilterYear] = useState("2022");
    const selectYearHandle = (year) => {
        setFilterYear(year)
    }
    const filteredExpense = expenses.filter((ele) => {
        return ele.expenseDate.getFullYear().toString() === filterYear
    })
    return (
        <div>
            <ExpenseChart expenses={filteredExpense} />
            <ExpensesFilter filteredYear={filterYear} onSelectChange={selectYearHandle} />
            <Card className="expenses">
                <ExpensesList expenses={filteredExpense} />
            </Card>

        </div>

    )
}