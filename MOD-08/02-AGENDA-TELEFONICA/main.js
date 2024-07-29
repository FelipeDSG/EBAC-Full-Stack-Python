const form = document.getElementById('form-contatos');
const contatos = [];
const numeroTelefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaContato();
});

function adicionaContato(){
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroTelefone = document.getElementById('numero-telefone')

    contatos.push(inputNomeContato.value);
    numeroTelefone.push(inputNumeroTelefone.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeContato.value = '';
    inputNumeroTelefone = '';
}