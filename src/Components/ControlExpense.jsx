import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export const ControlExpense = ({
    budget,
    expense,
    setBudget,
    setIsValidExpenses,
    setExpense
    
}) => {
    const [available, setAvailable] = useState(0)
    const [wasted, setWasted] = useState(0)
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        const totalWasted = expense.reduce(
            (total, waste) => waste.amount + total,
            0
        )
        setWasted(totalWasted)
        const totalAvailable = budget - totalWasted
        setAvailable(totalAvailable)

        const newPercentage = (
            ((budget - totalAvailable) / budget) *
            100
        ).toFixed(1)
        setTimeout(() => {
            setPercentage(newPercentage)
        }, 1200)
    }, [expense])

    const FormaterCurrent = (amount) => {
        return amount.toLocaleString(`en-US`, {
            style: 'currency',
            currency: 'USD',
        })
    }
    const resetApp=()=>{
        const results = confirm("¿Do you wish to reset the App")
        if(results){
            setExpense([])
            setBudget(0)
            setIsValidExpenses(false)
        }
    }

    return (
        <div className='sticky w-5/6 md:w-2/5 bg-white border border-black top-36 h-auto flex flex-col pt-5 sm:pt-0 justify-center items-center sm:gap-0 sm:flex-row gap-10'>
            <div className='w-1/3 flex justify-center sm:p-8 md:p-0 lg:p-5 '>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}% Spent `}
                    styles={buildStyles({
                        pathColor: percentage > 100 ? "#dc2626":"#3b82f6",
                        textColor: percentage > 100 ? "#dc2626":"#3b82f6",
                        textSize: '0.7rem',
                    })}
                />
            </div>

            <div className='w-full md:p-0 md:justify-center  md:pl-6 sm:p-8  flex sm:w-1/2  gap-2 sm:flex-col sm:pl-28 flex-wrap md:pt-2 justify-center'>
                <button onClick={resetApp} className='w-full border border-red-400 bg-red-900 text-white '>
                    Reset App
                </button>
                <p className='text-lg font-bold'>
                    <span className='text-blue-700'>Budget: </span>{' '}
                    {FormaterCurrent(budget)}{' '}
                </p>
                <p
                    className={`${
                        available < 0 ? 'text-red-600' : 'text-black'
                    } text-lg font-bold w-full sm:flex text-center sm:w-0`}>
                    <span
                        className={`${
                            available < 0 ? 'text-red-600' : 'text-blue-700'
                        }`}>
                        Available:{' '}
                    </span>
                    {FormaterCurrent(available)}
                </p>
                <p className='text-lg font-bold '>
                    <span className='text-blue-700'>Used: </span>
                    {FormaterCurrent(wasted)}
                </p>
            </div>
        </div>
    )
}
