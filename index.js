// Exemplo: Alterar o texto de um elemento HTML
document.getElementById('meuElemento').innerHTML = 'Novo Texto';
// Exemplo: Adicionar um evento de clique a um botão
document.getElementById('meuBotao').addEventListener('click', function() {
    // Lógica a ser executada quando o botão for clicado
    alert('Botão clicado!');
  });
// Exemplo: Requisição GET usando XMLHttpRequest
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.exemplo.com/dados', true);

xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Lógica para lidar com os dados recebidos
    console.log(xhr.responseText);
  } else {
    // Tratar erros
    console.error('Erro na requisição');
  }
};

xhr.send();
// Exemplo: Armazenar e recuperar dados no armazenamento local
localStorage.setItem('chave', 'valor');
var valor = localStorage.getItem('chave');
console.log(valor); // Saída: valor
  