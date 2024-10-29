import React, { useRef } from 'react'
import CutCornerButton from '../components/CutCornerButton'
import TextButton from '../components/TextButton'
import { motion, useScroll, useTransform } from 'framer-motion'
import { listItems } from '../assets/data'

const FeaturesGrid = () => {
    const torusKnotRef = useRef(null);
    const ConeRef = useRef(null);
    const firstHemisphereRef = useRef(null);
    const secondHemisphereRef = useRef(null);


    const { scrollYProgress: torusScrollYProgress } = useScroll({
        target: torusKnotRef,
        offset: ['start end', 'end start']
    })
    const torusKnotTranslateY = useTransform(torusScrollYProgress, [0, 1], [100, -100]);
    const torusKnotRotate = useTransform(torusScrollYProgress, [0, 1], [30, -30]);


    const { scrollYProgress: firstHemisphereScrollYProgress } = useScroll({
        target: firstHemisphereRef,
        offset: ['start end', 'end start']
    })
    const firstHemisphereTranslateY = useTransform(firstHemisphereScrollYProgress, [0, 1], [50, -50]);
    const firstHemisphereRotate = useTransform(firstHemisphereScrollYProgress, [0, 1], [-20, -50]);


    const { scrollYProgress: ConeScrollYProgress } = useScroll({
        target: ConeRef,
        offset: ['start end', 'end start']
    })
    const ConeTranslateY = useTransform(ConeScrollYProgress, [0, 1], [100, -100]);
    const ConeRotate = useTransform(ConeScrollYProgress, [0, 1], [12, 45]);


    const { scrollYProgress: secondHemisphereScrollYProgress } = useScroll({
        target: secondHemisphereRef,
        offset: ['start end', 'end start']
    })
    const secondHemisphereTranslateY = useTransform(secondHemisphereScrollYProgress, [0, 1], [50, -50]);
    const secondHemisphereRotate = useTransform(secondHemisphereScrollYProgress, [0, 1], [-20, 10]);

  return (
    <section className='py-24 overflow-x-clip' aria-labelledby="featuresGrid-heading">
        <div className='container'>
            <div className='flex flex-col gap-56 md:gap-48 lg:gap-80'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8' role="list" aria-label="Features">
                    <article className='col-span-2'>
                        <header>
                            <h2 id='featuresGrid-heading' className='font-heading font-black text-4xl md:text-5xl lg:text-6xl'>Empowering the future of blockchain</h2>
                        </header>
                        <p className='text-xl lg:text-2xl text-zinc-400 mt-8'>BlockchainAstro provides robust and secure infrastructure to support the next generation of decentralized applications.</p>
                        <ul className='flex flex-col gap-8 mt-12'>
                            {listItems.map((item) => (
                                <li key={item} className='flex items-center gap-3'>
                                    <div className='inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 outline-fuchsia-500/10 rounded-full'>
                                        <div className='size-1.5 bg-fuchsia-500 rounded-full'></div>
                                    </div>
                                    <span className='text-xl font-bold'>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className='flex gap-8 mt-12'>
                            <CutCornerButton href='/careers'>Get Started</CutCornerButton>
                            <TextButton color="fuchsia">Learn More</TextButton>
                        </div>
                    </article>
                    <aside className='hidden md:block'>
                        <div className='relative inline-flex z-0'>
                            <motion.img 
                                src='/assets/images/torus-knot.png' 
                                alt='Torus Knot 3D image'
                                className='size-96 max-w-none'
                                ref={torusKnotRef}
                                style={{
                                    translateY: torusKnotTranslateY,
                                    rotate: torusKnotRotate,
                                }}
                            />
                            <motion.img 
                                src='/assets/images/hemisphere.png' 
                                alt='Hemisphere 3D shape'
                                className='absolute size-96 top-3/4 -z-10 scale-x-[-1]'
                                ref={firstHemisphereRef}
                                style={{
                                    translateY: firstHemisphereTranslateY,
                                    rotate: firstHemisphereRotate
                                }}
                            />
                        </div>
                    </aside>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <aside className='hidden md:block relative'>
                        <div className='absolute right-0 z-0'>
                            <motion.img 
                                src='/assets/images/cone.png' 
                                alt='Cone 3D Shape'
                                className='size-96 max-w-none rotate-12'
                                ref={ConeRef}
                                style={{
                                    translateY: ConeTranslateY,
                                    rotate: ConeRotate,
                                }}
                            />
                            <motion.img 
                                src='/assets/images/hemisphere.png' 
                                alt='Hemnisphere 3D Shape'
                                className='absolute top-3/4 -z-10'
                                ref={secondHemisphereRef}
                                style={{
                                    translateY: secondHemisphereTranslateY,
                                    rotate: secondHemisphereRotate,
                                }}
                            />
                        </div>
                    </aside>
                    <article className='col-span-2'>
                        <header>
                            <h2 className='font-heading font-black text-4xl md:text-5xl lg:text-6xl'>BlockchainAstro leads the way.</h2>
                        </header>
                        <div className='flex flex-col text-xl lg:text-2xl text-zinc-400 mt-6 gap-6'>
                            <p>
                                BlockchainAstro is dedicated to supporting the evolution of Web3 application by delivering the necessary infrastructure and security for Web3.
                            </p>
                            <p>
                                BlockchainAstro champions Web3 for everyone. As a decentralized blockchain scaling platform, BlockchainAstro enables developers to create scalable, user-friendly dApps with low transaction costs, all while ensuring robust security.
                            </p>
                        </div>
                        <div className='flex gap-8 mt-12'>
                            <CutCornerButton>Get Started</CutCornerButton>
                            <TextButton color="fuchsia">Learn More</TextButton>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturesGrid