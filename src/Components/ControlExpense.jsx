

export const ControlExpense = ({expenses}) => {
    const FormaterCurrent =(amount)=>{
        return amount.toLocaleString(`en-US`,{
            style:"currency",
            currency:"USD"
        })


    }
  return (
    <div className="absolute w-5/6 md:w-2/5 bg-white border border-black top-36 h-auto flex">
        
        <div className="w-1/2 p-8">
            <p>Grafica</p>
        </div>
        <div className="w-1/2 p-8">
            <p className="text-lg font-bold"><span className="text-blue-700">Budget: </span> {FormaterCurrent( expenses)} </p>
            <p className="text-lg font-bold"><span className="text-blue-700">Available:  </span>{FormaterCurrent(0)}</p>
            <p className="text-lg font-bold"><span className="text-blue-700">Used:  </span>{FormaterCurrent(0)}</p>
        </div>
    </div>
  )
}
