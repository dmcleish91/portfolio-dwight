import { motion } from 'framer-motion';
import { BlogH1, BlogH2, BlogH3, BlogParagraph, BlogLink, BlogCard } from '../components/blog';
import Footer from '../components/footer';

export default function About() {
  const DELAY = 0.15;
  return (
    <div className='flex min-h-screen flex-col'>
      <main className='container mx-auto flex-1 max-w-5xl py-16 font-sans text-neutral-200'>
        <div className='flex w-full flex-col items-center justify-center'>
          <div className='max-w-96 px-8 md:max-w-[640px] md:px-0'>
            <BlogH1 delay={0}>Dwight Mcleish Jr</BlogH1>

            <BlogParagraph className='mb-7' delay={1}>
              Building <span className='font-medium italic'>refined</span> applications and web experiences. Exploring the rich landscape of
              design. Software Engineer at <BlogLink href='https://spectrumware.net/'>Spectrumware LLC</BlogLink>.
            </BlogParagraph>

            <BlogParagraph className='mb-14' delay={2}>
              In the past I was a business systems analyst for <BlogLink href='https://www.elead-crm.com/'>Elead1One</BlogLink>.
            </BlogParagraph>

            <motion.div
              className='mb-14 flex flex-col gap-8 md:flex-row md:items-start'
              initial={{ opacity: 0, translateY: 25 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.6, delay: 3 * DELAY }}>
              <div className='flex w-72 flex-col gap-5 md:w-[192px]'>
                <BlogH3>Building</BlogH3>
                <BlogCard
                  title='Yata'
                  description='Powerful todo app with modern features'
                  href='https://yata-delta.vercel.app/about'
                  arrow
                />
              </div>
              <div className='flex w-72 flex-col gap-5 md:w-[192px]'>
                <BlogH3>Projects</BlogH3>
                <BlogCard
                  title='Readme Forge'
                  description='Craft Documentation with AI'
                  href='https://github.com/dmcleish91/docs-assistant'
                  arrow
                />
                <BlogCard
                  title='Review Generator'
                  description='ML-powered API for generating reviews'
                  href='https://github.com/dmcleish91/Review-Generator'
                  arrow
                />
              </div>
              <div className='flex w-72 flex-col gap-5 md:w-[192px]'>
                <BlogH3>Writing</BlogH3>
                <BlogCard
                  title='Readability in Code'
                  description='Simplicity is the ultimate skill'
                  href='https://iridiumforge.substack.com/p/readability-in-code'
                  arrow
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 25 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.6, delay: 4 * DELAY }}>
              <BlogH2>Now</BlogH2>
              <p className='mb-7'>
                Building scalable web applications with React, TypeScript, and Go. Focused on performance optimization and clean
                architecture.
              </p>
              <p className='mb-7'>
                Passionate about solving complex technical challenges and collaborating with talented teams. Currently exploring{' '}
                <span className='font-medium italic tracking-wide'>distributed systems</span> and microservices architecture.
              </p>
              <p className='mb-7'>
                Outside of coding: 3D design and photography. Game recommendation:{' '}
                <a className='underline underline-offset-2' href='https://www.mobiusdigitalgames.com/outer-wilds.html' target='_blank'>
                  Outer Wilds
                </a>{' '}
                for an unforgettable experience. Music:{' '}
                <a className='font-medium underline underline-offset-2' href='https://www.youtube.com/watch?v=8MGGBBZFWk8' target='_blank'>
                  You
                </a>
                .
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, translateY: 25 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.6, delay: 5 * DELAY }}>
              <BlogH2>Connect</BlogH2>
              <p>
                Reach me at{' '}
                <a className='underline underline-offset-2' href='mailto:dmcleishjr@gmail.com'>
                  dmcleishjr@gmail.com
                </a>
              </p>
              <p>
                My{' '}
                <a
                  className='underline underline-offset-2'
                  href='https://drive.google.com/file/d/1kb3SSOWdkXFDegJpwseYw_z8XSd4vyK_/view'
                  target='_blank'>
                  Resume
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
