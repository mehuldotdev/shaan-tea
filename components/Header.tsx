import { LogOut, Moon, Menu, Ghost, GhostIcon, Coffee, MenuIcon } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import icon from "../public/logo.svg"

function Header() {

  

  return (
    <div className='navbar bg-black p-5 text-white flex flex-row justify-between w-full overflow-hidden items-center'>
      {/* Left section */}
      <div className='flex md:gap-4 gap-2 items-center'>
        <Image width={30} src={icon} alt='logo'></Image>
        <div className='flex flex-col'>
          <h1 className='font-semibold'>Shant-tea ☕️</h1>
          <p className='text-xs'>Caring about mental health with the sip of a tea.</p>
        </div>
      </div>


      {/* Right section */}
      <div className='hidden md:flex gap-6'>
        <Link href="/features"><p>Features </p></Link>
        <Link href="/about">About</Link>
      </div>


      {/* Mobile Menu */}
      <div className='hidden p-4 bg-gray-400 items-center'>
      <MenuIcon />
      </div>

    </div>

  )
}

export default Header