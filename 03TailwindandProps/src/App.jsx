import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "pranjal",
    age: 21
  }
  let Arr=[1,2,3];

  return (
    <>
      <h1 className="bg-green-500 p-3 rounded-2xl text-3xl font-bold underline">
        Hello world!
      </h1>
      <Card username="chaiaurcode" btnText="click me"/>
      <Card username="Pranjal" btnText="visit me"/>
    </>
  )
}

export default App
