import { motion } from 'framer-motion';
import { ArrowUpRight, Ghost } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

export const Blog = {
  p: ({ className, children, delay }: { className?: string; children: React.ReactNode; delay: number }) => (
    <motion.p
      className={`${className}`}
      initial={{ opacity: 0, translateY: 25 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.15 }}>
      {children}
    </motion.p>
  ),
  h1: ({ className, children, delay }: { className?: string; children: React.ReactNode; delay: number }) => (
    <motion.h1
      className={`font-medium tracking-tight mb-7 ${className}`}
      initial={{ opacity: 0, translateY: 25 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.15 }}>
      {children}
    </motion.h1>
  ),
  h2: ({ className, children }: { className?: string; children: React.ReactNode }) => (
    <h2 className={`text-lg font-medium mb-7 ${className}`}>{children}</h2>
  ),
  h3: ({ className, children }: { className?: string; children?: React.ReactNode }) => (
    <h3 className={`text-lg md:text-sm font-medium ${className}`}>{children}</h3>
  ),
  a: ({ className, children, href }: { className?: string; children?: React.ReactNode; href?: string }) => (
    <a className={`underline underline-offset-2 ${className}`} href={href} target='_blank'>
      {children}
    </a>
  ),
  create: ({
    className,
    title,
    description,
    href,
    arrow,
  }: {
    className?: string;
    title: string;
    description: string;
    arrow?: boolean;
    href?: string;
  }) => (
    <div className={`min-h-[84px] ${className}`}>
      <div className='flex flex-row items-center'>
        <a className='font-medium underline underline-offset-2 hover:decoration-amber-400' href={href} target='_blank'>
          {title}
        </a>
        {arrow && <ArrowUpRight className='h-4 w-4' />}
      </div>
      <p className='text-zinc-400'>{description}</p>
    </div>
  ),
  ghost: (props: LucideProps) => <Ghost {...props} />,
};
