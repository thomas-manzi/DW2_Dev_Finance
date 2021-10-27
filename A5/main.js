import { Mask } from './src/mask.js'
//import { validaCep } from './src/mask.js'


document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = Mask[field](e.target.value)
    }, false)
})

function findCovid(estado) {
    return fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${estado}`)
}

function findEstado(cep) {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
}

const form = document.querySelector('#cep_form');
form.addEventListener('submit', el => {
    el.preventDefault();
    doSubmit();
})

async function doSubmit() {
    const cep_el = document.querySelector('#cep_json')
    const estado = document.querySelector('#cep')

    cep_el.innerHTML = '<div class="spinner-grow" role="status"><span class="sr-only">Carregando...</span></div>';

    try {
        const cepResponse = await findEstado(estado.value);
        const data = await cepResponse.json();

        if (data) {
            var state = Object.values(data.uf);
            var stateStr = JSON.stringify(state);
            var cv = stateStr.slice(2, 7).replace(",", "").replace(/['"]+/g, '').toLocaleLowerCase();

            const stateCovid = await findCovid(cv)
            const cv19 = await stateCovid.json();



            cep_el.innerHTML = JSON.stringify(cv19)

        } else {
            cep_el.innerHTML = data.error;
        }
    } catch (err) {
        console.log(err);

    }

}