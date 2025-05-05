import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-[1280px] w-full h-screen mx-auto p-8 text-center flex flex-col items-center justify-center">
      <div className="flex gap-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-24 p-6" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 p-6 animate-[spin_20s_linear_infinite]" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold mt-1 mb-8">Vite + React</h1>

      <div className="">
        <Button
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>

        <p className="text-gray-500 mt-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
