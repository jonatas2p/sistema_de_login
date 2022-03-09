
    btn.addEventListener("click", () => { 
    let inputSenha = document.querySelector("#senha")
    

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

btn.addEventListener("click", () => { 
    let inputconfSenha = document.querySelector("#senha")
    

    if (inputconfSenha.getAttribute('type') == 'password') {
        inputconfSenha.setAttribute('type', 'text')
    } else {
        inputconfSenha.setAttribute('type', 'password')
    }
})


