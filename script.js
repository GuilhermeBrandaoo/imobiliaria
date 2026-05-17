const botao = document.querySelector('button');

function agendamento() {
    const nome = document.querySelector('#nome').value
    const interesse = document.querySelector('#interesse').value;
    const mensagem = `Olá, meu nome é ${nome} e estou interessado em ${interesse} um imóvel.`;
    const url = `https://wa.me/${5516994301449}?text=${mensagem}`;

    if (nome == "" || telefone == "") {
        alert("Preencha os campos")
    } else {
        window.open(url, '_blank');
    }

    console.log(mensagem)
}