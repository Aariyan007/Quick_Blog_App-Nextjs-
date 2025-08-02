'use client';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '../hooks/usePost';
import SearchBox from './seachbox';
import LeftBox from './leftbox_image';
import RightBox from './rightbox';
import Bottom from './bottomcontainer';

export default function ClientHomePage({ initialPosts, error }) {
  const queryClient = useQueryClient();


  useEffect(() => {
    if (initialPosts && initialPosts.length > 0) {
      queryClient.setQueryData([QUERY_KEYS.POSTS], initialPosts);
    }
  }, [initialPosts, queryClient]);

  return (
    <>
      <div className='navbar p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-3 bg-transparent backdrop-blur-sm'>
        <div className='Logo group cursor-pointer'>
          <p className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-500 transform group-hover:scale-105'>
            Beyond UI
          </p>
        </div>
        <div className="flex-1 max-w-md mx-4 w-full sm:w-auto order-last sm:order-none">
          <SearchBox />
        </div>
        <div className='infos hidden lg:flex items-center gap-2'>
          <NavButton href="#home" text="Home" />
          <NavButton href="#about" text="About Us" />
          <NavButton href="#features" text="Features" />
          <NavButton href="#blog" text="Blog" />
          <NavButton href="#contact" text="Contact Us" />
          <NavButton href="#demo" text="Demo" variant="secondary" />
          <NavButton href="#get-started" text="Get Started" variant="primary" />
        </div>
        <button className='lg:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors duration-300'>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className='p-4 sm:p-6 lg:p-8 pt-9 flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-center lg:items-start justify-center relative overflow-hidden'>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 sm:bottom-40 right-4 sm:right-20 w-32 sm:w-48 h-32 sm:h-48 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-16 sm:w-24 h-16 sm:h-24 bg-purple-500 rounded-full blur-2xl animate-bounce delay-500"></div>
        </div>

        <div className="w-full lg:flex-1 lg:max-w-2xl animate-slideInLeft lg:mr-16 order-2 lg:order-1">
          <LeftBox />
        </div>

        <div className="w-full lg:w-auto animate-slideInRight lg:ml-16 order-1 lg:order-2 flex justify-center lg:justify-start">
          <RightBox />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full animate-float delay-0"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-float delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-purple-400 rounded-full animate-float delay-2000"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-float delay-3000"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out 0.2s both;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      <div className='h-64 sm:h-80 lg:h-96 mt-8 sm:mt-12 lg:mt-16'>
        <Bottom />
      </div>
    </>
  );
}

function NavButton({ href, text, variant = "default" }) {
  const baseClasses = "px-3 sm:px-4 py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 relative overflow-hidden group whitespace-nowrap";

  const variantClasses = {
    default: "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 hover:shadow-md",
    secondary: "text-blue-400 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20",
    primary: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 hover:shadow-xl hover:shadow-blue-500/25"
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
      <span className="relative z-10">{text}</span>
    </a>
  );
}