import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import TextButton from '../components/TextButton'
import Card from '../components/Card'
import { cardData } from '../assets/data'

const FeaturesCardsSection = () => {

    const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    useEffect(() => {
        if(isHovered) return;
        const timeout = setTimeout(() => {
            setSelectedCardIndex((item) =>
            item === cardData.length - 1 ? 0 : item + 1
            );
        }, 3000);
        return () => {
            clearTimeout(timeout);
        }
    }, [selectedCardIndex, isHovered]);

  return (
    <section className='py-24 overflow-x-clip md:-mt-28'  aria-labelledby="featuresCard-heading">
        <div className='container'>
            <header>
                <h2 id="featuresCard-heading" className='font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center'>
                    Discover the future of blockchain with BlockchainAstro   
                </h2>
            </header>
            <div className='mt-36 lg:mt-48 flex' role="list" aria-label="Feature Cards">
                <div className='flex flex-none gap-8'>
                    {cardData.map(({ image, title, description, color }, index) => (
                    <article
                        key={title}
                        className='inline-flex transition-all duration-300'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{
                            transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`,
                        }}
                        aria-hidden={selectedCardIndex !== index}
                    >
                        <Card key={title} color={color} className='max-w-xs md:max-w-md'>
                            <figure className='flex justify-center -mt-28'>
                                <div className='inline-flex relative'>
                                    <div className='absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]'></div>
                                    <img 
                                        src={image} 
                                        alt='Shape Image' 
                                        className='size-40 group-hover:-translate-y-6 transition duration-300'
                                    />
                                </div>
                                <figcaption className="sr-only">{title}</figcaption>
                            </figure>
                            <header>
                                <h3 className='font-heading font-black text-3xl mt-12'>{title}</h3>
                            </header>
                            <p className='text-lg text-zinc-400 mt-4'>{description}</p>
                        </Card>
                    </article>
                    ))}
                </div>
            </div>
            <nav aria-label="Carousel for feature cards" className='flex justify-center mt-10'>
                <div className='bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full'>
                    {cardData.map(({title}, index) => (
                    <button 
                        key={title} 
                        className={twMerge('size-2.5 bg-zinc-500 rounded-full cursor-pointer',
                            index === selectedCardIndex && 'bg-zinc-300'
                        )}
                        onClick={() => setSelectedCardIndex(index)}
                        aria-label={`Go to ${title}`}
                    ></button>
                    ))}
                </div>
            </nav>
        </div>
    </section>
  )
}

export default FeaturesCardsSection