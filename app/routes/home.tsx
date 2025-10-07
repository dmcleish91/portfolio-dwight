import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col justify-center items-center gap-4 w-[972px] h-48 z-10 font-serif'>
        <motion.h1
          className='text-2xl md:text-5xl'
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}>
          Hey, I'm <span className='text-island-yellow'>Dwight</span>.
        </motion.h1>
        <motion.h1
          className='text-2xl md:text-5xl'
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}>
          I create <span className='text-island-green'>full stack applications</span>.
        </motion.h1>

        <Link to='/about'>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            <ArrowDownIcon width={28} height={28} className={'animate-bounce'} />
          </motion.h2>
        </Link>
      </div>
    </div>
  );
}
