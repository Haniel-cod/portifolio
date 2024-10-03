document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const mensagemEnviada = document.getElementById('mensagem-enviada');

    if (!nome || !email || !mensagem) {
        mensagemEnviada.innerHTML = '<p>Preencha todos os campos antes de enviar.</p>';
        return;
    }

    // Cria um objeto com os dados do formulário
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('mensagem', mensagem);

    // Envia os dados usando fetch (AJAX)
    fetch('https://formspree.io/f/xrbgzgej', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            mensagemEnviada.innerHTML = `<p>Obrigado, ${nome}. Sua mensagem foi enviada com sucesso!</p>`;
            document.getElementById('contact-form').reset(); // Limpa o formulário após o envio
        } else {
            mensagemEnviada.innerHTML = '<p>Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.</p>';
        }
    }).catch(error => {
        mensagemEnviada.innerHTML = '<p>Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.</p>';
    });
});
