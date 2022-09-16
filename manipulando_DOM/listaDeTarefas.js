const novaTarefa = document.querySelector('[data-form-button]');

const criarTarefa = (evento) => {
    evento.preventDefault()

    const input = document.querySelector('[data-form-input]'); //seleciona o input
    const valor = input.value;


    const tarefa = document.querySelector('[data-task]'); //seleciona o li
    const conteudo = `<p class = "content">${valor}</p>`
        //captura o valor digitado no input
    tarefa.innerHTML = conteudo;
    //captura o valor digitado no input
    input.value = ""; //limpa o input

}

novaTarefa.addEventListener('click', criarTarefa)