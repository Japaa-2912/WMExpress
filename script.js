// ===== script.js =====
// WM Express Estética Automotiva - Menu, catálogo por categorias, modal, galeria e carrinho

// ============================================================
// CONFIGURAÇÃO CENTRAL - edite aqui o número do WhatsApp
// ============================================================
const WM = {
  whatsapp: '5511970298678',
  instagram: 'wmexpress.estetica',
  // GOOGLE_REVIEWS_URL - link oficial da ficha da WM Express no
  // Google (página onde o cliente deixa a avaliação).
  // Substitua pelo link oficial quando tiver (ex.:
  // https://g.page/r/xxxxx/reviews ). O valor atual usa a busca
  // oficial do Google pelo nome da empresa, que leva à ficha real.
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=WM+Express+Est%C3%A9tica+Automotiva+S%C3%A3o+Paulo',
};

// ============================================================
// IMAGENS REAIS DA WM EXPRESS (mapeamento centralizado)
// Para trocar uma foto, basta alterar o caminho aqui.
// ============================================================
const IMAGENS = {
  lavagemSimplesCarro: 'img/lavagem-simples-completa-carro-peq.webp',
  lavagemSimplesSuv: 'img/lavagem-simples-completa-SUV.webp',
  lavagemUtilitario: 'img/lavagem-utilitario-peq.webp',
  lavagemPickupGrande: 'img/lavagem-completa-pickup-grande-esporte.webp',
  lavagemDetalhadaCarro: 'img/lavagem-detalhada-carro-peq.webp',
  lavagemDetalhadaSuv: 'img/lavagem-det-SUV.png',
  lavagemMotor: 'img/lavagem de motor.webp',
  lavagemChassis: 'img/lavagem de chassis.jpg',
  higienizacaoPrata: 'img/higienização-prata-com-oxi.webp',
  higienizacaoOuro: 'img/higienização-ouro-com-oxi.webp',
  oxiSanitizacao: 'img/oxisatinização.jpg',
  trocaFiltroAr: 'img/troca de filtro.webp',
  polimentoTecnico: 'img/polimento tecnico.webp',
  polimentoTecnicoSuv: 'img/polimento tec suv.png',
  polimentoFarois: 'img/revitalização de farois.webp',
  polimentoMetais: 'img/polimentodemetaisalimínioeaçoinox.webp',
  martelinhoOuro: 'img/martelinho de ouro.webp',
  reparoTrocaVidro: 'img/reparo e troca de vidro.webp',
  reparosPintura: 'img/reparo em pintura.webp',
  insulfilm: 'img/insufilm.jpg',
  levaTraz: 'img/leva e traz.webp',
  camaraSeguranca: 'img/camera de segurança.webp',
  pacote1: 'img/pacote-1.jpg',
  pacote2: 'img/pacote-2.jpg',
  pacote3: 'img/pacote-3.jpg',
  pacote4: 'img/pacote 4.jpg',
  produtos: 'img/produtos.jpg',
  descarte: 'img/descarte.jpg',
  wmexpress: 'img/WMEXPRESS.jpg',
  galeriaCorolla: 'img/ima galeria/corolla.jpg',
  galeriaI30B: 'img/ima galeria/I-30(2.jpg',
  galeriaI30: 'img/ima galeria/I-30.jpg',
  galeriaMercedes: 'img/ima galeria/mercedes.jpg',
  galeriaRenegade: 'img/ima galeria/renegade.jpg',
  galeriaTeraB: 'img/ima galeria/Tera(2.jpg',
  galeriaTera: 'img/ima galeria/Tera.jpg',
};

// ============================================================
// CATEGORIAS DE SERVIÇOS
// ============================================================
const CATEGORIAS = [
  { id: 'lavagens', rotulo: 'Lavagens', numero: '01', titulo: 'Lavagens', descricao: 'Da lavagem simples à detalhada: cuidado completo para todos os tamanhos de veículo.' },
  { id: 'higienizacao', rotulo: 'Higienização', numero: '02', titulo: 'Higienização', descricao: 'Limpeza profunda e sanitização do interior do seu veículo.' },
  { id: 'polimento', rotulo: 'Polimento', numero: '03', titulo: 'Polimento e Acabamento', descricao: 'Acabamento fino, brilho extraordinário e revitalização da pintura e dos detalhes.' },
  { id: 'reparos', rotulo: 'Reparos', numero: '04', titulo: 'Reparos e Proteção', descricao: 'Recuperação de lataria, vidros e pintura, além da proteção com películas.' },
  { id: 'conveniencia', rotulo: 'Conveniência', numero: '05', titulo: 'Conveniência', descricao: 'Facilidades para você ganhar tempo no seu dia a dia.' },
  { id: 'pacotes', rotulo: 'Pacotes', numero: '06', titulo: 'Pacotes', descricao: 'Combinações de serviços especiais com o melhor da estética automotiva.' },
  { id: 'residencial', rotulo: 'Residencial', numero: '07', titulo: 'Serviços Residenciais', descricao: 'Segurança para a sua casa ou empresa, com instalação profissional.' },
];

