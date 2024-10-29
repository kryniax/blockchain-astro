import React, { useEffect, useState } from 'react'
import CutCornerButton from '../components/CutCornerButton'
import Hexagon from '../components/Hexagon'
import { twMerge } from 'tailwind-merge'
import { AnimatePresence, motion } from 'framer-motion'
import { navLink } from '../assets/data'

const HeaderSection = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen])
  return (
    <>
        <header className='sticky top-0 z-40 bg-zinc-900/50 backdrop-blur-lg'>
            <div className='container'>
                <div className='flex justify-between items-center h-24 md:h-28'>
                    <a href='/'>
                        <h1 className='font-heading font-extrabold text-3xl md:text-4xl tracking-wider'>BlockchainAstro</h1>
                    </a>
                    <div className='flex gap-4 items-center'>
                        <CutCornerButton className='hidden md:flex' href='/'>Get Started</CutCornerButton>
                        <button 
                            className='size-10 relative'
                            onClick={() => setIsOpen((curr) => !curr)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open navigation menu</span>
                            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <div 
                                    className={twMerge('w-5 h-0.5 bg-zinc-300 transition duration-300',
                                    isOpen ? 'rotate-45' : '-translate-y-1'
                                    )}></div>
                            </div>
                            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <div 
                                    className={twMerge('w-5 h-0.5 bg-zinc-300 transition duration-300',
                                    isOpen ? '-rotate-45' : 'translate-y-1'
                                    )}></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <AnimatePresence>
        {isOpen && (
            <motion.div 
                className='fixed size-full top-0 left-0 z-30 bg-zinc-900'
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                exit={{
                    opacity: 0
                }}
                transition={{
                    duration: .5
                }}
                role='dialog'
                aria-modal='true'
            >
                <div className='absolute inset-2 rounded-md bg-zinc-800 mt-24 z-0 md:mt-28 '>
                    <div className='absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10'>
                        <Hexagon size={700}/>
                    </div>
                    <div className='absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10'>
                        <Hexagon size={1100}/>
                    </div>
                    <div className='h-full flex justify-center items-center'>
                        <nav className='flex flex-col items-center gap-12 md:gap-16'>
                            {navLink.map(({title, href}, index) => (
                                <motion.a 
                                    href={href} 
                                    key={title}
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: 'linear',
                                        delay: 0.25 * index
                                    }}
                                >
                                    <span className='text-4xl md:text-5xl lg:text-6xl font-heading font-black text-zinc-500 hover:text-zinc-300 transition duration-300'>{title}</span>
                                </motion.a>
                            ))}
                        </nav>
                    </div>
                </div>
            </motion.div>
            )}
        </AnimatePresence>


    </>


  )
}

export default HeaderSection