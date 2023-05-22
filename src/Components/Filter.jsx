import { useState } from 'react'

export const Filter = ({ setFilter, filter }) => {
    return (
        <div className='w-full shadow-lg border-white  sm:w-1/2 px-5 h-24 mb-10 mt-16 sm:mt-0'>
            <form action=''>
                <div className='flex flex-col justify-center items-center'>
                    <label
                        htmlFor=''
                        className='sm:text-2xl font-bold text-indigo-600'>
                        Filters
                    </label>
                    <select
                        className='w-1/2 border-black border mt-3 rounded-lg bg-gray-300'
                        name=''
                        id=''
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}>
                        <option
                            className=' text-sm sm:text-1xl h-8 text-center  '
                            value=''>
                            -- All Expenses --
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
            </form>
        </div>
    )
}
