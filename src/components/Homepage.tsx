import Navbar from './Navbar'
import Footer from './Footer'
import { BackgroundLines } from './ui/Background-lines'

export default function Homepage () {
  return (
    <>
      <Navbar />
      <BackgroundLines className='h-[100dvh] w-full'>
        <h1 className=' text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold pt-12'>
          GetNotes
          <br />
          <span className='text-2xl md:text-4xl text-neutral-400'>
            Get All Your Notes Here.
          </span>
        </h1>
      </BackgroundLines>
      <Footer />
    </>
  )
}
