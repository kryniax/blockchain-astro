import React, { type ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

interface CirclePropsBase {
  animate?: boolean;
}

interface AnimatedCircleProps extends CirclePropsBase {
  animate: true;
  angle: number;
}

interface StaticCircleProps extends CirclePropsBase {
  animate?: false;
  angle?: number;
}

type CircleProps = AnimatedCircleProps | StaticCircleProps;

const Circle = (props: ComponentPropsWithoutRef<'div'> & CircleProps) => {

    const { className, children, angle, animate = false } = props;

  return (
    <div className={twMerge('relative bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full ', className)}>
      <motion.div 
        animate={
          animate && {
            rotate: angle,
          }
        }
        transition={{
          ease: 'linear',
          duration: 15,
          repeat: Infinity
        }}
        className={twMerge('absolute inset-0 rounded-full outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 border-[6px] border-transparent',
          animate && 'border-t-fuchsia-500/30'
        )}
      />
      {children}
    </div>
  )
}

export default Circle