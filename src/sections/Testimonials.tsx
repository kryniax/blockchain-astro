import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    text: "Our productivity has skyrocketed since we started using BlockchainAstro. It\'s a game-changer for our team.",
    name: "Andrzej Kowalski",
    title: "Frontend Developer",
    avatarImage: "/assets/images/avatar-noel-baldwin.jpg"
  },
  {
    text: "The user experience is phenomenal, and the support team is allways there to help. Highly recommended!",
    name: "Anna Zalewska",
    title: "Product Menager",
    avatarImage: "/assets/images/avatar-erica-wyatt.jpg"
  },
  {
    text: "The integration process was seamless, and the performance improvements are beyond our expectations.",
    name: "Jan Nowak",
    title: "CTO",
    avatarImage: "/assets/images/avatar-harry-bender.jpg"
  },
]

const TestimonialsSection = () => {
  return (
    <section className='py-32 bg-zinc-800' aria-labelledby="testimonials-heading">
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-24'>
          {testimonials.map(({text, name, title, avatarImage}, index) => (
            <motion.figure 
              key={index}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.5,
                ease: 'easeInOut',
                duration: 1,
              }}
            >
              <blockquote className='font-heading text-2xl lg:text-3xl font-black'>
                &ldquo;{text}&rdquo;
              </blockquote>
              <figcaption className='mt-8 block'>
                <div className='flex gap-3 items-center'>
                  <div>
                    <div className='size-16 bg-zinc-700 rounded-full'>
                      <img src={avatarImage} alt='Avatar' className='w-full rounded-full'/>
                    </div>
                  </div>
                  <div>
                    <div className='text-lg  not-italic font-black'>{name}</div>
                    <div className='text-zinc-400 not-italic'>{title}</div>
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

    </section>
  )
}

export default TestimonialsSection