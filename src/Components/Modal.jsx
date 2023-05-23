import { useEffect, useState } from 'react'
import closeBtn from '../assets/cerrar.svg'
import { Msg } from './Msg'

export const Modal = ({ setModal, saveExpense, editExpense, handleModal }) => {
    const [warning, setWarning] = useState('')
    const [id, setId] = useState('')
    const [date, setDate] = useState('')
    const [formInfo, setFormInfo] = useState({
        name: '',
        amount: '',
        category: '',
    })

    useEffect(() => {
        if (Object.keys(editExpense).length > 0) {
            setFormInfo(editExpense)
            setId(editExpense.id)
            setDate(editExpense.date)
        }
    }, [editExpense])

    const handleOnchange = (e) => {
        const { name, value } = e.target
        setFormInfo((prev) => ({
            ...prev,

            [name]:
                value === ''
                    ? ''
                    : Number.isNaN(Number(value))
                    ? value
                    : Number(value),
        }))
    }
    const { name, amount, category } = formInfo
    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, amount, category } = formInfo

        if ([name, amount, category].includes('')) {
            setWarning('All fields are required')
            setTimeout(() => {
                setWarning('')
            }, 3000)
        } else {
            saveExpense({
                name,
                amount,
                category,
                id,
                date,
            })
            setModal(false)
        }
    }

    return (
        <section className='absolute top-0 left-0 right-0 bottom-0 w-full h-full flex-col flex items-center border  bg-black opacity-[0.90] animate-fade-down'>
            <div className='w-full  flex justify-end px-5 md:p-10 py-5  '>
                <img
                    onClick={handleModal}
                    className='sm:w-12 w-7 hover:scale-[0.8]'
                    src={closeBtn}
                    alt='Close the website'
                />
            </div>
            <form
                className={` w-4/5 pb-10 sm:w-1/3 h-auto flex items-center border border-indigo-500 bg-[#03033d] mt-10 md:w-2/4 sm:text-4xl trainsition ease-in duration-100 opacity-0 gap-10 flex-col animate-fade-in`}
                action=''
                onSubmit={handleSubmit}>
                <legend className='text-white text-xl sm:text-4xl border-b-2 border-indigo-500  sm:pb-3 text-center  w-1/2 mt-5'>
                    {editExpense.id ? 'Edit Expense' : 'New Expense'}
                </legend>
                {warning && (
                    <Msg type='text-red-800 text-2xl border-red-600 px-4 py-2 border-l-2 bg-white'>
                        {warning}
                    </Msg>
                )}
                <div className='flex  sm:items-center  flex-col w-full gap-2 opacity-[1]'>
                    <label
                        className='ml-14 sm:ml-0 sm:items-start text-xl text-white '
                        htmlFor='name'>
                        Name Expense
                    </label>
                    <input
                        onChange={handleOnchange}
                        value={name}
                        name='name'
                        id='name'
                        type='text'
                        className='w-4/6 text-sm sm:ml-0 h-8 text-center rounded-lg ml-14'
                        placeholder='Add the name of the Expense'
                    />
                </div>
                <div className='flex  flex-col w-full gap-2 sm:items-center '>
                    <label
                        className='text-xl text-white sm:ml-0 ml-14'
                        htmlFor='amount'>
                        Amount
                    </label>
                    <input
                        value={amount}
                        name='amount'
                        id='amount'
                        type='number'
                        className='w-4/6 text-sm h-8 text-center rounded-lg sm:ml-0 ml-14 '
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
                        name='category'
                        id='category'
                        value={category}
                        onChange={handleOnchange}>
                        <option
                            className=' text-sm sm:text-2xl h-8 text-center  '
                            value=''>
                            -- Select --
                        </option>
                        <option
                            className=' text-sm h-8 text-center  '
                            value='Food'>
                            Food
                        </option>
                        <option
                            className=' text-sm h-8 text-center  '
                            value='House'>
                            House
                        </option>
                        <option
                            className=' text-sm h-8 text-center  '
                            value='Miscellaneous'>
                            Miscellaneous
                        </option>
                        <option
                            className=' text-sm h-8 text-center  '
                            value='Health'>
                            Health
                        </option>
                        <option
                            className=' text-sm h-8 text-center  '
                            value='Savings'>
                            Savings
                        </option>
                        <option
                            className=' text-sm  h-8 text-center  '
                            value='Subscriptions'>
                            Subscriptions
                        </option>
                    </select>
                </div>
                <input
                    type='submit'
                    value={editExpense.id ? 'Save Changes' : 'Add Expense'}
                    className='text-white border border-white sm:py-1 bg-indigo-500 sm:text-xl sm:px-16 px-8  mt-8 rounded-xl '
                />
            </form>
        </section>
    )
}
