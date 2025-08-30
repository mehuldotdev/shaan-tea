      "use client"

      import { create } from 'zustand'
      import { LogOut, Moon, Menu, Ghost, GhostIcon, Coffee, MenuIcon } from 'lucide-react'
      import React from 'react'
      import { Button } from './ui/button'
      import Link from 'next/link'
      import Image from 'next/image'
      import icon from "../public/logo.svg"
      import { useMobileMenu } from '@/src/store/useMenuStore'

      function Header() {

        const {isMobileMenuOpen, toggleMobileMenu} = useMobileMenu();

        return (
          <div className='navbar bg-black text-white flex flex-row justify-between w-full overflow-hidden items-center'>
            {/* Left section */}
            <div className='flex md:gap-4 gap-2 p-[1rem] md:p-4 items-center flex-shrink-0'>
              <Link href="/">
              <Image width={30} src={icon} alt='logo'></Image>
              </Link>
              <div className='flex flex-col'>
                <h1 className='font-semibold text-md'>Shant-tea ☕️</h1>
                <p className='text-xs'>Sip & have shanti.</p>
              </div>
            </div>


            {/* Right section for desktop only */}
            <div className='flex flex-row items-center gap-6'>
            <div className='hidden md:flex gap-10'>
              <Link href="/features"><p>Features </p></Link>
              <Link href="/about">About</Link>
            </div>

            <div className='items-center flex flex-row gap-4 mr-2 p-2'>
              <Moon className='size-5' />
              <Button className='bg-white text-black'>Sign-in</Button>

              {/* Menu icon */}

              <div className='md:hidden'>
              <Button onClick={toggleMobileMenu} className='bg-white text-black'>
              <MenuIcon />
              </Button>
            </div>

            </div>

            </div>


            {/* Mobile Menu */}
            
            <div className={`absolute w-full left-0 bg-black p-4 top-[70px] md:hidden ${isMobileMenuOpen ? 'flex flex-col gap-4' : 'hidden'}`}>
              <Link href="/features"><p>Features </p></Link>
              <Link href="/about">About</Link>

            </div>
            

          </div>

        )
      }

      export default Header