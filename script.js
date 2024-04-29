let nome = window.prompt (" Digite seu nome.")
// Verifica se o usuário inseriu um nome
if (nome !== null && nome !== "") {
    // Exibe uma saudação personalizada
    let saudacao = "Olá, " + nome + "! Muito Obrigado por acessar meu Webfólio.";
    alert(saudacao);
} else {
    // Exibe uma mensagem se o usuário não inseriu um nome
    alert("Você não inseriu um nome. Por favor, recarregue a página e insira seu nome.");
}