
import { Expenses } from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense'
import { useState } from 'react';
const initExpenseData = [{
  expenseDate: new Date(2023, 2, 20),
  expenseTitle: "Icecream",
  expenseAmount: 100
},
{
  expenseDate: new Date(2022, 1, 10),
  expenseTitle: "Car Insurance",
  expenseAmount: 100
},
{
  expenseDate: new Date(2022, 12, 20),
  expenseTitle: "remote",
  expenseAmount: 5600
},
{
  expenseDate: new Date(2023, 10, 20),
  expenseTitle: "Bike Insurance",
  expenseAmount: 800
},
{
  expenseDate: new Date(2020, 10, 20),
  expenseTitle: "table Insurance",
  expenseAmount: 1000
},
{
  expenseDate: new Date(2020, 10, 20),
  expenseTitle: "life Insurance",
  expenseAmount: 550
}]
function App() {
  const [data, setData] = useState(initExpenseData);

  const onAddExpenseDataHandler = (addData) => {
    setData((prevState) => {
      return [addData, ...prevState]
    })
  }
  return (
    <div>
      <NewExpense onAddExpenseData={onAddExpenseDataHandler} />
      <Expenses expenses={data} />
    </div>
  );
}

export default App;
