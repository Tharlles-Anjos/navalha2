document.addEventListener('DOMContentLoaded', function () {
    // Função para lidar com o envio do formulário de agendamento
    const form = document.querySelector('#contact form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Coletar os valores do formulário
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const date = document.querySelector('#date').value;
        const time = document.querySelector('#time').value;

        // Validar os dados (simples exemplo)
        if (name && email && date && time) {
            // Construir a mensagem
            const message = `Olá, meu nome é ${name}. Gostaria de agendar um horário para ${date} às ${time}. Meu email é ${email}.`;

            // Codificar a mensagem para ser usada em uma URL
            const encodedMessage = encodeURIComponent(message);

            // Número de telefone do WhatsApp (substitua pelo número da barbearia)
            const phoneNumber = '5551999999999'; // Número no formato internacional

            // Construir a URL do WhatsApp
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Redirecionar para o WhatsApp
            window.open(whatsappURL, '_blank');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Função para mostrar/esconder o botão "Voltar ao Topo"
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Função para rolar a página até o topo
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
