login = document.getElementById("login").value;
senha = document.getElementById("senha").value;

if (login == jonatas && senha == 123) {
    console.log("Sucesso")
} else {
    console.log("ERRO")
}

let btn = document.querySelector(".fa-eye")


btn.addEventListener("click", () => {
    let inputSenha = document.querySelector("#senha")

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

