import React from 'react';
import { GitHubRepo } from '../types';
import { ExternalLink, Code, Calendar } from 'lucide-react';

interface RepoCardProps {
  repo: GitHubRepo;
}

const languageColors: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-green-500',
  Java: 'bg-orange-500',
  HTML: 'bg-red-500',
  CSS: 'bg-blue-400',
  Vue: 'bg-emerald-500',
  React: 'bg-cyan-500',
  Dart: 'bg-teal-500',
  Swift: 'bg-orange-600',
  Go: 'bg-cyan-600',
  Rust: 'bg-orange-700',
  PHP: 'bg-indigo-500',
  // Fallback
  Default: 'bg-gray-500'
};

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
};

export const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
      
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-primary dark:text-accent">
            <Code size={20} />
          </div>
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-primary transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {repo.name}
        </h3>

        {repo.description && (
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 flex-grow line-clamp-3">
            {repo.description}
          </p>
        )}

        <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-500 mt-auto flex-wrap">
           {repo.language && (
            <div className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${languageColors[repo.language] || languageColors.Default}`} />
              <span className="font-medium text-zinc-700 dark:text-zinc-300">{repo.language}</span>
            </div>
          )}

          <div className="flex items-center gap-1 ml-auto" title="Última atualização">
            <Calendar size={14} />
            <span>{formatDate(repo.pushed_at || repo.updated_at)}</span>
          </div>
        </div>
        
        {repo.topics && repo.topics.length > 0 && (
             <div className="mt-4 flex flex-wrap gap-2">
                 {repo.topics.slice(0, 3).map(topic => (
                     <span key={topic} className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                         {topic}
                     </span>
                 ))}
             </div>
        )}
      </div>
    </div>
  );
};