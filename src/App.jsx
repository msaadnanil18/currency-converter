import { useState } from 'react'
import './App.css'
import UseCurrencyInfo from './hook/UseCurrencyInfo'
import { Button, Card, Row, Col } from 'antd'
import InputBox from './components/InputBox'

function App() {
const [form , setForm] = useState("usd")
const [convertedAmount, setConvertedAmount] = useState(0)
const [amount, setAmount] = useState(0)
const [to, setTo] = useState("inr")
const currencyInfo = UseCurrencyInfo(form)


const options = Object.keys(currencyInfo)


const convert = () => {
  setConvertedAmount(amount * currencyInfo[to])
}
return (
    <>
    <Row>
      <Col span={8} ></Col>
      <Col sm={24} lg={8} >
     
     <Card
     title="Currency converter"
     hoverable
     className='mt-20'
     >
        <form 
        onSubmit={(e) => {
          e.preventDefault
          
        }}
        >
          <Row>
          <Col sm={24} lg={24}>
          <InputBox 
          label={to}
           amount={amount}
          currncyOptions={options}
          onCurrencyChange={setForm}
          selectCurrency={form}
          onAmountChange={setAmount}
          />
          </Col>
          <Col sm={24}  lg={24} >
         <InputBox 
          label={to}
          amount={convertedAmount}
          currncyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          amountDisable
          />
          </Col>
          <Col className='mt-3' sm={24}  lg={24} >
          <Button className='bg-sky-400'  onClick={convert}  type="primary" >convert</Button>
          </Col>
          </Row>
        </form>
     </Card>
     </Col>
     <Col span={8} ></Col>
     </Row>
    </>
  )
}

export default App
