import { useState } from 'react'
import './App.css'
import Index from './Components/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index URL = {'https://picsum.photos/v2/list'} limit={'10'} page={'1'}/>
    </>
  )
}

export default App
