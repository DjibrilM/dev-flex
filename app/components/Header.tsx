import React from 'react'
import { Lilita_One } from 'next/font/google';
import { NavLinks } from '../constants';
import Link from 'next/link';
import { NavLinkTYpe } from '../common.typs';
import AuthProvider from './AuthProvider';


const josefin_sans = Lilita_One({
  subsets: ["latin"],
  weight: '400',
})


const Header = () => {
  const session = {};
  return (
    <header className=' h-20 border  z-50 flex justify-between items-center  bg-[#fff2] backdrop-blur-md fixed  px-12 w-full '>
      <div className=" w-full m-auto flex h-full items-center">
        <h1 className={`font-bold text-[1.5rem] text-slate-800 ${josefin_sans.className}`}> {'<'}<span className='text-purple-500 text-2xl'>.</span>Flex<span className=' text-purple-700'>  Dev</span> {'/>'} </h1>
        <ul className=' flex gap-8 ml-10 text-[15px]'>
          {NavLinks.map((link: NavLinkTYpe) => <Link key={link.key} href={link.href} className=' text-slate-600 text-[15px] hover:text-purple-500 duration-200'>{link.text}</Link>)}
        </ul>
      </div>

      <div className="h-full ">
        {session ? (
          <>
            user profile image
            <Link href={'/create-project'}>
              Show Work
            </Link>
          </>
        ) : <>
          <AuthProvider />
        </>}
      </div>
    </header>
  )
}

export default Header