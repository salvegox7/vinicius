// Pegadinha botão de cima
const btnTop = document.getElementById('btnTop');
const msgTop = document.getElementById('msgTop');
btnTop.addEventListener('click', () => {
  msgTop.textContent = "Não é esse besta, é o de baixo";
  msgTop.classList.add('show');
});

// Botão correto (embaixo)
const btnBottom = document.getElementById('btnBottom');
const msgBottom = document.getElementById('msgBottom');
const opinion1Container = document.getElementById('opinion1Container');
btnBottom.addEventListener('click', () => {
  msgBottom.textContent = "O vini7 é lindo";
  msgBottom.classList.add('show');
  opinion1Container.style.display = "block";
});

// Pegadinha extra
const funBtn = document.getElementById('funBtn');
const funMsg = document.getElementById('funMsg');
funBtn.addEventListener('click', () => {
  funMsg.textContent = "Não é nada não kkkkkkkk. Não fica brava lo";
  funMsg.classList.add('show');
});