// ============================================================
// SERVIÇOS (dados centralizados)
// preco: texto exato exibido ao cliente (não alterar)
// precoNumero: usado apenas para o carrinho
// recomendacoes: IDs de serviços relacionados ("Você pode gostar")
// ============================================================
const SERVICOS = [
  // ---------- LAVAGENS ----------
  {
    id: 'lavagem-simples-carro',
    categoria: 'lavagens',
    nome: 'Lavagem Simples Completa - Carro Pequeno',
    preco: 'R$ 49,99',
    precoNumero: 49.99,
    resumo: 'Lavagem completa com aspiração, produtos de excelente qualidade e o resultado que só a gente entrega.',
    descricao: ['Lavagem completa com aspiração, porém simples como a de um lava-rápido tradicional, porém com produtos de excelente qualidade e o resultado que só a gente entrega.'],
    imagem: IMAGENS.lavagemSimplesCarro,
    alt: 'Lavagem simples completa de carro pequeno na WM Express',
    destaque: true,
    selo: 'MAIS PEDIDO',
    allowAddons: true,
    recomendacoes: ['lavagem-detalhada-carro', 'oxi-sanitizacao', 'polimento-tecnico'],
  },
  {
    id: 'lavagem-simples-suv',
    categoria: 'lavagens',
    nome: 'Lavagem Simples Completa - SUV',
    preco: 'R$ 70,00',
    precoNumero: 70.00,
    resumo: 'Lavagem completa com aspiração, produtos de excelente qualidade e o resultado que só a gente entrega.',
    descricao: ['Lavagem completa com aspiração, porém simples como a de um lava-rápido tradicional, porém com produtos de excelente qualidade e o resultado que só a gente entrega.'],
    imagem: IMAGENS.lavagemSimplesSuv,
    alt: 'Lavagem simples completa de SUV na WM Express',
    allowAddons: true,
    recomendacoes: ['lavagem-detalhada-suv', 'higienizacao-prata', 'lavagem-simples-carro'],
  },
  {
    id: 'lavagem-utilitario',
    categoria: 'lavagens',
    nome: 'Lavagem de Utilitário Pequeno Porte',
    preco: 'R$ 70,00',
    precoNumero: 70.00,
    resumo: 'Para Strada, Saveiro, Doblo, Fiorino, Courier e similares.',
    descricao: ['Strada, Saveiro, Doblo, Fiorino, Courier ...'],
    imagem: IMAGENS.lavagemUtilitario,
    alt: 'Lavagem de utilitário pequeno porte na WM Express',
    allowAddons: true,
    recomendacoes: ['lavagem-simples-carro', 'lavagem-pickup-grande', 'lavagem-motor'],
  },
  {
    id: 'lavagem-pickup-grande',
    categoria: 'lavagens',
    nome: 'Lavagem Completa Pick-Up Grande Porte',
    preco: 'R$ 90,00',
    precoNumero: 90.00,
    resumo: 'Para Hilux, Ranger, L200, S10, Amarok e Dodge Ram.',
    descricao: ['Hilux, Ranger, L200, S10, Amarok, Dodge Ram'],
    imagem: IMAGENS.lavagemPickupGrande,
    alt: 'Lavagem completa de pick-up grande porte na WM Express',
    allowAddons: true,
    recomendacoes: ['lavagem-simples-suv', 'lavagem-utilitario', 'lavagem-detalhada-suv'],
  },
  {
    id: 'lavagem-detalhada-carro',
    categoria: 'lavagens',
    nome: 'Lavagem Detalhada - Carro Pequeno',
    preco: 'R$ 899,00',
    precoNumero: 899.00,
    resumo: 'Lavagem completa com limpeza de rodas, pneus, grades, emblemas, cantos e acabamento com brilho. Higienização interna inclusa.',
    descricao: ['Lavagem completa'],
    destaques: [
      'Limpeza de rodas, caixas de roda e pneus',
      'Limpeza de grades, emblemas e cantos',
      'Remoção de sujeiras impregnadas',
      'Acabamento com brilho e proteção',
    ],
    obs: ['Destaque: resultado impecável para a parte externa do seu veículo.', 'Higienização interna inclusa.'],
    imagem: IMAGENS.lavagemDetalhadaCarro,
    alt: 'Lavagem detalhada de carro pequeno na WM Express',
    allowAddons: true,
    recomendacoes: ['polimento-tecnico', 'higienizacao-ouro', 'lavagem-motor'],
  },
  {
    id: 'lavagem-detalhada-suv',
    categoria: 'lavagens',
    nome: 'Lavagem Detalhada - SUV',
    preco: 'R$ 1.100,00',
    precoNumero: 1100.00,
    resumo: 'Lavagem completa com limpeza de rodas, pneus, grades, emblemas, cantos e acabamento com brilho. Higienização interna inclusa.',
    descricao: ['Lavagem completa'],
    destaques: [
      'Limpeza de rodas, caixas de roda e pneus',
      'Limpeza de grades, emblemas e cantos',
      'Remoção de sujeiras impregnadas',
      'Acabamento com brilho e proteção',
    ],
    obs: ['Destaque: resultado impecável para a parte externa do seu veículo.', 'Higienização interna inclusa.'],
    imagem: IMAGENS.lavagemDetalhadaSuv,
    alt: 'Lavagem detalhada de SUV na WM Express',
    allowAddons: true,
    recomendacoes: ['polimento-tecnico-suv', 'higienizacao-ouro', 'lavagem-motor'],
  },
  {
    id: 'lavagem-motor',
    categoria: 'lavagens',
    nome: 'Lavagem de Motor',
    preco: 'R$ 299,90',
    precoNumero: 299.90,
    resumo: 'Remoção de toda sujeira de óleo, graxa e poeira, com finalização no padrão do fabricante.',
    descricao: [
      'Lavagem de motor com produtos de excelente qualidade, removendo toda sujeira de óleo, graxa e poeira encrostada.',
      'O resultado é uma finalização no padrão do fabricante do veículo, com o brilho e a proteção do nosso verniz finalizador.',
    ],
    imagem: IMAGENS.lavagemMotor,
    alt: 'Lavagem de motor na WM Express',
    recomendacoes: ['lavagem-chassis', 'lavagem-detalhada-carro', 'higienizacao-prata'],
  },
  {
    id: 'lavagem-chassis',
    categoria: 'lavagens',
    nome: 'Lavagem de Chassis',
    preco: 'R$ 199,00',
    precoNumero: 199.00,
    resumo: 'Remoção da sujeira encrostada no chassi, prevenindo a deterioração do assoalho do veículo.',
    descricao: [
      'Lavagem do chassi do seu veículo, removendo toda sujeira que está encrostada por anos.',
      'Este serviço previne que o assoalho do seu veículo venha a se deteriorar com o tempo, devido ao acúmulo de resíduos que danifica o veículo.',
    ],
    imagem: IMAGENS.lavagemChassis,
    alt: 'Lavagem de chassi na WM Express',
    recomendacoes: ['lavagem-motor', 'higienizacao-prata', 'lavagem-detalhada-carro'],
  },

  // ---------- HIGIENIZAÇÃO ----------
  {
    id: 'higienizacao-prata',
    categoria: 'higienizacao',
    nome: 'Higienização Prata com Oxi-sanitização',
    preco: 'R$ 699,00',
    precoNumero: 699.00,
    resumo: 'Higienização completa com remoção dos bancos e saídas de ar, lavagem simples e oxi-sanitização.',
    descricao: [
      'Higienização completa do seu veículo com produtos especiais, para remover toda sujeira encrostada nos bancos, carpete, portas e teto.',
      'Fazemos a remoção dos bancos e saídas de ar.',
      'Lavagem simples e oxi-sanitização.',
    ],
    obs: ['Nessa higienização não removemos o carpete.'],
    imagem: IMAGENS.higienizacaoPrata,
    alt: 'Higienização prata do interior do veículo na WM Express',
    recomendacoes: ['oxi-sanitizacao', 'troca-filtro-ar', 'higienizacao-ouro'],
  },
  {
    id: 'higienizacao-ouro',
    categoria: 'higienizacao',
    nome: 'Higienização Ouro com Oxi-sanitização',
    preco: 'R$ 1.099,90',
    precoNumero: 1099.90,
    resumo: 'Higienização completa com remoção de carpete se necessário, bancos, saídas de ar, lavagem e oxi-sanitização inclusas.',
    descricao: [
      'Higienização completa do seu veículo com produtos especiais, para remover toda sujeira encrostada nos bancos, carpete, portas e teto.',
      'Se necessário, removemos o carpete e lavamos.',
      'Remoção dos bancos e saídas de ar.',
      'Lavagem simples e oxi-sanitização inclusas.',
    ],
    imagem: IMAGENS.higienizacaoOuro,
    alt: 'Higienização ouro do interior do veículo na WM Express',
    recomendacoes: ['oxi-sanitizacao', 'troca-filtro-ar', 'lavagem-detalhada-carro'],
  },
  {
    id: 'oxi-sanitizacao',
    categoria: 'higienizacao',
    nome: 'Oxi-sanitização',
    preco: 'R$ 199,00',
    precoNumero: 199.00,
    resumo: 'Sanitização à base de ozônio que elimina fungos, bactérias e maus odores do interior do veículo.',
    descricao: [
      'Oxi-sanitização feita à base de ozônio. Este serviço é essencial para matar fungos e bactérias que agem no interior do seu veículo.',
      'A realização desse serviço elimina todo tipo de cheiro de mofo, cigarro ou qualquer mau odor que esteja no interior do veículo.',
    ],
    imagem: IMAGENS.oxiSanitizacao,
    alt: 'Oxi-sanitização do interior do veículo na WM Express',
    recomendacoes: ['troca-filtro-ar', 'higienizacao-prata', 'lavagem-detalhada-carro'],
  },
  {
    id: 'troca-filtro-ar',
    categoria: 'higienizacao',
    nome: 'Troca do Filtro do Ar Condicionado',
    preco: 'R$ 99,90',
    precoNumero: 99.90,
    resumo: 'Troca do filtro do ar condicionado para manter a qualidade do ar que você respira dentro do carro.',
    descricao: [
      'Efetuamos o serviço de troca do filtro do seu ar condicionado.',
      'É necessária a troca do filtro do ar condicionado para manter uma qualidade no ar que você respira dentro do carro.',
    ],
    obs: ['O valor é apenas da mão de obra. O filtro deverá ser comprado pelo proprietário.'],
    imagem: IMAGENS.trocaFiltroAr,
    alt: 'Troca do filtro do ar condicionado na WM Express',
    recomendacoes: ['oxi-sanitizacao', 'higienizacao-prata', 'higienizacao-ouro'],
  },

  // ---------- POLIMENTO E ACABAMENTO ----------
  {
    id: 'polimento-tecnico',
    categoria: 'polimento',
    nome: 'Polimento Técnico',
    preco: 'R$ 599,00',
    precoNumero: 599.00,
    resumo: 'Acabamento fino e brilho extraordinário na pintura com produtos de excelente qualidade.',
    descricao: ['Polimento técnico do seu veículo com produtos de excelente qualidade, dando o acabamento fino e um brilho extraordinário na pintura do seu veículo.'],
    imagem: IMAGENS.polimentoTecnico,
    alt: 'Polimento técnico da pintura do veículo na WM Express',
    recomendacoes: ['polimento-farois', 'lavagem-detalhada-carro', 'pacote-polimento-vitrificacao'],
  },
  {
    id: 'polimento-tecnico-suv',
    categoria: 'polimento',
    nome: 'Polimento Técnico SUV',
    preco: 'R$ 899,00',
    precoNumero: 899.00,
    resumo: 'Acabamento fino e brilho extraordinário na pintura com produtos de excelente qualidade.',
    descricao: ['Polimento técnico do seu veículo com produtos de excelente qualidade, dando o acabamento fino e um brilho extraordinário na pintura do seu veículo.'],
    imagem: IMAGENS.polimentoTecnicoSuv,
    alt: 'Polimento técnico de SUV na WM Express',
    recomendacoes: ['polimento-tecnico', 'polimento-farois', 'pacote-polimento-vitrificacao'],
  },
  {
    id: 'polimento-farois',
    categoria: 'polimento',
    nome: 'Polimento e Revitalização de Faróis',
    preco: 'R$ 249,90',
    precoNumero: 249.90,
    resumo: 'Seu farol amarelado, ressecado ou ofuscado volta a ser novo, com mais presença e qualidade de iluminação.',
    descricao: [
      'Seu farol está amarelado, ressecado ou com a lente ofuscada? Nós temos a solução.',
      'Com o serviço de polimento e revitalização de faróis, seu farol fica novo de novo, dando uma presença marcante e trazendo mais qualidade na iluminação do veículo.',
    ],
    imagem: IMAGENS.polimentoFarois,
    alt: 'Polimento e revitalização de faróis na WM Express',
    recomendacoes: ['polimento-tecnico', 'polimento-tecnico-suv', 'lavagem-detalhada-carro'],
  },
  {
    id: 'polimento-metais',
    categoria: 'polimento',
    nome: 'Polimento de Metais, Alumínio e Aço Inox',
    preco: 'R$ 800,00',
    precoNumero: 800.00,
    resumo: 'Polimento de rodas de liga leve, bengalas, kits de motos, aço inox e escapamentos.',
    descricao: [
      'Efetuamos o polimento de rodas de liga leve, polimento de bengalas de motos, todos os kits de motos, polimento de aço inox e escapamentos de moto.',
    ],
    obs: ['Temos profissionais especializados no assunto. Pode ter certeza que o resultado irá te surpreender. Chama no zap!'],
    imagem: IMAGENS.polimentoMetais,
    alt: 'Polimento de metais, alumínio e aço inox na WM Express',
    recomendacoes: ['polimento-tecnico', 'martelinho-ouro', 'lavagem-detalhada-carro'],
  },

  // ---------- REPAROS E PROTEÇÃO ----------
  {
    id: 'martelinho-ouro',
    categoria: 'reparos',
    nome: 'Martelinho de Ouro',
    preco: 'R$ 450,00',
    precoNumero: 450.00,
    resumo: 'Recuperação de lataria amassada com a técnica martelinho de ouro. Sujeito a avaliação técnica.',
    descricao: ['Serviço de recuperação na lataria amassada com a técnica martelinho de ouro.'],
    obs: [
      'O serviço exige a avaliação técnica de um profissional.',
      'O valor pode sofrer alterações devido à dificuldade da execução do serviço.',
    ],
    imagem: IMAGENS.martelinhoOuro,
    alt: 'Martelinho de ouro - recuperação de lataria na WM Express',
    recomendacoes: ['reparos-pintura', 'reparo-troca-vidro', 'insulfilm'],
  },
  {
    id: 'reparo-troca-vidro',
    categoria: 'reparos',
    nome: 'Reparo e Troca de Vidro',
    preco: 'R$ 380,00',
    precoNumero: 380.00,
    resumo: 'Troca de qualquer vidro com marcação seguindo os padrões de qualidade e segurança do seu veículo.',
    descricao: [
      'Seu vidro trincou? Nós temos a solução.',
      'Efetuamos a troca de qualquer vidro.',
      'Efetuamos a marcação com a numeração contida nos demais vidros, seguindo os padrões de qualidade e segurança que seu veículo merece.',
    ],
    obs: ['O valor do vidro do carro pode variar.'],
    imagem: IMAGENS.reparoTrocaVidro,
    alt: 'Reparo e troca de vidro automotivo na WM Express',
    recomendacoes: ['insulfilm', 'reparos-pintura', 'martelinho-ouro'],
  },
  {
    id: 'reparos-pintura',
    categoria: 'reparos',
    nome: 'Reparos em Pintura',
    preco: 'R$ 650,00',
    precoNumero: 650.00,
    resumo: 'Pintura e re-pintura de peças danificadas que atingiram todas as camadas da pintura.',
    descricao: ['Efetuamos o serviço de pinturas e re-pinturas de peças que foram danificadas e atingiram todas as camadas da pintura.'],
    obs: ['O valor é cobrado por peça pintada.', 'Consulte condições.'],
    imagem: IMAGENS.reparosPintura,
    alt: 'Reparos em pintura automotiva na WM Express',
    recomendacoes: ['martelinho-ouro', 'reparo-troca-vidro', 'insulfilm'],
  },
  {
    id: 'insulfilm',
    categoria: 'reparos',
    nome: 'Insulfilm',
    preco: 'R$ 599,00',
    precoNumero: 599.00,
    resumo: 'Aplicação de películas profissionais carbono, nos tons G5, G20 e G35.',
    descricao: [
      'Execução de aplicação de insulfilm, películas profissionais carbono.',
      'Trabalhamos com G5, G20 e G35.',
    ],
    obs: ['O valor é para carros pequenos e médios, sem aplicação do para-brisa.'],
    imagem: IMAGENS.insulfilm,
    alt: 'Aplicação de insulfilm na WM Express',
    recomendacoes: ['reparo-troca-vidro', 'reparos-pintura', 'martelinho-ouro'],
  },

  // ---------- CONVENIÊNCIA ----------
  {
    id: 'leva-e-traz',
    categoria: 'conveniencia',
    nome: 'Sistema Leva e Traz (acima de 1 km)',
    preco: 'R$ 20,00',
    precoNumero: 20.00,
    resumo: 'Vamos ao seu local buscar e entregar o seu veículo para fazer o serviço desejado.',
    descricao: [
      'Está sem tempo para levar e aguardar o seu serviço? Não se preocupe, nós temos o sistema leva e traz.',
      'Esse serviço facilita sua vida: você ganha tempo e a gente vai no seu local buscar e entregar o seu veículo para fazer o serviço desejado.',
    ],
    obs: ['Serviço acima de 1 km.'],
    imagem: IMAGENS.levaTraz,
    alt: 'Sistema leva e traz de veículo na WM Express',
    recomendacoes: ['lavagem-simples-carro', 'higienizacao-prata', 'troca-filtro-ar'],
  },

  // ---------- PACOTES ----------
  {
    id: 'pacote-1',
    categoria: 'pacotes',
    nome: 'Pacote de Serviços 1',
    preco: 'R$ 1.500,00',
    precoNumero: 1500.00,
    resumo: 'Higienização prata, lavagem de motor, lavagem de chassis e lavagem detalhada em um só pacote.',
    descricao: [],
    inclui: ['Higienização Prata', 'Lavagem de Motor', 'Lavagem de Chassis', 'Lavagem Detalhada'],
    tipo: 'pacote',
    imagem: IMAGENS.pacote1,
    alt: 'Pacote de serviços 1 da WM Express',
    recomendacoes: ['higienizacao-prata', 'lavagem-motor', 'lavagem-detalhada-carro'],
  },
  {
    id: 'pacote-2',
    categoria: 'pacotes',
    nome: 'Pacote de Serviços 2',
    preco: 'R$ 900,00',
    precoNumero: 900.00,
    resumo: 'Higienização prata, oxi-sanitização, troca do filtro do ar condicionado e lavagem simples.',
    descricao: [],
    inclui: ['Higienização Prata', 'Oxi-sanitização', 'Troca Filtro Ar Condicionado', 'Lavagem Simples'],
    tipo: 'pacote',
    imagem: IMAGENS.pacote2,
    alt: 'Pacote de serviços 2 da WM Express',
    recomendacoes: ['higienizacao-prata', 'oxi-sanitizacao', 'lavagem-simples-carro'],
  },
  {
    id: 'pacote-3',
    categoria: 'pacotes',
    nome: 'Pacote de Serviços 3',
    preco: 'R$ 1.500,00',
    precoNumero: 1500.00,
    resumo: 'Higienização ouro, lavagem de motor, lavagem detalhada e oxi-sanitização em um só pacote.',
    descricao: [],
    inclui: ['Higienização Ouro', 'Lavagem de Motor', 'Lavagem Detalhada', 'Oxi-sanitização'],
    tipo: 'pacote',
    imagem: IMAGENS.pacote3,
    alt: 'Pacote de serviços 3 da WM Express',
    recomendacoes: ['higienizacao-ouro', 'lavagem-motor', 'lavagem-detalhada-carro'],
  },
  {
    id: 'pacote-polimento-vitrificacao',
    categoria: 'pacotes',
    nome: 'Pacote de Polimento Profissional com Vitrificação',
    preco: 'R$ 2.800,00',
    precoNumero: 2800.00,
    resumo: 'Polimento profissional com vitrificação, incluindo toda a lataria externa, maçanetas e emblemas.',
    descricao: [
      'Polimento profissional com vitrificação.',
      'Serviço para veículos Hatch e SUV, incluindo toda a lataria externa, maçanetas e emblemas.',
    ],
    obs: ['veículos maiores consultar os valores'],
    obsCard: 'veículos maiores consultar os valores',
    tipo: 'pacote',
    imagem: IMAGENS.pacote4,
    alt: 'Pacote de Polimento Profissional com Vitrificação na WM Express',
    recomendacoes: ['polimento-tecnico', 'polimento-tecnico-suv', 'higienizacao-ouro'],
  },

  // ---------- SERVIÇOS RESIDENCIAIS ----------
  {
    id: 'camara-seguranca',
    categoria: 'residencial',
    nome: 'Câmera de Segurança Instalada',
    preco: 'R$ 800,00',
    precoNumero: 800.00,
    resumo: 'Venda e instalação de câmeras de segurança com controle direto pelo celular.',
    descricao: [
      'Trabalhamos com venda e instalação de câmeras de segurança.',
      'Sua casa ou sua empresa protegida, e você controla tudo na palma da mão, diretamente do seu celular.',
      'Trabalhamos com produtos de excelente qualidade.',
    ],
    obs: ['Para mais informações, chama no WhatsApp.'],
    selo: 'Novo Serviço',
    tipo: 'residencial',
    whatsOverride: 'Olá! Vim pelo site da WM Express e tenho interesse na instalação de câmera de segurança. Gostaria de mais informações.',
    imagem: IMAGENS.camaraSeguranca,
    alt: 'Instalação de câmera de segurança pela WM Express',
    recomendacoes: [],
  },
];

