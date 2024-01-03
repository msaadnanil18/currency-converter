import React , {useId, useState} from 'react'
import { Button, Card, Input, Select, Space  } from 'antd'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currncyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable= false,
    className="",

}) {

    const amountInputId = useId()
    // const[options, setOptions] = useState([])

    // const GetOptions = () => {
    //   currncyOptions.map((optio) => setOptions(optio) )
    // }
   
    // GetOptions()
    
  return (
    <>
      <label htmlFor={amountInputId}>
        {label}
      </label>
     <input
      id={amountInputId}
      type='number' 
      placeholder="amount"
      disabled= {amountDisable}
      value={amount}
      onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}      
     />

  <Select
     value={selectCurrency}
      style={{ width: 120 }}
      onChange={onAmountChange}
      disabled = {currencyDisable}
      options={currncyOptions.map((option) => ({ label: option, value: option }))}
    
     />
       

    </>
  )
}

export default InputBox
