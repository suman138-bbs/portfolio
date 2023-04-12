import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
type Props = {}

export default function Header({}: Props) {
  return (
      <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-6 pt-3'>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{duration:1.3}}
        className='flex flex-row items-center gap-3'>
              <SocialIcon url="https://twitter.com/SumanBh39706321" fgColor='gray' bgColor='transparant' style={{ height: 40, width: 40 }} />  
               <SocialIcon url="https://twitter.com/SumanBh39706321" fgColor='gray' bgColor='transparant' style={{ height: 40, width: 40 }}/>  
              <SocialIcon url="https://twitter.com/SumanBh39706321" fgColor='gray' bgColor='transparant' style={{ height: 40, width: 40 }}/>  
            <SocialIcon url="https://twitter.com/SumanBh39706321" fgColor='gray' bgColor='transparant' style={{ height: 40, width: 40 }}/>  
      </motion.div>
      <Link href='#contact'>
          <motion.div initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{duration:1}} className='flex flex-row  text-gray-300 items-center '>
              <SocialIcon network='email' fgColor='gray' bgColor='transparant' style={{ height: 40, width: 40 }}/>  
              <p className='uppercase hidden md:inline-flex text-sm text-gray-400 ml-2'>get in touch</p>
        </motion.div>
       </Link> 
    </header>
  )
}