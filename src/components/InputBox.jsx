import React , {useId} from 'react'
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
      onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
      disabled = {currencyDisable}
      options={[
        <div>{currncyOptions.map((currency) => {})}</div>
      ]}
     
    >
        {currncyOptions.map((currency) => {})} 
        </Select>   

    </>
  )
}

export default InputBox
