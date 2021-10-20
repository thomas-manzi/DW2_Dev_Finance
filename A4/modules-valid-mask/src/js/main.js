import { Mask } from './modules/mask.js'
import { validaCpf, validaNome, validaCep, validaTelefone, validaDataDeNascimento, validaEmail } from './modules/valid.js'

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = Mask[field](e.target.value)
    }, false)
})

class Pessoa {
    constructor(nome, cpf, dtNasc, email, telefone, cep) {
        this.nome = nome
        this.cpf = cpf
        this.dtNasc = dtNasc
        this.email = email
        this.telefone = telefone
        this.cep = cep
    }
}

function criaPessoa() {
    const nome = document.querySelector('.nome').value
    const cpf = document.querySelector('.cpf').value
    const dtNasc = document.querySelector('.dt_nasc').value
    const email = document.querySelector('.email').value
    const telefone = document.querySelector('.fone').value
    const cep = document.querySelector('.cep').value
    const pessoa = new Pessoa(nome, cpf, dtNasc, email, telefone, cep)

}



const btn = document.querySelector('#button')

btn.onclick = () => {
    validaNome()
    validaCpf()
    validaCep()
    validaTelefone()
    validaDataDeNascimento()
    validaEmail()

    criaPessoa()
}