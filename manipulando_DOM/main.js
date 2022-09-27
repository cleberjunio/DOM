/*     const criarTarefa = (evento) => {
        evento.preventDefault();

        const lista = document.querySelector('data-list');
        const input = document.querySelector('[data-form-input]'); //selecionando o input
        const valor = input.value; //capturando o valor do input

        const conteudo = `<p class="content">${valor}</p>`; //colocando o valor digitado no input dentro do parágrafo
        input.value = ''; //limpando o campo do input

    }

    const novaTarefa = document.querySelector('[data-form-button]');
    novaTarefa.addEventListener('click', criarTarefa); //addEventListener passa 3 par// click // novaTarefa // console.log
     */

import BotaoConcluir from './componentes/concluiTarefa.js';
import BotaoDeletar from './componentes/deletaTarefa.js';

const criarTarefa = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]')
    const ul = document.querySelector('[data-list]')

    const valor = input.value;

    const dado = `<p class="content">${valor}</p>`;

    const li = document.createElement('li');
    li.classList.add('task')
    li.innerHTML = dado;
    li.appendChild(BotaoConcluir());
    li.appendChild(BotaoDeletar());
    ul.appendChild(li);
    input.value = '';

}


const botao = document.querySelector('[data-form-button]');

botao.addEventListener('click', criarTarefa);