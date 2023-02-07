import { Chart } from "./../Chart/Chart"
export const ExpenseChart = props => {
    console.log(props.expenses)
    const chartDPs = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Apr", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Aug", value: 0 },
        { label: "Sept", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dec", value: 0 },
    ];
    for (const exp in props.expenses) {
        console.log("🚀 ~ file: ExpensesChart.js:19 ~ ExpenseChart ~ exp", exp)
        const expMonth = props.expenses[exp].expenseDate.getMonth();
        chartDPs[expMonth].value += props.expenses[exp].expenseAmount
    }
    return <Chart dataPoints={chartDPs} />
}