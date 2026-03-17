function mostrar(secao) {
  document.querySelectorAll('section').forEach(s => {
    s.classList.remove('active');
  });
  document.getElementById(secao).classList.add('active');
}

function enviar() {
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;

  if (nome && email) {
    document.getElementById('msg').innerText = "Mensagem enviada com sucesso!";
  } else {
    document.getElementById('msg').innerText = "Preencha todos os campos.";
  }
}

function addAluno() {
  let nome = document.getElementById('novoAluno').value;

  if (nome) {
    let li = document.createElement('li');
    li.textContent = nome;

    // botão remover
    let btn = document.createElement('button');
    btn.textContent = "Remover";
    btn.style.marginLeft = "10px";

    btn.onclick = function () {
      li.remove();
    };

    li.appendChild(btn);
    document.getElementById('lista').appendChild(li);

    document.getElementById('novoAluno').value = "";
  }
}
