import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseCurrencyInfo from './hook/UseCurrencyInfo'
import { Button, Card, Input, Select, Space  } from 'antd'
import InputBox from './components/InputBox'


function App() {
const [form , setForm] = useState("usd")
const [convertedAmount, setConvertedAmount] = useState(0)
const [amount, setAmount] = useState(0)
const [to, setTo] = useState("inr")
const currencyInfo = UseCurrencyInfo(form)
// console.log(currencyInfo)

const options = Object.keys(currencyInfo)
// console.log(options)

const convert = () => {
  setConvertedAmount(amount * currencyInfo[to])
}
//  const onAmountChange = (e) => {
 
  
//   setAmount(e.target.value)
//  }

 
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
        >
          <InputBox 
          label={to}
           amount={amount}
          currncyOptions={options}
          onCurrencyChange={(currency) => setForm(currency) }
          selectCurrency={form}
          onAmountChange={setAmount}
          />

          <InputBox 
          label={to}
           amount={convertedAmount}
          currncyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          amountDisable
          />
          <Button onClick={convert} type='primary' >convert</Button>
        </form>
     </Card>
    </>
  )
}

export default App
