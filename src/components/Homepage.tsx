import Navbar from './Navbar'
import Footer from './Footer'
// import { BackgroundLines } from './ui/Background-lines'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/Select"

export default function Homepage() {
  return (
    <>
      <Navbar />
      {/* <BackgroundLines className='h-[100dvh] w-full'> */}
      <div className='h-[100vh] bg-black w-full flex flex-col gap-4'>

        <h1 className=' text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold pt-12'>
          GetNotes
          <br />
          <span className='text-xl md:text-4xl text-neutral-400'>
            Get All Your Notes Here.
          </span>
        </h1>
        {/* <div className='flex justify-center items-center mt-8'>
          <a
            href='/login'
            className='bg-neutral-800 text-neutral-200 px-4 py-2 rounded-md hover:bg-neutral-700 transition duration-300'
          >
            Get Started
          </a>
        </div> */}
        <form action="" className='text-black border border-amber-50 w-fit mx-auto h-fit mt-16 rounded' >
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </form>

        {/* </BackgroundLines> */}
      </div>
      <Footer />
    </>
  )
}
