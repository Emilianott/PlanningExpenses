import { useState } from 'react'
import closeBtn from '../assets/cerrar.svg'

export const Modal = ({ setModal }) => {
  const [formInfo, setFormInfo] = useState({})

  const handleOnchange = (e) => {
    const { name, value } = e.target
    setFormInfo((prev) => ({
      ...prev,

      [name]: Number.isNaN(Number(value)) ? value : Number(value),
    }))
  }

  console.log(formInfo)

  return (
    <section className='absolute top-0 left-0 right-0 bottom-0 h-full w-full flex-col flex items-center border  bg-black opacity-[0.90] animate-fade-down'>
      <div className='w-full  flex justify-end px-10 py-5'>
        <img
          onClick={() => {
            setModal(false)
          }}
          className='sm:w-12 w-7 '
          src={closeBtn}
          alt='Close the website'
        />
      </div>
      <form
        className={`w-4/5 sm:w-1/3 h-auto flex items-center mt-10 md:w-2/4 sm:text-4xl trainsition ease-in duration-100 opacity-0 gap-10 flex-col animate-fade-in`}
        action=''>
        <legend className='text-white text-xl border-b-2 border-indigo-500  sm:pb-3 text-center  w-1/2 mt-5'>
          New Expense
        </legend>
        <div className='flex  sm:items-center  flex-col w-full gap-2'>
          <label
            className='ml-14 sm:ml-0 sm:items-start text-xl text-white '
            htmlFor='name'>
            Name Expense
          </label>
          <input
            onChange={handleOnchange}
            name='name'
            id='name'
            type='text'
            className='w-4/6 text-sm sm:ml-0 h-8 text-center rounded-lg ml-14'
            placeholder='Add the name of the Expense'
          />
        </div>
        <div className='flex  flex-col w-full gap-2 sm:items-center'>
          <label className='text-xl text-white sm:ml-0 ml-14' htmlFor='amount'>
            Amount
          </label>
          <input
            name='amount'
            id='amount'
            type='number'
            className='w-4/6 text-sm h-8 text-center rounded-lg sm:ml-0 ml-14'
            placeholder='Add the amount of the expense '
            onChange={handleOnchange}
          />
        </div>

        <div className='w-full flex  flex-col sm:items-center  gap-2'>
          <label
            className='text-white sm:ml-0 ml-14 text-xl'
            htmlFor='category'>
            Category
          </label>
          <select
            className='w-2/3 ml-14 sm:text-2xl sm:ml-0 rounded-lg'
            name=''
            id='category'>
            <option className=' text-sm sm:text-2xl h-8 text-center  ' value=''>
              -- Select
            </option>
            <option className=' text-sm h-8 text-center  ' value='Food'>
              Food
            </option>
            <option className=' text-sm h-8 text-center  ' value='House'>
              House
            </option>
            <option
              className=' text-sm h-8 text-center  '
              value='Miscellaneous'>
              Miscellaneous
            </option>
            <option className=' text-sm h-8 text-center  ' value='Health'>
              Health
            </option>
            <option className=' text-sm h-8 text-center  ' value='Savings'>
              Savings
            </option>
            <option className=' text-sm  h-8 text-center  ' value='Savings'>
              Subcriptions
            </option>
          </select>
        </div>
        <input
          type='submit'
          value='Add Expense'
          className='text-white border border-white sm:py-1 bg-indigo-500 px-16 py-2 mt-8 rounded-xl '
        />
      </form>
    </section>
  )
}
