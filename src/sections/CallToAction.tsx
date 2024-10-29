import React, { useRef } from 'react'
import CutCornerButton from '../components/CutCornerButton'
import Hexagon from '../components/Hexagon'
import Circle from '../components/Circle'
import { useScroll, useTransform, motion } from 'framer-motion'

const CallToAction = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [45, -45]);
  return (
    <section className='py-60 overflow-hidden' ref={sectionRef} aria-labelledby="cta-heading">
        <div className='container'>
            <div className='relative'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Hexagon size={700}/>
                </div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Hexagon size={1100} reverse duration={50}/>
                </div>
                <figure className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Circle 
                        className='absolute left-0 -top-[400px]' 
                        animate 
                        angle={360}
                    >
                        <motion.img 
                            src='/assets/images/cuboid.png' 
                            className='size-[140px]'
                            alt="Rotating 3D cuboid"
                            style={{
                                rotate
                            }}
                        />
                    </Circle>
                    <figcaption className="sr-only">Rotating 3D cuboid</figcaption>
                </figure>
                <figure className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Circle 
                        className='absolute -left-[600px] -top-[70px]' 
                        animate 
                        angle={-360}
                    >
                        <motion.img 
                            src='/assets/images/cylinder.png' 
                            className='size-[140px]'
                            alt="Rotating 3D cylinder"
                            style={{
                                rotate
                            }}
                        />
                    </Circle>
                    <figcaption className="sr-only">Rotating 3D cylinder</figcaption>
                </figure>
                <header>
                    <h2 id="cta-heading" className='font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center'>
                        Ready to <span className='block'>get started?</span>
                    </h2>
                </header>
                <p className='text-xl lg:text-2xl text-zinc-400 text-center mt-8 max-w-sm mx-auto'>Start bulding using blockchain technology, with Blockchain.</p>
                <div className='flex justify-center mt-12'>
                    <CutCornerButton href='/contact'>Contact us</CutCornerButton>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CallToAction