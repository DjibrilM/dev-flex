import React from 'react'
import { Lilita_One } from 'next/font/google';


const josefin_sans = Lilita_One({
    subsets: ["latin"],
    weight: '400',
})

const Logo = () => {
    return (
        <h1 className={`font-bold text-[1.5rem] text-slate-800 ${josefin_sans.className}`}> {'<'}<span className='text-purple-500 text-2xl'>.</span>Flex<span className=' text-purple-700'>  Dev</span> {'/>'} </h1>
    )
}

export default Logo