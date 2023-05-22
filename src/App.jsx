import { useEffect, useState } from 'react'
import { Header } from './Components/Header'
import { Modal } from './Components/Modal'
import { generatedId } from './Helpers'
import newExpense from './assets/nuevo-gasto.svg'
import { ExpenseList } from './Components/ExpenseList'
import { Filter } from './Components/Filter'
function App() {
    const [expense, setExpense] = useState([
      ...(JSON.parse(localStorage.getItem("expense")) ?? [])
  ])
    
    const [budget, setBudget] = useState(
        Number(localStorage.getItem('budget')) ?? 0
    )
    const [filter, setFilter] = useState('')
    const [expenseFilter, setExpenseFilter] = useState([])
    const [isValidExpenses, setIsValidExpenses] = useState(false)
    const [modal, setModal] = useState(false)
    const [editExpense, setEditExpense] = useState({})
    const handleNewExpenses = () => {
        setModal(true)
    }
    const handleModal = () => {
        setModal(false)
        setEditExpense({})
    }

    useEffect(() => {
        if (Object.keys(editExpense).length > 0) {
            setModal(true)
        }
    }, [editExpense])

    useEffect(() => {
        localStorage.setItem('budget', budget ?? 0)
    }, [budget])
    useEffect(() => {
        localStorage.setItem('expense', JSON.stringify(expense) ?? [])
    }, [expense])
    useEffect(() => {
        const budgetLs = Number(localStorage.getItem('budget')) ?? 0
        if (budgetLs > 0) {
            setIsValidExpenses(true)
        }
    }, [])
    useEffect(() => {
        if (filter) {
            const expenFilter = expense.filter(
                (expe) => expe.category === filter
            )
            setExpenseFilter(expenFilter)
        }
    }, [filter])

    const saveExpense = (wasted) => {
        if (wasted.id) {
            //update
            const wasteUpdate = expense.map((expenseState) =>
                expenseState.id === wasted.id ? wasted : expenseState
            )
            setExpense(wasteUpdate)
        } else {
            //create new

            wasted.id = generatedId()
            wasted.date = Date.now()
            setExpense([...expense, wasted])
        }
    }
    const deleteExpense = (id) => {
        const deleteSelect = expense.filter((del) => del.id !== id)
        setExpense(deleteSelect)
    }

    return (
        <div className='h-screen overflow-auto '>
            <Header
                budget={budget}
                expense={expense}
                setBudget={setBudget}
                isValidExpenses={isValidExpenses}
                setIsValidExpenses={setIsValidExpenses}
                setExpense={setExpense}
            />
            {isValidExpenses && (
                <>
                    <main className='mt-56 sm:mt-44 md:mt-48 w-full flex justify-center items-center flex-col'>
                        <Filter
                            filter={filter}
                            setFilter={setFilter}
                        />
                        <ExpenseList
                            deleteExpense={deleteExpense}
                            setEditExpense={setEditExpense}
                            expense={expense}
                            filter={filter}
                            expenseFilter={expenseFilter}
                        />
                    </main>
                    <div className='sm:w-16 absolute sm:bottom-16 bottom-5 w-8  sm:right-16 right-5 '>
                        <img
                            src={newExpense}
                            onClick={handleNewExpenses}
                            alt='New Expense'
                        />
                    </div>
                </>
            )}
            {modal && (
                <Modal
                    handleModal={handleModal}
                    editExpense={editExpense}
                    saveExpense={saveExpense}
                    setModal={setModal}
                />
            )}
        </div>
    )
}

export default App
