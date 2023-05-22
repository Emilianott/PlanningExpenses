import { Expense } from './Expense'

export const ExpenseList = ({
    expense,
    setEditExpense,
    deleteExpense,
    filter,
    expenseFilter,
}) => {
    return (
        <div className='w-full flex justify-center items-center flex-col gap-8 h-full  '>
            <h2 className='text-indigo-500 font-bold text-1xl sm:text-2xl'>
                {filter
                    ? 'Filtered Expenses'
                    : expense.length
                    ? 'Expenses'
                    : 'There is not expenses'}
            </h2>

            {filter
                ? expenseFilter.map((exp) => (
                      <Expense
                          deleteExpense={deleteExpense}
                          setEditExpense={setEditExpense}
                          key={exp.id}
                          exp={exp}
                      />
                  ))
                : expense.map((exp) => (
                      <Expense
                          deleteExpense={deleteExpense}
                          setEditExpense={setEditExpense}
                          key={exp.id}
                          exp={exp}
                      />
                  ))}
        </div>
    )
}
