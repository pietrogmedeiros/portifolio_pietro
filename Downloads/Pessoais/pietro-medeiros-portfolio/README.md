# 🎯 Pietro Medeiros Portfolio

Um portfólio interativo e moderno desenvolvido com **React** e **TypeScript**, alimentado pela **API do GitHub** para exibir dinamicamente seus projetos e informações de desenvolvedor.

---

## 📋 Sobre o Projeto

Este é um portfólio pessoal totalmente responsivo que integra dados do GitHub em tempo real, mostrando:

- **Perfil do Desenvolvedor**: Informações dinâmicas do GitHub (avatar, bio, estatísticas)
- **Repositórios em Destaque**: Lista atualizada automaticamente dos seus projetos
- **Tech Stack**: Tecnologias e ferramentas que você domina
- **Links Sociais**: Integração com GitHub, LinkedIn e email
- **Tema Escuro/Claro**: Suporte a múltiplos temas com persistência local
- **Design Responsivo**: Otimizado para desktop, tablet e mobile

---

## 🛠️ Stack Tecnológico

- **Frontend**: React 19 com TypeScript
- **Build Tool**: Vite
- **Styling**: CSS moderno com suporte a temas
- **API**: GitHub API REST
- **Ícones**: Lucide React
- **Icons**: Lucide React para UI elegante

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js (v16+)
- npm ou yarn

### Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/pietrogmedeiros/portifolio_pietro.git
   cd portifolio_pietro
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute em desenvolvimento**:
   ```bash
   npm run dev
   ```
   A aplicação estará disponível em `http://localhost:5173`

4. **Build para produção**:
   ```bash
   npm run build
   ```

5. **Preview do build**:
   ```bash
   npm run preview
   ```

---

## 📁 Estrutura do Projeto

```
├── components/
│   ├── Header.tsx        # Cabeçalho com navegação
│   ├── Hero.tsx          # Seção principal com apresentação
│   ├── RepoCard.tsx      # Componente de exibição de repositórios
│   └── TechStack.tsx     # Seção de tecnologias
├── services/
│   └── github.ts         # Integração com GitHub API
├── types.ts              # Tipos TypeScript
├── App.tsx               # Componente principal
├── index.tsx             # Entrada da aplicação
├── index.html            # HTML principal
├── vite.config.ts        # Configuração do Vite
├── tsconfig.json         # Configuração do TypeScript
├── package.json          # Dependências do projeto
└── metadata.json         # Metadados da aplicação
```

---

## 🔌 Integração com GitHub API

O projeto utiliza a **GitHub REST API** para buscar:

- **Perfil do usuário**: `GET /users/{username}`
- **Repositórios**: `GET /users/{username}/repos`

### Configuração

A integração é feita no arquivo `services/github.ts`. Para usar com seu próprio perfil, atualize a constante `USERNAME`:

```typescript
const USERNAME = 'seu-usuario-github';
```

---

## 🎨 Funcionalidades

✨ **Tema Dinâmico**: Alterne entre modo claro e escuro
📱 **Responsivo**: Funciona perfeitamente em qualquer dispositivo
⚡ **Performático**: Otimizado com Vite e React 19
🔄 **Dados em Tempo Real**: Sincronizado com GitHub API
🎭 **UI Moderna**: Design limpo e profissional
🔗 **Links Sociais**: Integração com redes sociais

---

## 📦 Dependências

| Pacote | Versão | Descrição |
|--------|--------|-----------|
| React | ^19.2.0 | Biblioteca de UI |
| TypeScript | ~5.8.2 | Linguagem tipada |
| Vite | ^6.2.0 | Build tool ultrarrápido |
| Lucide React | ^0.554.0 | Ícones SVG |

---

## 📝 Licença

Este projeto é código aberto e está disponível sob a licença MIT.

---

## 👨‍💻 Autor

**Pietro Medeiros**  
GitHub: [@pietrogmedeiros](https://github.com/pietrogmedeiros)

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para abrir issues e pull requests para melhorias.
