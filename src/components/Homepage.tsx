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
        <div>

          <form action="" className='text-blacks w-full flex justify-center h-fit mt-16 rounded' >
            <Select>
              <SelectTrigger className="w-[90%] md:w-[40%]">
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
          <form action="" className='text-blacks w-full flex justify-center h-fit mt-6 rounded' >
            <Select>
              <SelectTrigger className="w-[90%] md:w-[40%]">
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
        </div>

        {/* </BackgroundLines> */}
      </div>
      <Footer />
    </>
  )
}
