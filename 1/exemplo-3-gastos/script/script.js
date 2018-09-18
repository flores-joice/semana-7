//1 - pegar a botão

const botao = document.querySelector(".transacao__button");
botao.addEventListener("click", function(event){
    event.preventDefault();
//2 - pegar a tabela
const tabela = document.querySelector(".extrato__table");

//cria variavel com o valor do input do documento html
const inputNome = document.getElementById("transacaoInputName");
const inputValor = document.getElementById("transacaoInputMoney");
const inputData = document.getElementById("transacaoInputDate");

//criar linha
const linha = document.createElement("tr");

//cria uma nova colunaconst
const colunaNome = document.createElement("td");
linha.appendChild(colunaNome);
//Adicionar texto a coluna
const colunaNomeTexto = document.createTextNode(inputNome.value);

const colunaValor = document.createElement("td");
linha.appendChild(colunaValor);
const colunaValorTexto = document.createTextNode(inputValor.value);




const colunaData = document.createElement("td");
linha.appendChild(colunaData);
const colunaDataTexto = document.createTextNode(inputData.value);

//adicionar linha a tabela
tabela.appendChild(linha);

//insere texto na coluna
colunaNome.appendChild(colunaNomeTexto);
colunaValor.appendChild(colunaValorTexto);
colunaData.appendChild(colunaDataTexto);

});