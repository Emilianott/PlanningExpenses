import { useState,  } from 'react'
import { Header } from './Components/Header'
import { Modal } from './Components/Modal'
import { generatedId } from './Helpers'
import  newExpense from "./assets/nuevo-gasto.svg"
import { ExpenseList } from './Components/ExpenseList'
function App() {
  const [budget, setBudget] = useState(0)
  const [isValidExpenses, setIsValidExpenses] = useState(false)
  const [modal, setModal] = useState(false)
  const [expense, setExpense] = useState([])
  const handleNewExpenses=()=>{
    setModal(true)
  }
  const saveExpense=wasted=>{
    wasted.id = generatedId()
    wasted.date= Date.now()
    setExpense([...expense, wasted])
  }

  return (
    <div className="h-screen overflow-auto">
      <Header budget={budget} 
      setBudget={setBudget} 
      isValidExpenses={isValidExpenses}
      setIsValidExpenses={  setIsValidExpenses}
      />
      {
        isValidExpenses && (
          <>

            <main className='mt-56 sm:mt-44 md:mt-48 w-full flex justify-center items-center'>
              <ExpenseList
              expense={expense}
              />
            </main>
          <div className='w-16 absolute sm:bottom-16 bottom-5   sm:right-16 right-5 '>
            <img 
              src={newExpense} 
              onClick={handleNewExpenses}
              alt="New Expense" />
              </div>
              </>
          )
      }
      {
        modal && <Modal saveExpense={saveExpense} setModal={setModal}/>
      }


    </div>
  )
}

export default App
