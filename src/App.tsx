import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { BackgroundLines } from './components/ui/Background-lines'

function App() {

  return (
    <>

      <Navbar />
      <BackgroundLines className='h-[100dvh] w-full'>
        <h1 className="relative  text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
      </BackgroundLines>
      <Footer />
    </>
  )
}

export default App
