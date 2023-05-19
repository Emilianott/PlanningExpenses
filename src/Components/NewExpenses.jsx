export const NewExpenses = ({expenses, setExpenses}) => {
  console.log(expenses)
  return (
    <div className='w-full flex items-center justify-center mt-16'>
      <form
        className='bg-white h-80  sm:w-4/12 w-4/5 border border-black flex flex-col justify-center items-center rounded-lg shadow-lg p-6'
        action=''>
        <div className=' flex flex-col justify-center items-center w-full'>
          <label className='text-3xl text-blue-500' htmlFor=''>
            Define Expenses
          </label>
          <input
            onChange={(e)=>{setExpenses(e.target.value)}}
            type='text'
            className='font-bold sm:text-2xl  mt-12 w-2/3 text-center h-8 bg-gray-300 border border-gray-300 rounded-lg'
            placeholder='Add your Expenses'
            
            
          />
        </div>
        <input
          className='bg-blue-500 sm:text-2xl  text-white mt-3 font-bold w-2/3 border h-9 border-black '
          type='submit'
          value='ADD'
        />
      </form>
    </div>
  )
}
