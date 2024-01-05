import React , {useId} from 'react'
import { Row, Col, InputNumber, Select, Space  } from 'antd'

function InputBox({
    amount,
    onAmountChange,
    onCurrencyChange,
    currncyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable= false,
    

}) {

    const amountInputId = useId()
  
    
  return (
    <>
     <Row className=' space-y-3' >
      <Col span={12} >
     <InputNumber
     className='mt-2'
      id={amountInputId}
      placeholder="amount"
      disabled= {amountDisable}
      value={amount}
      onChange={(e) => onAmountChange && onAmountChange(e)}    
     />
    </Col>
    <Col span={12} >
  <Select
  className=' float-right'
     value={selectCurrency}
      style={{ width: 120 }}
      onChange={(e) => (onCurrencyChange(e))}
      disabled = {currencyDisable}
      options={currncyOptions.map((option) => ({ label: option, value: option }))}
     />
     </Col>
       </Row>

    </>
  )
}

export default InputBox
