import React, { useEffect, useState } from 'react'
import { socialIcons } from '../assets/data'


const Footer = () => {

  return (
    <footer className='py-24 bg-zinc-950'>
        <div className='container'>
            <div className='flex justify-between items-center'>
                <header>
                    <h2 className='font-heading font-extrabold text-xl md:text-2xl'>BlockchainAstro</h2>
                </header>
                <nav className='hidden md:flex gap-12 text-xl font-heading font-black text-zinc-500'>
                    <a href='/'>Home</a>
                    <a href='/blog'>Blog</a>
                    <a href='/careers'>Careers</a>
                    <a href='/contact'>Contact</a>
                </nav>
            </div>
            <div className='mt-12 md:mt-48 md:flex justify-between items-center'>
                <p className='text-zinc-400'>&copy; 2024 BlockchainAstro. All rights reserved.</p>
                <div className='mt-4 md:mt-0 inline-flex gap-6' aria-label="Social Media Icons">
                    {socialIcons.map((iconData, index) => (
                        <div key={index} className='size-10 bg-zinc-800 rounded-full inline-flex items-center justify-center'>
                            {iconData.icon()}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer