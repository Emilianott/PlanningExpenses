import { ControlExpense } from './ControlExpense'
import { NewExpenses } from './NewExpenses'


export const Header = ({
  budget,
  setBudget,
  isValidExpenses,
  setIsValidExpenses,
}) => {
  
  return (
    <header className='h-48 w-full border border-black flex flex-col items-center   bg-blue-500 '>
      <h1 className=' sm:text-5xl text-4xl text-white my-5'>Planning Expenses</h1>

      {isValidExpenses ?( <ControlExpense budget={budget}/>):
      <NewExpenses budget={budget} setBudget={setBudget} setIsValidExpenses={setIsValidExpenses}/>
      }
    </header>
  )
}
