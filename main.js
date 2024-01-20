const form = document.getElementById('form-agenda');
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    
});

    function adicionaLinha() {

        const inputNomeCadastrado = document.getElementById('nome-cadastrado');
        const inputTelefoneCadastrado = document.getElementById('telelfone-cadastrado');

        if (nome.includes(inputNomeCadastrado.value)) {
           
        } else {
            nome.push(inputNomeCadastrado.value);
            telefone.push(parseFloat(inputTelefoneCadastrado.value));
        
            let linha = '<tr>';
            linha += `<td>${inputNomeCadastrado.value}</td>`;
            linha += `<td>${inputTelefoneCadastrado.value}</td>`;
            linha += '</tr>';
        
            linhas += linha;
        }

        inputNomeCadastrado.value = '';
        inputTelefoneCadastrado.value = '';
    };

    function atualizaTabela() {

        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;

    };
