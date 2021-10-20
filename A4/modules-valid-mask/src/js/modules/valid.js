export function validaNome() {
    let nome = document.querySelector('.nome')
    if (nome.value == "") {
        nome.classList.add('errorInput')
        return true
    } else {
        nome.classList.remove('errorInput')
        return false
    }
}

export function validaCpf() {
    let cpf = document.querySelector('.cpf').value
    let cpf1 = document.querySelector('.cpf')
    let cpflen = 14
    if (cpf.length != cpflen | cpf == "") {
        cpf1.classList.add('errorInput')
        cpf1.value = ""
    }
}

export function validaCep() {
    let cep = document.querySelector('.cep')
    let ceplen = 9
    if (cep.value.length != ceplen) {
        cep.classList.add('errorInput')
        cep.value = ""
    }
}

export function validaTelefone() {
    let tel = document.querySelector('.fone').value
    let tele = document.querySelector('.fone')
    let n1 = 14
    let n2 = 15
    if (tel.length != n1 & tel.length != n2) {
        tele.classList.add('errorInput')
        tele.value = ""
    }
}

export function validaDataDeNascimento() {
    let data = document.querySelector('.dt_nasc').value
    let dataok = document.querySelector('.dt_nasc')

    let dia = data.substring(0, 2);
    let mes = data.substring(3, 5)

    let d = parseInt(dia)
    let m = parseInt(mes)

    console.log(d > 31);
    console.log(m > 12);

    if (d > 31 || m > 12) {
        dataok.classList.add('errorInput')
        dataok.value = ""
    }



}

export function validaEmail() {
    let email = document.querySelector('.email').value
    let email1 = document.querySelector('.email')
    if (!email.match(/@/) || email.match(/ /) || !email.match(/.com/)) {
        email1.classList.add('errorInput')
        email1.value = ""
    }
}