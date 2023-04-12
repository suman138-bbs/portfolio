import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function About({}: Props) {
  return (
    <div className='flex  flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
          <motion.img initial={{
              x: -200,
              opacity: 0,
          }}
              transition={{ duration: 1.2, }}
              
              whileInView={{ opacity: 1, x: 0 
              }}
              viewport={{ once: true }} src='https://avatars.githubusercontent.com/u/91786012?s=96&v=4'
              className=' mt-[200px] md:mb-0    flex-shrink-0 w-44 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
          />
          <div className='space-y-2 px-0 md:px-10 '>
              <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A] '>little</span> background</h4>
              <p className='text-sm md:text-base'>The 21st century has broughtthe proliferation of cloud computing, these technological developments have had a profound impact on how we communicate, conduct business, and access information. With technology continuing to evolve at an increasingly rapid .</p>

          </div>
    </div>
  )
}