/*
var: escopo global (nome = "Lucas, nome = 18, nome = 14.8, nome = true")
let: escopo local
const: 

function hello(){
    return nome + esta dizendo hello!
}
*/
let nome = window.document.getElementById("nome")
let email = window.document.querySelector("#email")
let assunto = window.document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")


/*

    function verificaCampos() {
        if (nome.value == "" || email.value == "" || assunto.value == "") {
            alert("Todos os campos devem ser preenchidos")
        }
        alert("Feedback enviado!")
    }
    */

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.nodeValue.length < 3) {
        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexof("@") == -1 || email.value.indexof(".") == -1) {
        txtEmail.innerHTML = "Email inválido!"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Email válido!"
        txtEmail.style.color = "green"
        emailOk = true

    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto muito grande! máximo 100 caracteres!"
        txtEmail.style.color = "red"
        txtEmail.style.display = "block"

    } else {
        txtEmail.style.display = "none"
        assuntoOk = true

    }

}

function enviar() {
    if (nomeOk == true || emailOk == true || assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha os campos corretamente antes de enviar!")
    }
}

function mapaZoom() {
    mapa.style.widht = "800px"
    mapa.style.height = "650px "
}

function mapaNormal() {
    mapa.style.widht = "600px"
    mapa.style.height = "450px "
}