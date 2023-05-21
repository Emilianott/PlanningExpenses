import { Expense } from "./Expense"


export const ExpenseList = ({expense}) => {
    
  return (
    

    <div className="w-full flex justify-center items-center flex-col gap-8 h-full ">
        <h2 className="text-indigo-500 font-bold text-1xl sm:text-2xl">{expense.length ? "Expenses": "There is not expenses"}</h2>
        {expense.map(exp=> <Expense key={exp.id} exp={exp} />
        )}
    </div>
        
  )
}
