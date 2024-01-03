import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseCurrencyInfo from './hook/UseCurrencyInfo'

function App() {
const [form , setForm] = useState("usd")

const currencyInfo = UseCurrencyInfo(form)

  return (
    <>
     <div className=' bg-slate-500 text-2xl font-bold rounded-2xl'>
      currency converter

      {/* https://github.com/hiteshchoudhary/chai-aur-react/blob/main/06currencyConvertor/src/hooks/useCurrencyInfo.js */}
     </div>
     <Card>
        <form 
        onSubmit={(e) => {
          e.preventDefault
          
        }}
        ></form>
     </Card>
    </>
  )
}

export default App
