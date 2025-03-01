import { MotionConfig, motion } from 'framer-motion';
import { useState } from 'react';
import { BURGUER_VARIANTS } from '@data';

const BurguerButton = () => {
  const [active, setActive] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <motion.button
        initial={false}
        animate={active ? 'open' : 'closed'}
        onClick={() => setActive(pv => !pv)}
        className="relative h-20 w-20 rounded-full bg-white/0 transition-colors"
      >
        <motion.span
          variants={BURGUER_VARIANTS.top}
          className="absolute h-1 w-10 bg-white"
          style={{ y: '-50%', left: '50%', x: '-50%', top: '35%' }}
        />
        <motion.span
          variants={BURGUER_VARIANTS.middle}
          className="absolute h-1 w-10 bg-white"
          style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
        />
        <motion.span
          variants={BURGUER_VARIANTS.bottom}
          className="absolute h-1 w-10 bg-white"
          style={{
            x: '-50%',
            y: '50%',
            bottom: '35%',
            left: '50%',
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default BurguerButton;
