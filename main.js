// Função para carregar o cabeçalho dinamicamente
function loadHeader() {
    fetch('content/header.html')  
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o cabeçalho');
            }
            return response.text();  
        })
        .then(data => {

            document.getElementById('header').innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar o cabeçalho:', error);
        });
}

window.onload = loadHeader;

function redirectToGitHub(){
    window.location.href = "https://github.com/KelciaAntiuk";
}
