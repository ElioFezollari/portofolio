import { useState } from 'react'
import Index from './Index'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index/>
    </>
  )
}

export default App
