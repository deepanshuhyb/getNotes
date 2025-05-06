import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { BackgroundLines } from './components/ui/Background-lines'

function App() {

  return (
    <>

      <Navbar />
      <BackgroundLines className='h-[100dvh] w-full'>
        <h1 className="flex text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          GetNotes
          <span className="text-2xl md:text-4xl text-neutral-400"> - Get All Your Notes Here.</span>
        </h1>
      </BackgroundLines>
      <Footer />
    </>
  )
}

export default App
