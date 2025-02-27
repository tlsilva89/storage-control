document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Captura os valores dos campos do formulário
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;
      const confirmarSenha = document.getElementById('confirmar-senha').value;

      // Verifica se as senhas coincidem
      if (senha !== confirmarSenha) {
          alert('As senhas não coincidem!');
          return;
      }

      // Cria um objeto com os dados do usuário
      const userData = {
          nome: nome,
          email: email,
          senha: senha
      };

      // Armazena os dados no localStorage
      localStorage.setItem('userData', JSON.stringify(userData));

      // Exibe a mensagem de sucesso
      alert('Registro realizado com sucesso!');

      // Redireciona para a página index.html
      window.location.href = '/';
  });
});