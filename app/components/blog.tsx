import { motion } from 'framer-motion';
import { ArrowUpRight, Ghost } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { FC, ReactNode } from 'react';

// Shared prop types
interface BaseProps {
  className?: string;
  children?: ReactNode;
}

interface AnimatedProps extends BaseProps {
  delay: number;
}

interface LinkProps extends BaseProps {
  href?: string;
}

interface BlogCardProps {
  className?: string;
  title: string;
  description: string;
  href?: string;
  arrow?: boolean;
}

// Animation constants
const fadeInUpAnimation = {
  initial: { opacity: 0, translateY: 25 },
  animate: { opacity: 1, translateY: 0 },
};

const fadeInUpTransition = (delay: number) => ({
  duration: 0.6,
  delay: delay * 0.15,
});

// Components
export const BlogParagraph: FC<AnimatedProps> = ({ className = '', children, delay }) => (
  <motion.p
    className={className}
    initial={fadeInUpAnimation.initial}
    animate={fadeInUpAnimation.animate}
    transition={fadeInUpTransition(delay)}
  >
    {children}
  </motion.p>
);

export const BlogH1: FC<AnimatedProps> = ({ className = '', children, delay }) => (
  <motion.h1
    className={`font-medium tracking-tight mb-7 ${className}`}
    initial={fadeInUpAnimation.initial}
    animate={fadeInUpAnimation.animate}
    transition={fadeInUpTransition(delay)}
  >
    {children}
  </motion.h1>
);

export const BlogH2: FC<BaseProps> = ({ className = '', children }) => (
  <h2 className={`text-lg font-medium mb-7 ${className}`}>{children}</h2>
);

export const BlogH3: FC<BaseProps> = ({ className = '', children }) => (
  <h3 className={`text-lg md:text-sm font-medium ${className}`}>{children}</h3>
);

export const BlogLink: FC<LinkProps> = ({ className = '', children, href }) => (
  <a
    className={`underline underline-offset-2 ${className}`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export const BlogCard: FC<BlogCardProps> = ({
  className = '',
  title,
  description,
  href,
  arrow = false,
}) => (
  <div className={`min-h-[84px] ${className}`}>
    <div className="flex flex-row items-center">
      <a
        className="font-medium underline underline-offset-2 hover:decoration-amber-400"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      {arrow && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
    </div>
    <p className="text-zinc-400">{description}</p>
  </div>
);

export const BlogGhostIcon: FC<LucideProps> = (props) => <Ghost {...props} />;
