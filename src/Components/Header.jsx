import { NewExpenses } from './newExpenses'

export const Header = ({ expenses, setExpenses }) => {
  console.log(expenses)
  return (
    <header className='h-80 w-full border border-black flex flex-col items-center justify-center pt-56 bg-blue-500 '>
      <h1 className=' sm:text-5xl text-4xl text-white'>Planning Expenses</h1>
      <NewExpenses expenses={expenses} setExpenses={setExpenses} />
    </header>
  )
}
