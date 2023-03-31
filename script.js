let email = document.getElementById('email');
let senha = document.getElementById('senha');

let saida = document.getElementById('saida');

const correctEmail = "email@example.com";
const correctSenha = "senha";

function validar() {
    if (email.value === "") {
        saida.innerHTML = "<p class='alert alert-warning p-1 mb-2'>Insira um e-mail</p>";
    } else if (email.value !== correctEmail) {
        saida.innerHTML = "<p class='alert alert-warning p-1 mb-2'>E-mail incorreto</p>";
    } else {
        if (senha.value === "") {
            saida.innerHTML = "<p class='alert alert-warning p-1 mb-2'>Insira uma senha</p>";
        } else if (senha.value !== correctSenha) {
            saida.innerHTML = "<p class='alert alert-warning p-1 mb-2'>Senha incorreta</p>";
        } else {
            saida.innerHTML = "<p class='alert alert-success p-1 mb-2'>Entrou com sucesso!</p>";
        }
    }
}
