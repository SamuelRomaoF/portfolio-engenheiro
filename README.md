# Portfólio de Engenheiro Civil

Este é um site de portfólio para um engenheiro civil especializado em laudos técnicos e perícias, desenvolvido com React, Next.js e Tailwind CSS.

## Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **Next.js** - Framework React para renderização do lado do servidor
- **Tailwind CSS** - Framework CSS utilitário para estilização
- **TypeScript** - Superset de JavaScript com tipagem estática

## Estrutura do Projeto

```
portfolio-engenheiro/
├── public/             # Arquivos estáticos
│   └── images/         # Imagens do site
├── src/
│   ├── app/            # Páginas da aplicação (roteamento Next.js)
│   │   ├── page.tsx           # Página inicial (Home)
│   │   ├── quem-somos/        # Página Quem Somos
│   │   ├── servicos/          # Página de Serviços
│   │   ├── blog/              # Página de Blog
│   │   └── contato/           # Página de Contato
│   ├── components/     # Componentes reutilizáveis
│   │   ├── Navbar.tsx         # Barra de navegação
│   │   ├── Hero.tsx           # Seção principal da página inicial
│   │   ├── Footer.tsx         # Rodapé do site
│   │   └── ...                # Outros componentes
│   └── styles/         # Estilos globais
├── package.json        # Dependências e scripts
└── tsconfig.json       # Configuração do TypeScript
```

## Como Executar o Projeto

### Pré-requisitos

- Node.js 18.x ou superior
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITORIO]
cd portfolio-engenheiro
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse `http://localhost:3000` no seu navegador

## Personalizações

### Imagens
- Substitua as imagens na pasta `public/images/` com as imagens reais do engenheiro e seus projetos
- Descomente as tags `<Image>` nos componentes após adicionar as imagens reais

### Informações
- Atualize dados de contato, informações profissionais e descrições de serviços
- Modifique os textos e conteúdos para refletir a experiência específica do engenheiro

## Deploy

Para fazer o deploy do site em produção:

```bash
npm run build
# ou
yarn build
```

Isso gera uma versão otimizada do site na pasta `.next/` que pode ser hospedada em serviços como Vercel, Netlify ou qualquer provedor que suporte aplicações Next.js.

## Licença

Este projeto está sob a licença MIT.
