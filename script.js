// ===== script.js =====
// WM Express Estética Automotiva - Lógica do carrinho e catálogo

document.addEventListener('DOMContentLoaded', () => {
  // ---------- DADOS DO CATÁLOGO ----------
  const pacotes = [
    { id: 'p1', nome: 'Pacote 1', preco: 1500, imagem: 'img/pacote-1.jpg', tipo: 'pacote' },
    { id: 'p2', nome: 'Pacote 2', preco: 900, imagem: 'img/pacote-2.jpg', tipo: 'pacote' },
    { id: 'p3', nome: 'Pacote 3 Premium', preco: 1500, imagem: 'img/pacote-3.jpg', tipo: 'pacote' },
  ];

  const servicos = [
    { id: 's1', nome: 'Polimento Técnico', preco: 599.00, imagem: 'servico-placeholder.jpg' },
    { id: 's2', nome: 'Polimento Técnico SUV', preco: 899.00, imagem: 'servico-placeholder.jpg' },
    { id: 's3', nome: 'Polimento Faróis', preco: 249.90, imagem: 'servico-placeholder.jpg' },
    { id: 's4', nome: 'Polimento de Metais', preco: 600.00, imagem: 'servico-placeholder.jpg' },
    { id: 's5', nome: 'Martelinho de Ouro', preco: 450.00, imagem: 'servico-placeholder.jpg' },
    { id: 's6', nome: 'Reparos em Pintura', preco: 450.00, imagem: 'servico-placeholder.jpg' },
    { id: 's7', nome: 'Higienização Ouro', preco: 1099.90, imagem: 'servico-placeholder.jpg' },
    { id: 's8', nome: 'Higienização Prata', preco: 699.00, imagem: 'servico-placeholder.jpg' },
    { id: 's9', nome: 'Oxi-sanitização', preco: 199.00, imagem: 'servico-placeholder.jpg' },
    { id: 's10', nome: 'Lavagem Detalhada Carro', preco: 899.00, imagem: 'servico-placeholder.jpg' },
    { id: 's11', nome: 'Lavagem Detalhada SUV', preco: 1100.00, imagem: 'servico-placeholder.jpg' },
    { id: 's12', nome: 'Lavagem de Motor', preco: 299.90, imagem: 'servico-placeholder.jpg' },
    { id: 's13', nome: 'Lavagem de Chassis', preco: 199.00, imagem: 'servico-placeholder.jpg' },
    { id: 's14', nome: 'Lavagem Pick-up', preco: 90.00, imagem: 'servico-placeholder.jpg' },
    { id: 's15', nome: 'Lavagem Utilitário', preco: 70.00, imagem: 'servico-placeholder.jpg' },
    { id: 's16', nome: 'Lavagem Simples', preco: 49.99, imagem: 'servico-placeholder.jpg' },
    { id: 's17', nome: 'Lavagem Simples SUV', preco: 70.00, imagem: 'servico-placeholder.jpg' },
    { id: 's18', nome: 'Insulfilm', preco: 400.00, imagem: 'servico-placeholder.jpg' },
    { id: 's19', nome: 'Troca de Vidro', preco: 380.00, imagem: 'servico-placeholder.jpg' },
  ];

  // ---------- RENDERIZAÇÃO DO CATÁLOGO (somente em catalogo.html) ----------
  const catalogoContainer = document.getElementById('catalogo-container');
  if (catalogoContainer) {
    // Renderizar pacotes
    pacotes.forEach(pkg => {
      const card = criarCardItem(pkg, true);
      catalogoContainer.appendChild(card);
    });
    // Renderizar serviços
    servicos.forEach(serv => {
      const card = criarCardItem(serv, false);
      catalogoContainer.appendChild(card);
    });
  }

  function criarCardItem(item, isPacote) {
    const card = document.createElement('div');
    card.className = `servico-card ${isPacote && item.id === 'p3' ? 'card--premium' : ''}`;
    card.innerHTML = `
      <img src="img/${item.imagem}" alt="${item.nome}" class="servico-img" onerror="this.onerror=null;this.src='img/WMEXPRESS.jpg'">
      <div class="servico-info">
        <h3 class="servico-nome">${item.nome}</h3>
        <p class="servico-preco">R$ ${item.preco.toFixed(2)}</p>
        <button class="servico-add" onclick="adicionarAoCarrinho('${item.id}', '${item.nome}', ${item.preco})">
          Adicionar
        </button>
      </div>
    `;
    return card;
  }

  // ---------- FUNÇÕES GLOBAIS (acessíveis via onclick) ----------
  window.adicionarPacote = function(nome, preco) {
    adicionarAoCarrinho(null, nome, preco);
  };

  window.adicionarAoCarrinho = function(id, nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem('wmCart')) || [];
    const itemExistente = carrinho.find(item => item.nome === nome);
    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      carrinho.push({ id: id || nome, nome, preco, quantidade: 1 });
    }
    localStorage.setItem('wmCart', JSON.stringify(carrinho));
    atualizarSidebar();
    abrirCarrinho();
  };

  // ---------- CONTROLE DO CARRINHO ----------
  const cartSidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('overlay');

  function abrirCarrinho() {
    cartSidebar.classList.add('open');
    overlay.classList.add('show');
  }

  function fecharCarrinho() {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('show');
  }

  document.addEventListener('click', (e) => {
    if (e.target.id === 'open-cart') abrirCarrinho();
    if (e.target.id === 'overlay') fecharCarrinho();
    if (e.target.classList.contains('cart-close')) fecharCarrinho();
  });

  // ---------- RENDERIZAR SIDEBAR ----------
  function atualizarSidebar() {
    const carrinho = JSON.parse(localStorage.getItem('wmCart')) || [];
    const upsellLeva = 20.00;
    const upsellFiltro = 99.90;

    // Verificar checkboxes salvos no localStorage (para manter estado)
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
          <button class="cart-item-remove" onclick="removerItem('${item.nome}')">
            <i class="ph ph-trash"></i>
          </button>
        </div>
      `;
    });

    let upsellTotal = 0;
    if (upsellState.leva) upsellTotal += upsellLeva;
    if (upsellState.filtro) upsellTotal += upsellFiltro;

    const total = subtotal + upsellTotal;

    cartSidebar.innerHTML = `
      <div class="cart-header">
        <h3>Seu Carrinho</h3>
        <button class="cart-close">&times;</button>
      </div>
      <div class="cart-items">
        ${itemsHTML || '<p style="color:#aaa;">Carrinho vazio.</p>'}
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

    // Salvar estado dos checkboxes ao mudar
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

  // ---------- FINALIZAR PEDIDO ----------
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
    const whatsappLink = `https://wa.me/5511970298678?text=${urlEncoded}`;
    window.open(whatsappLink, '_blank');
  };

  // ---------- INICIALIZAÇÃO ----------
  // Carregar carrinho e atualizar sidebar sempre que a página carregar
  atualizarSidebar();

  // Aplicar animação de reveal (se houver elementos)
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
});