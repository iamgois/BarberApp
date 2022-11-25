import { BrowserRouter } from 'react-router-dom'

import Routes from "./Routes"

function App() {
  return (
    <div className='bg-[#1A1A1A] h-screen w-screen flex flex-col items-center overflow-hidden'>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    </div>
  )
}

export default App
