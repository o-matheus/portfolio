import type { project } from "../models/project";

import { CARD_IMAGES, GIF_PROJECTS } from "../models/images";

export const mockProjects: project[] = [
  {
    id: 1,
    image: CARD_IMAGES.listaContatos,
    context: "Projeto Acadêmico",
    name: "Lista de Contatos",
    description:
      "Gerenciamento de contatos React/Redux: cadastro, edição, exclusão, filtragem e favoritos.",
    stack: ["React", "TypeScript", "Styled-Components"],
    role: "Frontend",
    year: 2025,
    gitLink: "https://github.com/o-matheus/front_32_tarefa_ebac",
    deployLink: "https://front-32-tarefa-ebac.vercel.app",
    gifDesktop: GIF_PROJECTS.listaContatos[1],
    largeDescription:
      "Este projeto consiste em uma Lista de Contatos completa e moderna, totalmente responsiva, desenvolvida para um desafio prático de Front-end. O objetivo fundamental era criar uma aplicação funcional que fosse além da estética visual, lidando eficazmente com a gestão de estados e a crucial persistência de dados localmente no navegador. A motivação surgiu da necessidade de aplicar o conhecimento sobre gerenciamento de estado global, superando a frustração de criar apenas componentes visuais sem a capacidade essencial de trabalhar com dados, o verdadeiro coração da web. A aplicação suporta o ciclo completo CRUD (Criação, Leitura, Atualização e Exclusão) de contatos, além de Pesquisa Dinâmica e Filtros por Categoria. O design é responsivo, apresentando Modal para adição em telas maiores e Tela Separada em dispositivos móveis. O resultado final consolidou todo o meu aprendizado.",
    solution:
      "O projeto foi construído utilizando um stack moderno e robusto. A interface de usuário foi desenvolvida com React. Para o gerenciamento de estado global, utilizei o Redux, centralizando a fonte da verdade dos dados e garantindo que todas as ações de manipulação (adição, remoção, edição) sejam previsíveis. A estilização foi feita com Styled Components, permitindo uma abordagem de CSS-in-JS para estilos modulares e específicos. A Persistência de Dados foi implementada salvando o estado do Redux no LocalStorage do navegador. Esta foi uma implementação crucial, pois garantiu que todos os contatos salvos pelo usuário permaneçam disponíveis mesmo após recarregar a página. Este projeto marcou um avanço significativo no meu aprendizado, ao dar o primeiro passo sólido no estudo e na implementação de gestão de estado e persistência de dados em aplicações Front-end.",
  },
  {
    id: 2,
    image: CARD_IMAGES.calculadoraIMC,
    context: "Projeto Acadêmico",
    name: "Calculadora IMC",
    description:
      "Calculadora IMC responsiva: cálculo preciso, tabela de resultados e FAQ integrado.",
    stack: ["React", "TypeScript", "CSS-Modules"],
    role: "Frontend",
    year: 2025,
    gitLink: "https://github.com/o-matheus/front_28_ebac",
    deployLink: "https://front-28-ebac-54sv.vercel.app",
    gifDesktop: GIF_PROJECTS.imcDesktop,
    largeDescription:
      "Este projeto consiste em uma calculadora de IMC (Índice de Massa Corporal), desenvolvida como minha primeira aplicação utilizando o ReactJS. O objetivo principal era construir um formulário funcional que capturasse o peso e a altura do usuário e, automaticamente, exibisse o IMC calculado e sua classificação correspondente (ex: Peso normal, Obesidade).Aprendizados Chave: Este desenvolvimento foi crucial para reforçar a importância do Planejamento na programação. A experiência prática me ensinou que o tempo investido em definir a estrutura e as diretrizes de um projeto é um investimento que previne retrabalho, confirmando que as horas gastas planejando são, na verdade, horas economizadas na execução. Foi um marco no meu estudo de Front-end.",
    solution:
      "A aplicação foi estruturada em ReactJS com foco no state management local para os campos de peso e altura. A lógica de cálculo do IMC segue a fórmula padrão e é disparada de forma automática a cada alteração nos inputs. Para garantir a melhor experiência e precisão de dados, implementei máscaras nos campos de entrada para que o usuário insira os valores de peso e altura no formato esperado. O design é responsivo, utilizando componentes para exibir a tabela de classificação do IMC e um mock de perguntas ao lado do formulário, fornecendo feedback visual imediato ao usuário. Este projeto permitiu meu primeiro contato prático com o fluxo de trabalho e o lifecycle do React, consolidando a base para futuros desenvolvimentos mais complexos.",
  },
  {
    id: 3,
    image: CARD_IMAGES.listaTarefas,
    context: "Projeto Acadêmico",
    name: "Lista de tarefas",
    description:
      "Lista de tarefas responsiva: modo escuro, filtros, contador e limpeza de concluídos.",
    stack: ["Vue.js", "TypeScript", "CSS"],
    role: "Frontend",
    year: 2025,
    gitLink: "https://github.com/o-matheus/todo_vue_frontendMentor",
    deployLink: "https://todo-vue-frontend-mentor.vercel.app",
    gifDesktop: GIF_PROJECTS.lTarefas,
    largeDescription:
      "Este projeto é uma Lista de Tarefas (To-Do List) robusta, desenvolvida com o objetivo de simular um ambiente profissional. O desafio principal foi resolver um exercício do Frontend Mentor, exigindo atenção rigorosa a detalhes de layout, tipografia e cores, e marcando minha primeira experiência com Vue.js e seguindo referências visuais de design específico. A aplicação possui Cabeçalho, Campo de Input, Lista de Atividades e uma Barra de Status que exibe tarefas pendentes, filtros (Todas, Ativas, Completas) e o botão para apagar concluídas. Foi um projeto que reforçou a importância do planejamento, apesar do tempo de finalização estendido.",
    solution:
      "A solução foi construída com Vue.js e TypeScript, sendo o TS fundamental para a tipagem de dados e a robustez do código. A reconfiguração de elementos no Vue simplificou a gestão de estado. A estilização foi feita com SASS, aproveitando variáveis e aninhamento para modularidade. O destaque técnico é a implementação da Seleção de Modo Claro e Escuro através de Variáveis CSS controladas pelo state do Vue. Quanto ao input, a submissão de tarefas é idealmente feita via evento @keyup.enter, sem a necessidade de um botão visível. O projeto serviu para consolidar a criação de projetos com Vue.js e o uso de pré-compiladores CSS",
  },
  {
    id: 4,
    image: CARD_IMAGES.fanSiteORV,
    context: "Projeto Acadêmico",
    name: "Omniscient Reader’s",
    description:
      "Fan site temático imersivo: sinopse, galeria de personagens principais, links oficiais e seção de FAQ.",
    role: "Frontend",
    year: 2025,
    stack: ["HTML", "SASS", "JavaScript"],
    gitLink: "https://github.com/o-matheus/front_21_exercicio_ebac",
    deployLink: "https://front-21-exercicio-ebac.vercel.app/",
    gifDesktop: GIF_PROJECTS.orv,
    largeDescription:
      "Este projeto é uma Landing Page completa e responsiva sobre o manhwa Omniscient Reader's Viewpoint (ORV), desenvolvida para consolidar conhecimentos de Front-end (HTML, CSS e JS). A página simula uma experiência profissional, focada em fidelidade visual e usabilidade. A estrutura inclui Header com CTA, Seção Hero, um sistema interativo de abas para Personagens, Cards de Leitura e FAQ. Fiquei satisfeito com o resultado visual e responsivo, mas este projeto reforçou a necessidade de estudar backend para construir soluções mais completas, com funcionalidades como sistemas de comentários ou cadastro, o que é meu próximo foco de estudo.",
    solution:
      "A solução foi construída utilizando a stack clássica de HTML5, CSS3 com SASS e JavaScript puro. Para otimizar o workflow, utilizei Gulp para automação de tarefas, como a compilação do SASS e a minificação do código JS. O JavaScript puro foi essencial para gerenciar a interatividade das abas de Personagens e a seção FAQ, manipulando as classes dinamicamente. Um desafio técnico superado foi a configuração do Gulp e a estrutura de pastas para o deploy correto na Vercel. Um aprendizado de estilo foi o uso do filter: invert() no CSS para adaptar os ícones das redes sociais no Footer, garantindo o contraste.",
  },
  {
    id: 5,
    image: CARD_IMAGES.educaAI,
    context: "Projeto Acadêmico",
    name: "Educa AI",
    description:
      "Plataforma digital de apoio à gestão escolar: planejamento, relatórios e planos.",
    role: "Frontend",
    year: 2025,
    stack: ["HTML", "CSS", "Bootstrap"],
    gitLink: "https://github.com/o-matheus/front_tarefa_mod_14",
    deployLink: "https://front-tarefa-mod-14.vercel.app",
    gifDesktop: GIF_PROJECTS.educaAI,
    largeDescription: "Este projeto é uma Landing Page completa voltada para gestão escolar, focada em um design moderno e organizado e em responsividade utilizando Bootstrap. A estrutura é completa: Header adaptável, Seção Hero com Carrossel, Seção Planos (em cards), e Seção Funcionalidades estruturada em abas. O site também inclui a estrutura de um Formulário de Contato. Este projeto consolidou o uso de frameworks CSS para construir layouts responsivos complexos de forma eficiente e reforçou a minha visão sobre a necessidade de integrar soluções de backend para completar a funcionalidade do formulário, mantendo sempre uma estética coesa e profissional.",
    solution: "A solução técnica foi construída com HTML5, CSS3 e Bootstrap 5.3.5, o que garantiu a responsividade e a agilidade na construção. O Bootstrap foi crucial para implementar componentes complexos, como o Carrossel (ajustado após tentativa de layout customizado) e o sistema de Abas (tab-pane) na seção de funcionalidades. O projeto também incluiu a estruturação completa do Formulário de Contato com seus campos. A identidade visual foi reforçada por ilustrações padronizadas e ícones do Bootstrap Icons. O projeto demonstrou a capacidade de seguir um design coeso, adaptando o código para garantir estabilidade e funcionalidade.",
  },
  {
    id: 6,
    image: CARD_IMAGES.mabiViagens,
    context: "Projeto Acadêmico",
    name: "Mabi Viagens",
    description:
      "Landing page responsiva com Bootstrap: carrossel, cartões de promoções e formulário de contato interativo.",
    stack: ["HTML", "CSS", "Bootstrap"],
    role: "Frontend",
    year: 2025,
    gitLink: "https://github.com/o-matheus/front_ebac_tarefa_modulo_13",
    deployLink: "https://front-ebac-tarefa-modulo-13-front.vercel.app",
    gifDesktop: GIF_PROJECTS.mabi,
    largeDescription: "O projeto Mabi Viagens é uma Landing Page responsiva criada para consolidar o uso do Bootstrap. O objetivo foi construir uma estrutura moderna com Header fixo, Carrossel de imagens com transições suaves e uma Seção de Promoções organizada em cards responsivos, seguindo uma estética visualmente limpa. A página utiliza o sistema de grid do Bootstrap para adaptação entre mobile e desktop. Apesar de ser uma solução inicial, este projeto foi crucial para introduzir a interatividade e a validação no front-end. A reflexão posterior indica planos de refatoração em 2026, com foco na integração de backend para evoluir o projeto.",
    solution: "A solução técnica baseou-se em HTML, CSS e Bootstrap, com ênfase na aplicação do sistema de grid (col-12, col-sm-6, col-lg-4) para a Seção de Promoções. O Header utiliza position: sticky para fixação. O destaque técnico reside na interatividade: a Máscara de Campo foi implementada no formulário de contato usando jQuery e jQuery Mask Plugin para formatar o campo de telefone. Além disso, o formulário inclui validação front-end (campos required e type=email) e utiliza event.preventDefault() e this.reset() para limpar os campos após a tentativa de envio. O CSS customizado (scroll-margin-top) foi usado para corrigir a sobreposição do conteúdo pelo Header fixo.",
  },
];
