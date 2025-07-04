import Logo from '../assets/logo.svg';
import Search from '../assets/search.svg'
import { useState } from 'react';

export default function Navbar() {
    const [isNavbarBigClicked, setIsNavbarBigClicked] = useState(false)
    const [value, setValue] = useState('')

    const handleClick = () => {
        alert('Search clicked')
        setValue('')
    }
    const classForNavbar = isNavbarBigClicked ? 'lg:w-[40rem] md:w-96' : 'lg:w-96'

    return <>
        <div className="h-16 md:h-20 w-full bg-black border-b text-white flex align-center justify-between md:px-12 py-2 px-4 sticky top-0 z-10">

            <img src={Logo} alt="logo" className="h-6 my-auto md:h-12" />
            <form action="" className='my-auto relative'>
                <input
                    type="text"
                    className={`my-auto flex h-9 md:h-12 w-44 md:w-72 focus:ring-2 focus:ring-indigo-500 rounded-md border-2 border-indigo-500  focus:border-blue-400 outline-none  bg-transparent px-3 py-1 md:text-base text-sm transition-all duration-300 ease-in-out ${classForNavbar} `}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onClick={() => setIsNavbarBigClicked(true)}
                    onBlur={() => setIsNavbarBigClicked(false)}
                    aria-label='search subject'
                    placeholder='Search Subject' />
                <img
                    src={Search}
                    alt="search"
                    className='absolute md:top-3 right-2 top-1.75 cursor-pointer '
                    aria-label='search'
                    onClick={handleClick} />
            </form>
        </div>
    </>
}