// ============================================================
// GALERIA DE FOTOS REAIS (página inicial)
// tamanho: 'grande' (destaque 2x2) | 'largo' (2 colunas) | padrão
// ============================================================
const GALERIA = [
  { imagem: IMAGENS.galeriaRenegade, alt: 'Renegade finalizado na WM Express', tamanho: 'grande' },
  { imagem: IMAGENS.galeriaCorolla, alt: 'Corolla finalizado na WM Express', tamanho: 'largo' },
  { imagem: IMAGENS.galeriaI30B, alt: 'I-30 finalizado na WM Express', tamanho: '' },
  { imagem: IMAGENS.galeriaMercedes, alt: 'Mercedes finalizada na WM Express', tamanho: '' },
  { imagem: IMAGENS.galeriaTeraB, alt: 'Tera finalizado na WM Express', tamanho: '' },
  { imagem: IMAGENS.lavagemSimplesCarro, alt: 'Lavagem simples completa de carro pequeno na WM Express', tamanho: 'largo' },
  { imagem: IMAGENS.galeriaI30, alt: 'I-30 finalizado na WM Express', tamanho: '' },
  { imagem: IMAGENS.galeriaTera, alt: 'Tera finalizado na WM Express', tamanho: '' },
  { imagem: IMAGENS.polimentoTecnico, alt: 'Polimento técnico da pintura na WM Express', tamanho: '' },
  { imagem: IMAGENS.higienizacaoOuro, alt: 'Higienização ouro do interior do veículo na WM Express', tamanho: '' },
];

