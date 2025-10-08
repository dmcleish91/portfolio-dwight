import { Heart } from 'lucide-react';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';

export default function Footer() {
  const [heartColor, setHeartColor] = useState(false);

  return (
    <footer className='relative bottom-0 left-0 w-full flex flex-row justify-center h-[47px] text-gray-200 px-8 md:px-0 font-sans'>
      <div className='flex flex-row justify-between items-center w-[640px]'>
        <Typewriter
          options={{
            strings: [
              'The heights by great men reached and kept',
              'Were not attained by sudden flight',
              'But they, while their companions slept',
              'Were toiling upward in the night.',
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <div className='flex flex-row items-center'>
          <p>{new Date().getFullYear()}</p>
          <Heart
            className='h-4 w-4 cursor-pointer transistion-all duration-300'
            fill={heartColor ? '#FED100' : '#009B3A'}
            onClick={() => setHeartColor((prev) => !prev)}
          />
        </div>
      </div>
    </footer>
  );
}
