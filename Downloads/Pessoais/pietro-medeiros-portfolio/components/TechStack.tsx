import React from 'react';
import { GitHubRepo } from '../types';
import { 
  Database, 
  Layout, 
  Wrench, 
  Zap, 
  Server, 
  Bot
} from 'lucide-react';

interface TechStackProps {
  repos: GitHubRepo[];
}

interface TechItem {
  name: string;
  color: string;
  logo: string;
  logoClass?: string;
}

interface TechCategory {
  title: string;
  icon: React.ElementType;
  items: TechItem[];
}

export const TechStack: React.FC<TechStackProps> = ({ repos }) => {
  
  const badgeStyle = "bg-white text-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-primary dark:hover:border-primary transition-colors";

  const stack: TechCategory[] = [
    {
      title: "Infraestrutura & DevOps",
      icon: Wrench,
      items: [
        { 
          name: "AWS", 
          color: badgeStyle, 
          logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
        },
        { 
          name: "Google Cloud", 
          color: badgeStyle, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" 
        },
        { 
          name: "Railway", 
          color: badgeStyle, 
          logo: "https://cdn.simpleicons.org/railway" 
        },
        { 
          name: "Vercel", 
          color: badgeStyle, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
        },
        { 
          name: "Cloudflare", 
          color: badgeStyle, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" 
        },
        { 
          name: "Docker", 
          color: badgeStyle, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" 
        },
      ]
    },
    {
      title: "Bancos de Dados & Storage",
      icon: Database,
      items: [
        { 
          name: "PostgreSQL", 
          color: badgeStyle, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
        },
        { 
          name: "Supabase", 
          color: badgeStyle, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" 
        },
        { 
          name: "Firestore", 
          color: badgeStyle, 
          logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" 
        },
        { 
          name: "Realtime Database", 
          color: badgeStyle, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" 
        },
      ]
    },
    {
      title: "Automação, Integração & Orquestração",
      icon: Zap,
      items: [
        { 
          name: "n8n", 
          color: badgeStyle, 
          logo: "https://cdn.simpleicons.org/n8n/FF6584" 
        },
        { 
          name: "RabbitMQ", 
          color: badgeStyle, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg" 
        },
        { 
          name: "Firebase Auth", 
          color: badgeStyle, 
          logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" 
        },
      ]
    },
    {
      title: "Backend",
      icon: Server,
      items: [
        { 
          name: "Python", 
          color: badgeStyle, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
        },
        { 
          name: "Node.js", 
          color: badgeStyle, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" 
        },
      ]
    },
    {
      title: "Frontend",
      icon: Layout,
      items: [
        { 
          name: "JavaScript", 
          color: badgeStyle, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
        },
        { 
          name: "TypeScript", 
          color: badgeStyle, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" 
        },
        { 
          name: "React", 
          color: badgeStyle, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
        },
        { 
          name: "Next.js", 
          color: badgeStyle, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        },
        { 
          name: "TailwindCSS", 
          color: badgeStyle, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
        },
        { 
          name: "Vite", 
          color: badgeStyle, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" 
        },
      ]
    },
    {
      title: "Machine Learning & Data",
      icon: Bot,
      items: [
        { 
          name: "TensorFlow", 
          color: badgeStyle, 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" 
        },
      ]
    }
  ];

  return (
    <section id="stack" className="py-24 px-6 bg-zinc-50/50 dark:bg-zinc-900/30 scroll-mt-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Tech Stack</span> & Expertise
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Minha caixa de ferramentas para construir soluções escaláveis de ponta a ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stack.map((category) => (
            <div 
              key={category.title} 
              className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6 text-zinc-800 dark:text-zinc-200">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-primary dark:text-accent">
                  <category.icon size={24} />
                </div>
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span 
                    key={item.name}
                    className={`pl-3 pr-4 py-2 rounded-lg text-sm font-bold shadow-sm ${item.color} transform hover:scale-105 transition-transform cursor-default flex items-center gap-2`}
                  >
                    <img 
                      src={item.logo} 
                      alt={item.name} 
                      className={`w-5 h-5 object-contain ${item.logoClass || ''}`} 
                    />
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};