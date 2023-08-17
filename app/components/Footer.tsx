import React from 'react';
import Logo from './Logo';
import { footerLinks } from '../constants';
import Link from 'next/link';




const Footer = () => {
    return (
        <>
            <footer className=' sm:px-10 px-10 bg-slate-100 pt-16 w-full pb-10'>
                <div className="">
                    <Logo />
                    <p className='mt-4 g max-w-[400px] text-slate-700'>
                        Dev-Flex is the world's leading community for creatives to share  grow  and set
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 gap-7 sm:flex flex-wrap sm:gap-4 items-start justify-between mt-16">
                    {footerLinks.map((linkEl) => {
                        return <div className='flex flex-col justify-start '>
                            <h1 className=' font-bold text-slate-600 mb-2 mt-5'>{linkEl.title}</h1>
                            <ul className=''>{linkEl.links.map((link) => (<li className='mt-3 text-[15px] hover:text-purple-600 text-slate-500'> <Link href={link}>{link}</Link></li>))}</ul>
                        </div>
                    })}
                </div>


            </footer>
            <div className="w-full sm:flex text-center py-4 sm:text-inherit   h-16 bg-white px-10 items-center justify-between">
                <p className='text-sm md:text-md text-slate-600'>&copy;Flex-dev all right reserved</p>
                <p className=' text-slate-700 '> <span className=' font-bold text-sm sm:text-md'>100 </span>projects submited</p>
            </div>
        </>
    )
}

export default Footer