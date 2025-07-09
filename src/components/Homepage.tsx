import Navbar from './Navbar'
import Footer from './Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'
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

  const sems = [
    { id: 1, name: "Semester 1" },
    { id: 2, name: "Semester 2" },
    { id: 3, name: "Semester 3" },
    { id: 4, name: "Semester 4" },
    { id: 5, name: "Semester 5" },
    { id: 6, name: "Semester 6" },
    { id: 7, name: "Semester 7" },
    { id: 8, name: "Semester 8" }
  ]
  const branches = [
    { id: 1, name: "Computer Science" },
    { id: 2, name: "Information Technology" },
    { id: 3, name: "Electronics and Communication" },
    { id: 4, name: "Electrical Engineering" },
    { id: 5, name: "Mechanical Engineering" },
    { id: 6, name: "Civil Engineering" },
    { id: 7, name: "AI&ML" },
    { id: 8, name: "Biotechnology" },
    { id: 9, name: "AI&DS" }
  ]

  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<string | null>(null);
  return (
    <>
      <Navbar />
      {/* <BackgroundLines className='h-[100dvh] w-full'> */}
      <div className='h-[calc(100vh-64px)] flex gap-4  md:h-[calc(100vh - 80px)] bg-black w-full items-center'>
        <motion.div className='w-full flex flex-col justify-center items-center gap-4 '
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0 }}>
          <h1 className=' text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold'>
            GetNotes
            <br />
            <span className='text-xl md:text-4xl text-neutral-400'>
              Get All Your Notes Here.
            </span>
          </h1>
          <div className='w-full flex flex-col pt-4 items-center text-white/80 gap-6'>

            <Select>
              <SelectTrigger className="w-[90%] md:w-[40%]">
                <SelectValue placeholder="Select your Branch" />
              </SelectTrigger>
              <SelectContent className='md:max-h-60 overflow-scroll'>
                <SelectGroup>
                  <SelectLabel>Branch</SelectLabel>
                  {branches.map((branch) => (
                    <SelectItem key={branch.id} value={branch.name}
                      onClick={(() => {
                        setSelectedBranch(branch.name)
                        // setSelectedSemester(null)
                      })}>
                      {branch.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[90%] md:w-[40%]">
                <SelectValue placeholder="Select your semester" />
              </SelectTrigger>
              <SelectContent className='md:max-h-60 overflow-scroll'>
                <SelectGroup>
                  <SelectLabel>Semester</SelectLabel>
                  {
                    sems.map((sem) => (
                      <SelectItem key={sem.id} value={sem.name} onClick={() => {
                        setSelectedSemester(sem.name)
                      }}>
                        {sem.name}
                      </SelectItem>
                    ))
                  }
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className='w-[40%] flex justify-end'>

              <button className='px-6 bg-[#3f3fffbf] rounded-sm py-2 cursor-pointer '>Search</button>
            </div>
          </div>


          {/* </BackgroundLines> */}
        </motion.div>
      </div>

      <Footer />
    </>
  )
}
