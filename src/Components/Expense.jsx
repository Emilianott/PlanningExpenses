import { formatDate } from '../Helpers'
import Food from '../assets/icono_comida.svg'
import House from '../assets/icono_casa.svg'
import Micelaneuos from '../assets/icono_ocio.svg'
import Health from '../assets/icono_salud.svg'
import Savings from '../assets/icono_ahorro.svg'
import Subscriptions from '../assets/icono_suscripciones.svg'

const dicIcons = {
  Food,
  House,
  Micelaneuos,
  Health,
  Savings,
  Subscriptions,
}

export const Expense = ({ exp }) => {
  const { name, amount, category, id, date } = exp

  return (
    <div className='border w-full px-5  items-center flex pr-2 shadow-lg border-white '>
      <div className='w-5/6 flex'>
        <img src={dicIcons[category]} alt={category} className='w-16' />

        <div className=' w-full gap-1 h-auto flex flex-col pl-5 pb-2'>
          <h2 className='text-blue-600 '>Expenses</h2>
          <p className='font-bold text-sm text-gray-600'>{category}</p>
          <p className='font-bold text-sm text-gray-600'>{name}</p>
          <span className='text-sm  text-gray-600 mt-2'>
            Agregado el: {formatDate(date)}
          </span>
        </div>
      </div>
      <p className='font-bold'>${amount}</p>
    </div>
  )
}
