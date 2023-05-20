import { useState } from 'react'
import { Header } from './Components/Header'
import  newExpense from "./assets/nuevo-gasto.svg"
import { Modal } from './Components/Modal'
function App() {
  const [expenses, setExpenses] = useState(0)
  const [isValidExpenses, setIsValidExpenses] = useState(false)
  const [modal, setModal] = useState(false)
  const handleNewExpenses=()=>{
    setModal(true)
  }

  return (
    <div>
      <Header expenses={expenses} 
      setExpenses={setExpenses} 
      isValidExpenses={isValidExpenses}
      setIsValidExpenses={  setIsValidExpenses}
      />
      {
        isValidExpenses && (

          <div className='w-16 absolute sm:bottom-16 bottom-5  sm:right-16 right-5 '>
            <img 
              src={newExpense} 
              onClick={handleNewExpenses}
              alt="New Expense" />
              </div>
          )
      }
      {
        modal && <Modal setModal={setModal}/>
      }


    </div>
  )
}

export default App
