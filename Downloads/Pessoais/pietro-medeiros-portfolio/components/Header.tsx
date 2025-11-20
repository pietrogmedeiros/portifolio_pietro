import React from 'react';
import { Moon, Sun, Github, Linkedin } from 'lucide-react';
import { GitHubUser } from '../types';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  user: GitHubUser | null;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, user }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-full px-6 py-3 border border-zinc-200 dark:border-zinc-800 flex justify-between items-center shadow-lg shadow-black/5">
          
          <div className="flex items-center gap-2 md:gap-3">
            <img 
              src="https://github.com/pietrogmedeiros.png" 
              alt="Pietro Medeiros" 
              className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm object-cover"
            />
            <span className="font-mono font-bold text-xs md:text-sm tracking-tight text-zinc-800 dark:text-zinc-200">
              {user?.login || 'pietro.dev'}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {['Sobre', 'Stack', 'Projetos'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase() === 'sobre' ? 'about' : item.toLowerCase()}`} 
                className="relative group py-1 transition-colors hover:text-primary dark:hover:text-white"
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <a 
              href="https://github.com/pietrogmedeiros" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/pietro-medeiros-770bba162/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300 hover:text-[#0077b5] dark:hover:text-[#0077b5]"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>

            <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-700 mx-1"></div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-yellow-400 hover:scale-110 transition-transform active:scale-95"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} className="text-zinc-600" /> : <Sun size={20} />}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
