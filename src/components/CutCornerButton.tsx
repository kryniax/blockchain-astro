import React, { type ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge';

interface CutCornerButtonProps {
    href?: string;
}

const CutCornerButton = (props: ComponentPropsWithoutRef<"button"> & CutCornerButtonProps) => {

    const { className, children, href } = props;

    const handleLink = () => {
        if(href) window.location.href = href
    }


  return (
    <button 
        onClick={handleLink}
        className={twMerge(`
            bg-fuchsia-500/20 
            px-4 py-2 
            font-extrabold 
            uppercase 
            font-heading
            text-sm
            tracking-wide
            relative
        `, className)}
        >
        <div 
            className='
                absolute 
                inset-0 
                outline 
                outline-2 
                -outline-offset-2 
                outline-fuchsia-500
                [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)]
            '
        ></div>
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className='absolute top-0 right-0 text-fuchsia-500'
        >
            <path
                d="M0 1H12.2667L23 11.7333V24"
                stroke="currentColor"
                strokeWidth="2"
            ></path>
        </svg>
        <span className='leading-6'>{children}</span>
    </button>
  )
}

export default CutCornerButton