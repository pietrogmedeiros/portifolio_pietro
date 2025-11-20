import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RepoCard } from './components/RepoCard';
import { TechStack } from './components/TechStack';
import { fetchUserProfile, fetchUserRepos } from './services/github';
import { GitHubUser, GitHubRepo } from './types';
import { Github, Linkedin, Mail } from 'lucide-react';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark'); // Default to dark for disruptive vibe
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    // Apply theme class
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [userData, reposData] = await Promise.all([
          fetchUserProfile(),
          fetchUserRepos()
        ]);
        setUser(userData);
        
        // Sort by recently updated (pushed_at) descending
        // Removed the filter(!repo.fork) to include collaborations/forks as requested
        const sortedRepos = reposData
          .sort((a, b) => {
            const dateA = new Date(a.pushed_at || a.updated_at).getTime();
            const dateB = new Date(b.pushed_at || b.updated_at).getTime();
            return dateB - dateA;
          });
          
        setRepos(sortedRepos);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors duration-500 selection:bg-primary selection:text-white">
      
      <Header theme={theme} toggleTheme={toggleTheme} user={user} />

      <main>
        <Hero user={user} loading={loading} />

        <TechStack repos={repos} />

        <section id="projects" className="py-24 px-6 relative scroll-mt-20">
          {/* Background elements for "Life" */}
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Portfolio</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                   Todos os <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projetos</span>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
                  Explorando meu trabalho completo, incluindo colaborações, ordenado por atualização recente no código.
                </p>
              </div>
              <div className="text-right">
                <span className="text-6xl font-mono font-bold text-zinc-200 dark:text-zinc-800/50 tracking-tighter">
                  {repos.length.toString().padStart(2, '0')}
                </span>
              </div>
            </div>

            {loading ? (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[1,2,3,4,5,6].map(i => (
                   <div key={i} className="h-64 rounded-2xl bg-zinc-200 dark:bg-zinc-900/50 animate-pulse"></div>
                 ))}
               </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                {repos.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-12 px-6 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-100/50 via-transparent to-transparent dark:from-zinc-800/20 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg mb-1">{user?.name || 'Pietro Medeiros'}</p>
            <p className="text-zinc-500 text-sm">
              &copy; {new Date().getFullYear()} Desenvolvido com React, Tailwind & GitHub API.
            </p>
          </div>

          <div className="flex gap-6">
             <a 
              href="https://github.com/pietrogmedeiros" 
              className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
               <Github size={24} />
             </a>
             <a 
               href="https://www.linkedin.com/in/pietro-medeiros-770bba162/"
               className="text-zinc-400 hover:text-[#0077b5] transition-colors hover:scale-110 transform duration-200"
               aria-label="LinkedIn"
               target="_blank"
               rel="noreferrer"
             >
               <Linkedin size={24} />
             </a>
             <a 
               href={`mailto:${user?.email || 'pietrogmedeiros@gmail.com'}`}
               className="text-zinc-400 hover:text-red-500 transition-colors hover:scale-110 transform duration-200"
               aria-label="Email"
             >
               <Mail size={24} />
             </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;