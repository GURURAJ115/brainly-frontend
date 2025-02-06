// import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Button startIcon={<PlusIcon/>} variant={'primary'} size={'sm'} text={'like'} onClick={function (): void {
        throw new Error('Function not implemented.')
      }} ></Button>
      <Button variant={'primary'} size={'md'} text={'share'} onClick={function (): void {
        throw new Error('Function not implemented.')
      }} ></Button>
      <Button variant={'secondary'} size={'lg'} text={'subscribe'} onClick={function (): void {
        throw new Error('Function not implemented.')
      }} ></Button>

    </>
  )
}

export default App