// ============================================================
// ADICIONAIS EXCLUSIVOS PARA LAVAGENS (serviços com allowAddons)
// ============================================================
const ADICIONAIS_LAVAGEM = [
  { id: 'cera', nome: 'Cera', preco: 20.00 },
  { id: 'shampoo-acido', nome: 'Shampoo desincrustante ácido', preco: 20.00 },
];

document.addEventListener('DOMContentLoaded', () => {
  // ---------- CONFIG: LINKS DE WHATSAPP E GOOGLE (fonte única) ----------
  document.querySelectorAll('[data-wa]').forEach(el => {
    el.href = `https://wa.me/${WM.whatsapp}`;
  });
  document.querySelectorAll('[data-google-reviews]').forEach(el => {
    el.href = WM.googleReviewsUrl;
  });

  // ---------- MENU MOBILE ----------
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menu-toggle');
  const headerNav = document.getElementById('header-nav');
  const cartSidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('overlay');
  const cartCount = document.getElementById('cart-count');

  function abrirMenu() {
    headerNav.classList.add('open');
    menuToggle.classList.add('active');
    document.body.classList.add('menu-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Fechar menu');
  }

  function fecharMenu() {
    headerNav.classList.remove('open');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    if (!cartSidebar.classList.contains('open') && !modalOverlay.classList.contains('open') && (!lightboxEl || !lightboxEl.classList.contains('open'))) {
      document.body.classList.remove('menu-open');
    }
  }

  if (menuToggle && headerNav) {
    menuToggle.addEventListener('click', () => {
      headerNav.classList.contains('open') ? fecharMenu() : abrirMenu();
    });
    headerNav.querySelectorAll('a').forEach(link => link.addEventListener('click', fecharMenu));
  }

  // ---------- HEADER: EFEITO AO ROLAR ----------
  function handleScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---------- DESTACAR LINK ATIVO ----------
  document.querySelectorAll('.header__link').forEach(link => {
    const href = (link.getAttribute('href') || '').split('#')[0] || 'index.html';
    if (location.pathname.endsWith(href)) link.classList.add('active');
  });

  // ---------- RENDERIZAÇÃO DO CATÁLOGO (somente em catalogo.html) ----------
  const catalogoRoot = document.getElementById('catalogo-root');
  if (catalogoRoot) {
    CATEGORIAS.forEach((cat) => {
      const servicosCat = SERVICOS.filter(s => s.categoria === cat.id);
      const sec = document.createElement('section');
      sec.className = 'categoria reveal';
      sec.id = cat.id;
      sec.setAttribute('aria-labelledby', `titulo-${cat.id}`);
      sec.innerHTML = `
        <div class="categoria__header">
          <span class="categoria__overline">Categoria ${cat.numero}</span>
          <h2 class="categoria__titulo" id="titulo-${cat.id}">${cat.titulo}</h2>
          <p class="categoria__desc">${cat.descricao}</p>
        </div>
        <div class="categoria__grid">
          ${servicosCat.map(criarCard).join('')}
        </div>
      `;
      catalogoRoot.appendChild(sec);
    });
  }

  function criarCard(servico) {
    const mods = [];
    if (servico.destaque) mods.push('servico-card--destaque');
    if (servico.tipo === 'pacote') mods.push('servico-card--pacote');
    if (servico.tipo === 'residencial') mods.push('servico-card--residencial');
    const badge = servico.selo
      ? `<span class="servico-badge ${servico.tipo === 'residencial' ? 'servico-badge--novo' : ''}">${servico.selo}</span>`
      : '';
    const inclui = servico.inclui
      ? `<ul class="servico-inclui">${servico.inclui.map(i => `<li>${i}</li>`).join('')}</ul>`
      : `<p class="servico-resumo">${servico.resumo}</p>`;
    const obsCard = servico.obsCard ? `<p class="servico-obs">${servico.obsCard}</p>` : '';
    return `
      <article class="servico-card ${mods.join(' ')}">
        <div class="card-media">
          <img src="${servico.imagem}" alt="${servico.alt}" class="servico-img" loading="lazy" onerror="this.onerror=null;this.src='img/WMEXPRESS.jpg'">
          ${badge}
        </div>
        <div class="servico-info">
          <h3 class="servico-nome">${servico.nome}</h3>
          <p class="servico-preco">${servico.preco}</p>
          ${inclui}
          ${obsCard}
          <button type="button" class="servico-btn" data-abrir="${servico.id}">Ver detalhes</button>
        </div>
      </article>
    `;
  }

  // ---------- BARRA DE CATEGORIAS ----------
  const barra = document.getElementById('categoria-bar');
  if (barra) {
    const itens = [{ alvo: 'servicos', rotulo: 'Todos' }, ...CATEGORIAS.map(c => ({ alvo: c.id, rotulo: c.rotulo }))];
    itens.forEach(b => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'categorias__item';
      btn.setAttribute('data-alvo', b.alvo);
      btn.textContent = b.rotulo;
      if (b.alvo === 'servicos') {
        btn.classList.add('active');
        btn.setAttribute('aria-current', 'true');
      }
      barra.appendChild(btn);
    });

    barra.addEventListener('click', (e) => {
      const btn = e.target.closest('.categorias__item');
      if (!btn) return;
      const alvo = document.getElementById(btn.getAttribute('data-alvo'));
      if (alvo) {
        alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    // Destaque da categoria visível
    function ativarCategoria(id) {
      barra.querySelectorAll('.categorias__item').forEach(b => {
        const ativo = b.getAttribute('data-alvo') === id;
        b.classList.toggle('active', ativo);
        if (ativo) b.setAttribute('aria-current', 'true');
        else b.removeAttribute('aria-current');
      });
    }

    const observerCat = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) ativarCategoria(entry.target.id);
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

    document.querySelectorAll('.categoria').forEach(sec => observerCat.observe(sec));

    window.addEventListener('scroll', () => {
      const primeira = document.getElementById('lavagens');
      if (primeira && primeira.getBoundingClientRect().top > 140) ativarCategoria('servicos');
    }, { passive: true });
  }

  // ---------- MODAL DE SERVIÇO ----------
  const modalOverlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');
  let ultimoFoco = null;
  let servicoModalAtual = null;
  let adicionaisModal = {};

  function formatarMoeda(v) {
    return 'R$ ' + Number(v).toFixed(2).replace('.', ',');
  }

  function totalComAdicionais(servico, selecionados) {
    const extra = ADICIONAIS_LAVAGEM
      .filter(a => selecionados[a.id])
      .reduce((s, a) => s + a.preco, 0);
    return servico.precoNumero + extra;
  }

  function montarMensagemWhatsApp(servico, selecionados) {
    if (servico.whatsOverride) return servico.whatsOverride;
    if (servico.allowAddons) {
      const escolhidos = ADICIONAIS_LAVAGEM.filter(a => selecionados[a.id]);
      let msg = `Olá! Tenho interesse no serviço de ${servico.nome}.\n\n`;
      msg += `Valor do serviço: ${servico.preco}\n`;
      if (escolhidos.length) {
        msg += `\nAdicionais:\n`;
        escolhidos.forEach(a => { msg += `- ${a.nome}: + ${formatarMoeda(a.preco)}\n`; });
        msg += `\nValor total: ${formatarMoeda(totalComAdicionais(servico, selecionados))}`;
      } else {
        msg += `Adicionais: Nenhum\n`;
        msg += `Valor total: ${formatarMoeda(totalComAdicionais(servico, selecionados))}`;
      }
      return msg;
    }
    return `Olá! Vim pelo site da WM Express e tenho interesse no serviço de ${servico.nome}, no valor de ${servico.preco}. Gostaria de mais informações.`;
  }

  function linkWhatsApp(servico, selecionados) {
    return `https://wa.me/${WM.whatsapp}?text=${encodeURIComponent(montarMensagemWhatsApp(servico, selecionados || {}))}`;
  }

  function montarAdicionaisHTML() {
    return `
      <div class="modal__adicionais">
        <h4>Adicionais</h4>
        ${ADICIONAIS_LAVAGEM.map(a => `
          <label class="adicional">
            <input type="checkbox" data-adicional="${a.id}">
            <span class="adicional__nome">${a.nome}</span>
            <span class="adicional__preco">+ ${formatarMoeda(a.preco)}</span>
          </label>
        `).join('')}
      </div>
      <div class="modal__total">
        <span>Valor total</span>
        <strong data-total-modal>${servicoModalAtual.preco}</strong>
      </div>
    `;
  }

  function renderizarModal(servico) {
    servicoModalAtual = servico;
    adicionaisModal = {};
    const badge = servico.selo
      ? `<span class="servico-badge ${servico.tipo === 'residencial' ? 'servico-badge--novo' : ''}">${servico.selo}</span>`
      : '';
    const categoria = (CATEGORIAS.find(c => c.id === servico.categoria) || {}).titulo || '';
    const desc = (servico.descricao || []).map(p => `<p>${p}</p>`).join('');
    const destaques = servico.destaques
      ? `<ul class="modal__destaques">${servico.destaques.map(d => `<li>${d}</li>`).join('')}</ul>`
      : '';
    const inclui = servico.inclui
      ? `<div class="modal__obs"><strong>Inclui</strong>${servico.inclui.map(i => `<p>${i}</p>`).join('')}</div>`
      : '';
    const obs = servico.obs && servico.obs.length
      ? `<div class="modal__obs"><strong>Observações</strong>${servico.obs.map(o => `<p>${o}</p>`).join('')}</div>`
      : '';
    const adicionais = servico.allowAddons ? montarAdicionaisHTML() : '';
    const recom = recomendar(servico);
    const tipoMod = servico.tipo === 'pacote' ? ' modal__corpo--pacote' : '';

    modalContent.innerHTML = `
      <div class="modal__media">
        <img src="${servico.imagem}" alt="${servico.alt}" onerror="this.onerror=null;this.src='img/WMEXPRESS.jpg'">
        ${badge}
      </div>
      <div class="modal__corpo${tipoMod}">
        <span class="modal__categoria">${categoria}</span>
        <h3 class="modal__titulo" id="modal-titulo" tabindex="-1">${servico.nome}</h3>
        <p class="modal__preco">${servico.preco}</p>
        ${desc}
        ${destaques}
        ${inclui}
        ${obs}
        ${adicionais}
        <a href="${linkWhatsApp(servico, adicionaisModal)}" class="modal__whats" target="_blank" rel="noopener">
          <i class="ph ph-whatsapp-logo" aria-hidden="true"></i> Solicitar pelo WhatsApp
        </a>
        <button type="button" class="modal__carrinho" data-carrinho="${servico.id}">
          <i class="ph ph-shopping-cart-simple" aria-hidden="true"></i> Adicionar ao carrinho
        </button>
        ${recom}
      </div>
    `;
  }

  function recomendar(servico) {
    const recs = (servico.recomendacoes || [])
      .map(id => SERVICOS.find(s => s.id === id))
      .filter(Boolean);
    if (!recs.length) return '';
    return `
      <div class="vocpodegostar">
        <h4>Você pode gostar</h4>
        <div class="vocpodegostar__grid">
          ${recs.map(r => `
            <button type="button" class="recomendacao" data-abrir="${r.id}" aria-label="Ver ${r.nome}">
              <img src="${r.imagem}" alt="${r.alt}" loading="lazy" onerror="this.onerror=null;this.src='img/WMEXPRESS.jpg'">
              <span class="recomendacao__nome">${r.nome}</span>
              <span class="recomendacao__preco">${r.preco}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  function abrirModal(id) {
    const servico = SERVICOS.find(s => s.id === id);
    if (!servico || !modalOverlay) return;
    ultimoFoco = document.activeElement;
    renderizarModal(servico);
    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    if (modalClose) modalClose.focus();
  }

  function fecharModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    if (!cartSidebar.classList.contains('open') && !headerNav.classList.contains('open') && (!lightboxEl || !lightboxEl.classList.contains('open'))) {
      document.body.classList.remove('menu-open');
    }
    if (ultimoFoco && typeof ultimoFoco.focus === 'function') ultimoFoco.focus();
  }

  function trocarServicoModal(id) {
    const servico = SERVICOS.find(s => s.id === id);
    if (!servico) return;
    modalContent.classList.add('switching');
    window.setTimeout(() => {
      renderizarModal(servico);
      modalContent.classList.remove('switching');
      const titulo = document.getElementById('modal-titulo');
      if (titulo) titulo.focus();
    }, 180);
  }

  if (modalOverlay && modalClose) {
    modalClose.addEventListener('click', fecharModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) fecharModal();
    });
    // Focus trap
    modalOverlay.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      const focusables = modalOverlay.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  // ---------- GALERIA E LIGHTBOX ----------
  const galeriaRoot = document.getElementById('galeria-root');
  if (galeriaRoot) {
    GALERIA.forEach((item, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `galeria-item${item.tamanho ? ` galeria-item--${item.tamanho}` : ''} reveal`;
      btn.setAttribute('data-galeria', i);
      btn.setAttribute('aria-label', `Ampliar foto: ${item.alt}`);
      btn.innerHTML = `<img src="${item.imagem}" alt="${item.alt}" loading="lazy" onerror="this.onerror=null;this.src='img/WMEXPRESS.jpg'">`;
      galeriaRoot.appendChild(btn);
    });
  }

  const lightboxEl = document.getElementById('lightbox');
  let galeriaAtual = GALERIA;
  let indiceGaleria = 0;
  let touchX = null;

  function atualizarLightbox() {
    if (!lightboxEl) return;
    const item = galeriaAtual[indiceGaleria];
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    const counter = document.getElementById('lightbox-counter');
    if (img) { img.src = item.imagem; img.alt = item.alt; }
    if (caption) caption.textContent = item.alt;
    if (counter) counter.textContent = `${indiceGaleria + 1} / ${galeriaAtual.length}`;
  }

  function abrirLightbox(indice) {
    if (!lightboxEl) return;
    galeriaAtual = GALERIA;
    indiceGaleria = indice;
    atualizarLightbox();
    lightboxEl.classList.add('open');
    lightboxEl.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    const fechar = document.getElementById('lightbox-close');
    if (fechar) fechar.focus();
  }

  // Imagem única (produtos, banner descarte etc.) no lightbox existente
  function abrirLightboxUnica(imagem, alt) {
    if (!lightboxEl) return;
    galeriaAtual = [{ imagem, alt }];
    indiceGaleria = 0;
    atualizarLightbox();
    lightboxEl.classList.add('open');
    lightboxEl.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    const fechar = document.getElementById('lightbox-close');
    if (fechar) fechar.focus();
  }

  function fecharLightbox() {
    if (!lightboxEl) return;
    lightboxEl.classList.remove('open');
    lightboxEl.setAttribute('aria-hidden', 'true');
    if (!cartSidebar.classList.contains('open') && !headerNav.classList.contains('open') && !modalOverlay.classList.contains('open')) {
      document.body.classList.remove('menu-open');
    }
  }

  function navegarLightbox(delta) {
    if (!lightboxEl || !lightboxEl.classList.contains('open')) return;
    indiceGaleria = (indiceGaleria + delta + galeriaAtual.length) % galeriaAtual.length;
    atualizarLightbox();
  }

  if (lightboxEl) {
    document.getElementById('lightbox-close')?.addEventListener('click', fecharLightbox);
    document.getElementById('lightbox-prev')?.addEventListener('click', () => navegarLightbox(-1));
    document.getElementById('lightbox-next')?.addEventListener('click', () => navegarLightbox(1));
    lightboxEl.addEventListener('click', (e) => {
      if (e.target === lightboxEl) fecharLightbox();
    });
    // Navegação por teclado dentro do lightbox
    lightboxEl.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        const focusables = lightboxEl.querySelectorAll('button');
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
    // Swipe no celular
    lightboxEl.addEventListener('touchstart', (e) => {
      touchX = e.changedTouches[0].clientX;
    }, { passive: true });
    lightboxEl.addEventListener('touchend', (e) => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 40) navegarLightbox(dx < 0 ? 1 : -1);
      touchX = null;
    }, { passive: true });
  }

  // ---------- CARRINHO ----------
  function abrirCarrinho() {
    cartSidebar.classList.add('open');
    overlay.classList.add('show');
    document.body.classList.add('menu-open');
    fecharMenu();
  }

  function fecharCarrinho() {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('show');
    if (!headerNav.classList.contains('open') && !modalOverlay.classList.contains('open') && (!lightboxEl || !lightboxEl.classList.contains('open'))) {
      document.body.classList.remove('menu-open');
    }
  }

  function animarContador() {
    if (!cartCount) return;
    cartCount.classList.remove('pop');
    void cartCount.offsetWidth;
    cartCount.classList.add('pop');
  }

  function adicionarAoCarrinho(id, nome, preco, abrir = true) {
    let carrinho = JSON.parse(localStorage.getItem('wmCart')) || [];
    const itemExistente = carrinho.find(item => item.nome === nome);
    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      carrinho.push({ id: id || nome, nome, preco, quantidade: 1 });
    }
    localStorage.setItem('wmCart', JSON.stringify(carrinho));
    atualizarSidebar();
    animarContador();
    if (abrir) abrirCarrinho();
  }

  window.adicionarPacote = function(nome, preco) {
    adicionarAoCarrinho(null, nome, preco);
  };

  window.adicionarAoCarrinho = function(id, nome, preco) {
    adicionarAoCarrinho(id, nome, preco, true);
  };

  // ---------- DELEGAÇÃO DE CLIQUE ----------
  document.addEventListener('click', (e) => {
    const btnProd = e.target.closest('[data-abrir-produtos]');
    if (btnProd) {
      abrirLightboxUnica(IMAGENS.produtos, 'Produtos utilizados pela WM Express');
      return;
    }
    const btnDescarte = e.target.closest('[data-abrir-descarte]');
    if (btnDescarte) {
      abrirLightboxUnica(IMAGENS.descarte, 'Banner de descarte sustentável da WM Express');
      return;
    }
    const btnGal = e.target.closest('[data-galeria]');
    if (btnGal) {
      abrirLightbox(parseInt(btnGal.getAttribute('data-galeria'), 10));
      return;
    }
    const btnAbrir = e.target.closest('[data-abrir]');
    if (btnAbrir) {
      const id = btnAbrir.getAttribute('data-abrir');
      if (modalOverlay.classList.contains('open')) trocarServicoModal(id);
      else abrirModal(id);
      return;
    }
    const btnCart = e.target.closest('[data-carrinho]');
    if (btnCart) {
      const s = SERVICOS.find(x => x.id === btnCart.getAttribute('data-carrinho'));
      if (s) adicionarAoCarrinho(s.id, s.nome, s.precoNumero, false);
      return;
    }
    if (e.target.id === 'open-cart' || e.target.closest('#open-cart')) abrirCarrinho();
    if (e.target.id === 'overlay') fecharCarrinho();
    if (e.target.classList.contains('cart-close')) fecharCarrinho();
  });

  // ---------- ADICIONAIS: ATUALIZAR TOTAL E WHATSAPP AO VIVO ----------
  document.addEventListener('change', (e) => {
    const cb = e.target.closest('[data-adicional]');
    if (!cb) return;
    const id = cb.getAttribute('data-adicional');
    if (cb.checked) adicionaisModal[id] = true;
    else delete adicionaisModal[id];

    const label = cb.closest('.adicional');
    if (label) label.classList.toggle('adicional--ativo', cb.checked);

    const totalEl = document.querySelector('[data-total-modal]');
    if (totalEl && servicoModalAtual) {
      totalEl.textContent = formatarMoeda(totalComAdicionais(servicoModalAtual, adicionaisModal));
    }
    const whats = document.querySelector('.modal__whats');
    if (whats && servicoModalAtual) {
      whats.href = linkWhatsApp(servicoModalAtual, adicionaisModal);
    }
  });

  // ---------- TECLAS: ESC (modal > lightbox > carrinho > menu) e setas ----------
  document.addEventListener('keydown', (e) => {
    if (lightboxEl && lightboxEl.classList.contains('open')) {
      if (e.key === 'Escape') fecharLightbox();
      if (e.key === 'ArrowLeft') navegarLightbox(-1);
      if (e.key === 'ArrowRight') navegarLightbox(1);
      return;
    }
    if (e.key === 'Escape') {
      if (modalOverlay.classList.contains('open')) fecharModal();
      else if (cartSidebar.classList.contains('open')) fecharCarrinho();
      else fecharMenu();
    }
  });

  // ---------- RENDERIZAR SIDEBAR ----------
  function atualizarSidebar() {
    const carrinho = JSON.parse(localStorage.getItem('wmCart')) || [];
    const upsellLeva = 20.00;
    const upsellFiltro = 99.90;
    const upsellState = JSON.parse(localStorage.getItem('wmUpsell')) || { leva: false, filtro: false };

    let itemsHTML = '';
    let subtotal = 0;
    carrinho.forEach(item => {
      const totalItem = item.preco * item.quantidade;
      subtotal += totalItem;
      itemsHTML += `
        <div class="cart-item">
          <div class="cart-item-info">
            <h4>${item.nome}</h4>
            <p>Qtd: ${item.quantidade} x R$ ${item.preco.toFixed(2)}</p>
          </div>
          <button class="cart-item-remove" onclick="removerItem('${item.nome}')" aria-label="Remover ${item.nome}">
            <i class="ph ph-trash"></i>
          </button>
        </div>
      `;
    });

    let upsellTotal = 0;
    if (upsellState.leva) upsellTotal += upsellLeva;
    if (upsellState.filtro) upsellTotal += upsellFiltro;

    const total = subtotal + upsellTotal;

    if (cartCount) cartCount.textContent = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

    cartSidebar.innerHTML = `
      <div class="cart-header">
        <h3>Seu Carrinho</h3>
        <button class="cart-close" aria-label="Fechar carrinho">&times;</button>
      </div>
      <div class="cart-items">
        ${itemsHTML || '<p style="color:#aaa; text-align:center; padding:1rem 0;">Carrinho vazio.</p>'}
      </div>
      <div class="cart-upsell">
        <h4>Adicionar Serviços Extras</h4>
        <label>
          <input type="checkbox" id="upsell-leva" ${upsellState.leva ? 'checked' : ''}>
          Sistema Leva e Traz (+ R$ 20,00)
        </label>
        <label>
          <input type="checkbox" id="upsell-filtro" ${upsellState.filtro ? 'checked' : ''}>
          Filtro de Ar Condicionado (+ R$ 99,90)
        </label>
      </div>
      <div class="cart-total">
        <p>Subtotal: R$ ${subtotal.toFixed(2)}</p>
        <p>Extras: R$ ${upsellTotal.toFixed(2)}</p>
        <h3>Total: R$ ${total.toFixed(2)}</h3>
      </div>
      <div class="cart-checkout">
        <input type="text" id="cliente-nome" placeholder="Nome" required>
        <input type="text" id="cliente-sobrenome" placeholder="Sobrenome" required>
        <button class="btn btn--azul" onclick="finalizarPedido()">Finalizar Pedido via WhatsApp</button>
      </div>
    `;

    document.getElementById('upsell-leva')?.addEventListener('change', (e) => {
      upsellState.leva = e.target.checked;
      localStorage.setItem('wmUpsell', JSON.stringify(upsellState));
      atualizarSidebar();
    });
    document.getElementById('upsell-filtro')?.addEventListener('change', (e) => {
      upsellState.filtro = e.target.checked;
      localStorage.setItem('wmUpsell', JSON.stringify(upsellState));
      atualizarSidebar();
    });
  }

  window.removerItem = function(nome) {
    let carrinho = JSON.parse(localStorage.getItem('wmCart')) || [];
    carrinho = carrinho.filter(item => item.nome !== nome);
    localStorage.setItem('wmCart', JSON.stringify(carrinho));
    atualizarSidebar();
  };

  // ---------- FINALIZAR PEDIDO (número centralizado em WM.whatsapp) ----------
  window.finalizarPedido = function() {
    const nome = document.getElementById('cliente-nome')?.value.trim();
    const sobrenome = document.getElementById('cliente-sobrenome')?.value.trim();
    if (!nome || !sobrenome) {
      alert('Por favor, preencha nome e sobrenome.');
      return;
    }

    const carrinho = JSON.parse(localStorage.getItem('wmCart')) || [];
    if (carrinho.length === 0) {
      alert('Seu carrinho está vazio.');
      return;
    }

    const upsellState = JSON.parse(localStorage.getItem('wmUpsell')) || { leva: false, filtro: false };
    const upsellLeva = 20.00;
    const upsellFiltro = 99.90;
    let subtotal = 0;
    carrinho.forEach(item => subtotal += item.preco * item.quantidade);

    let extras = [];
    let totalExtras = 0;
    if (upsellState.leva) { extras.push('Sistema Leva e Traz (+ R$ 20,00)'); totalExtras += upsellLeva; }
    if (upsellState.filtro) { extras.push('Filtro de Ar Condicionado (+ R$ 99,90)'); totalExtras += upsellFiltro; }

    const total = subtotal + totalExtras;

    let mensagem = `*NOVO PEDIDO - WM EXPRESS*\n`;
    mensagem += `*Cliente:* ${nome} ${sobrenome}\n\n`;
    mensagem += `*Itens do Pedido:*\n`;
    carrinho.forEach(item => {
      mensagem += `- ${item.nome} (Qtd: ${item.quantidade}) - R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
    });
    if (extras.length > 0) {
      mensagem += `\n*Extras:*\n`;
      extras.forEach(extra => mensagem += `- ${extra}\n`);
    }
    mensagem += `\n*Subtotal:* R$ ${subtotal.toFixed(2)}\n`;
    mensagem += `*Extras:* R$ ${totalExtras.toFixed(2)}\n`;
    mensagem += `*TOTAL: R$ ${total.toFixed(2)}*\n`;
    mensagem += `\nAguardando confirmação da equipe WM Express.`;

    const urlEncoded = encodeURIComponent(mensagem);
    const whatsappLink = `https://wa.me/${WM.whatsapp}?text=${urlEncoded}`;
    window.open(whatsappLink, '_blank');
  };

  // ---------- INICIALIZAÇÃO ----------
  atualizarSidebar();

  // ---------- ANIMAÇÕES DE REVEAL ----------
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }
});
