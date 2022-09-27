const BotaoDeletar = () => {
    const botaoDeletar = document.createElement('button');

    botaoDeletar.innerText = 'Deletar';

    botaoDeletar.addEventListener('click', deletarTarefa);



    return botaoDeletar;
}

const deletarTarefa = (evento) => {
    const botaoDeletar = evento.target;

    const tarefaDeletada = botaoDeletar.parentElement;

    tarefaDeletada.remove();

    return botaoDeletar;

}

export default BotaoDeletar;