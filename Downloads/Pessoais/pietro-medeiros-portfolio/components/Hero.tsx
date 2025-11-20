import React from 'react';
import { GitHubUser } from '../types';
import { ArrowRight, MapPin, Users, Link as LinkIcon, Linkedin } from 'lucide-react';

interface HeroProps {
  user: GitHubUser | null;
  loading: boolean;
}

export const Hero: React.FC<HeroProps> = ({ user, loading }) => {
  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-32 h-32 rounded-full bg-zinc-200 dark:bg-zinc-800"></div>
          <div className="h-8 w-64 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
          <div className="h-4 w-48 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
        </div>
      </section>
    );
  }

  if (!user) return null;

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>

      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="order-2 md:order-1 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono mb-6 text-primary dark:text-accent">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Disponível para novos projetos
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Olá, eu sou o{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Pietro Medeiros!
              </span>
              <span className="inline-block ml-2 text-zinc-900 dark:text-zinc-100 transform hover:scale-110 transition-transform">🤘🏻</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              Sou Engenheiro de P&D e Inovação com atuação end-to-end, unindo desenvolvimento mão na massa, arquitetura de soluções e liderança técnica. Trabalho no ponto onde tecnologia, produto e negócio se encontram, criando sistemas escaláveis, automações inteligentes e soluções que geram impacto real.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-zinc-500 font-medium">
            {user.location && (
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {user.location}
              </div>
            )}
            
            <a href="https://www.linkedin.com/in/pietro-medeiros-770bba162/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#0077b5] transition-colors">
               <Linkedin size={16} />
               LinkedIn
            </a>

            {user.blog && (
              <a href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <LinkIcon size={16} />
                Website
              </a>
            )}
          </div>

          <div className="flex gap-4 pt-4">
            <a 
              href="#projects"
              className="group px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-bold flex items-center gap-2 hover:gap-4 transition-all shadow-lg hover:shadow-xl"
            >
              Ver Projetos
              <ArrowRight size={20} className="group-hover:text-accent transition-colors" />
            </a>
            <a 
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-full font-bold border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center relative">
          {/* Reduced size: w-48 h-48 md:w-72 md:h-72 */}
          <div className="relative w-48 h-48 md:w-72 md:h-72 animate-float">
             <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 blur-2xl"></div>
             <img 
              src="https://github.com/pietrogmedeiros.png" 
              alt={user.login} 
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-black shadow-2xl"
            />
            
            {/* Floating Stats Cards - Updated to LinkedIn */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 p-3 md:p-4 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-[#0077b5]/10 p-2 rounded-lg text-[#0077b5]">
                    <Linkedin size={20} />
                </div>
                <div>
                    <p className="text-[10px] text-zinc-500">Network</p>
                    <a href="https://www.linkedin.com/in/pietro-medeiros-770bba162/" target="_blank" rel="noreferrer" className="font-bold text-sm md:text-lg hover:underline decoration-[#0077b5]">
                        Conectar
                    </a>
                </div>
            </div>

            <div className="absolute top-0 -right-10 bg-white dark:bg-zinc-900 p-3 md:p-4 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg text-purple-600 dark:text-purple-400">
                    <LinkIcon size={20} />
                </div>
                <div>
                    <p className="text-[10px] text-zinc-500">Repositórios</p>
                    <p className="font-bold text-sm md:text-lg">{user.public_repos} Projects</p>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};