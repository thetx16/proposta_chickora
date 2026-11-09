// Valores internos de referência, em reais. Ajuste data-price no HTML antes de compartilhar.
const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
document.querySelectorAll('[data-quote]').forEach((proposta) => {
  const total = proposta.querySelector('.quote-total');
  const itens = [...proposta.querySelectorAll('input[type="checkbox"][data-price]')];
  function atualizar() {
    const valor = itens.reduce((soma, item) => soma + (item.checked ? Number(item.dataset.price) : 0), 0);
    total.textContent = moeda.format(valor);
  }
  itens.forEach((item) => item.addEventListener('change', atualizar));
  atualizar();
});
