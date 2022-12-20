var data = [];
var editValida = false;
var editPosicao = -1;
/**
 * Adicionar tarefas e validar o campo...
 * @returns 
 */
function add() {
    const tarefa = document.getElementById("nome-tarefa").value;

    if (tarefa == null || tarefa === "") {
        alert("Por favor, prencha o campo!");
        return;
    }

    if (editValida) {
        data[editPosicao] = tarefa;
        editPosicao = -1;
        editValida = false;
        document.getElementById("nome-tarefa").value = "";
        return;
    }

    
    data.push(tarefa);
    alert("Tarefa " + tarefa + " adicionado com sucesso!");
    document.getElementById("nome-tarefa").value = "";
    console.log(data);
}



function list() {
    console.log(data.length);
    var checks = `<table>`;
    let id = 0;

    var bool = false;
    for (let i = 0; i < 1; i++) {
        checks += "<tr>";
        checks += `<th style="text-align:left">ID</th>`
        checks += `<th style="text-align:left">Nome</th>`
        checks += `<th style="text-align:left">Operações</th>`
        checks += "</tr>"
        for (var c = 0; c < data.length; c++) {

            if (c > -1) {
                if (bool) checks += "</tr>";
                bool = !bool;
                checks += "<tr>";
            }

            checks += "<td>" + ++id + "</td>";
            checks += "<td>" + data[c] + "</td>";
            checks += `<td> <button class="btn btn-primary btn-dark" onclick='edit(${c})'>Editar</button>
            <button class="btn btn-primary btn-dark" onclick='removePeloIndex(${c})'>Deletar</button> </td>`;
        }
    }
    checks += "</table>";
    console.log(checks);
    document.getElementById("tabela").innerHTML = checks;
}

function edit(index) {
    var nome = data[index];
    document.getElementById("nome-tarefa").value = nome;
    editValida = true;
    editPosicao = index;
}



function removePeloIndex(index) {
    data.splice(index, 1);
    list();
}



function removeAll() {
    data = [];
    document.getElementById("tabela").innerHTML = "";
}