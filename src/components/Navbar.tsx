import Logo from '../assets/logo.svg';
import Search from '../assets/search.svg'
import { useState } from 'react';

export default function Navbar() {
    const [value, setValue] = useState('')
    return <>
        <div className="h-16 md:h-20 w-full bg-black border-b text-white flex align-center justify-between md:px-12 py-2 px-4 sticky top-0 z-10">

            <img src={Logo} alt="logo" className="h-6 my-auto md:h-12" />
            <form action="" className='my-auto relative'>
                <input type="text" className='my-auto flex h-9 md:h-12 w-44 md:w-96 rounded-md border border-input bg-transparent px-3 py-1 md:text-base text-sm'
                    value={value}
                    onChange={e => setValue(e.target.value)} />
                <img src={Search} alt="" className='absolute md:top-3 md:left-85 top-1.75 left-35 ' />
            </form>
        </div>
    </>
}