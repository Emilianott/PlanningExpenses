import { formatDate } from '../Helpers'
import Food from '../assets/icono_comida.svg'
import House from '../assets/icono_casa.svg'
import Miscellaneous from '../assets/icono_ocio.svg'
import Health from '../assets/icono_salud.svg'
import Savings from '../assets/icono_ahorro.svg'
import Subscriptions from '../assets/icono_suscripciones.svg'
import Delete from '../assets/icon__alternate_Trash_.svg'
import Pen from '../assets/icon__Pen_.svg'

const dicIcons = {
    Food,
    House,
    Miscellaneous,
    Health,
    Savings,
    Subscriptions,
}

export const Expense = ({ exp, setEditExpense, deleteExpense }) => {
    const { name, amount, category, id, date } = exp

    return (
        <div className='border w-full sm:w-1/2 px-5  items-center flex pr-2 shadow-2xl border-white '>
            <div className='w-4/5 flex'>
                <img
                    src={dicIcons[category]}
                    alt={category}
                    className='w-16'
                />

                <div className=' w-full gap-1 h-auto flex flex-col pl-5 pb-2'>
                    <h2 className='text-blue-600 '>Expenses</h2>
                    <p className='font-bold text-sm text-gray-600'>
                        {category}
                    </p>
                    <p className='font-bold text-sm text-gray-600'>{name}</p>
                    <span className='text-sm  text-gray-600 mt-2'>
                        Created date : {formatDate(date)}
                    </span>
                </div>
            </div>
            <p className='font-bold'>${amount}</p>
            <div className='flex flex-col w-1/2 items-end gap-8 pr-5'>
                <img
                    src={Delete}
                    alt='close'
                    className='w-5'
                    onClick={() => deleteExpense(id)}
                />
                <img
                    src={Pen}
                    alt='close'
                    className='w-5'
                    onClick={() => setEditExpense(exp)}
                />
            </div>
        </div>
    )
}
