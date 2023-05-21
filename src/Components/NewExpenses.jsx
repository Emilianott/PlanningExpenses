import { useState } from 'react'
import { Msg } from './Msg'

export const NewExpenses = ({  budget,  setBudget, setIsValidExpenses }) => {
  const [msg, setMsg] = useState('')

  const handleExpense = (e) => {
    e.preventDefault()
    if (!budget || budget < 0) {
      setMsg('Not a valid budget')
      return
    }
    setMsg('')

    setIsValidExpenses(true)
  }

  return (
    <div className='w-full flex items-center justify-center '>
      <form
        onSubmit={handleExpense}
        className='bg-white h-80 lg:w-2/6  sm:w-5/6 w-4/5 border border-black flex flex-col justify-center items-center rounded-lg shadow-lg '
        action=''>
        <div className=' flex flex-col justify-center items-center w-full'>
          <label className='text-3xl text-blue-500' htmlFor=''>
            Define Expenses
          </label>
          <input
            onChange={(e) => {
              setBudget(Number(e.target.value))
            }}
            type='number'
            className='font-bold sm:text-2xl  mt-12  sm:w-2/3 text-center h-10 bg-gray-300 border border-gray-300 rounded-lg'
            placeholder='Add your Expenses'
          />
        </div>
        <input
          className='bg-blue-500 sm:text-2xl  text-white mt-3 font-bold sm:w-2/3 w-56 border h-9 border-black hover:bg-indigo-600 '
          type='submit'
          value='ADD'
        />
        {msg && <Msg type="text-red-700 sm:text-1xl  mt-5 border-l-8 border-red-700  w-2/3 flex font-[800] justify-center items-center">{msg}</Msg>}
      </form>
    </div>
  )
}
