import { useState } from 'react'
import { Header } from './Components/Header'


function App() {
  const [expenses, setExpenses] = useState(0)
 
  

  return (
    <div>
      <Header expenses={expenses} setExpenses={setExpenses} />
    </div>
  )
}

export default App
