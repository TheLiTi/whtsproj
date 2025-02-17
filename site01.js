function enviarTexto() {
    // Captura o valor do campo de entrada
    var texto = document.getElementById("meuInput").value;
    
    // Formata o texto para ser usado na URL do WhatsApp
    var textoFormatado = encodeURIComponent(texto);
    
    // Número de telefone com código do país (exemplo: +5511999999999)
    var numero = '+5519978177258';
    
    // URL do WhatsApp com mensagem pré-preenchida
    var url = 'https://api.whatsapp.com/send?phone=19978177258' + numero + '&text=' + textoFormatado;
    
    // Abre a URL em uma nova janela/aba do navegador
    window.open(url, '_blank');
}