
 var botao = document.querySelector("#adicionar-paciente");
    botao.addEventListener("click", function(event){
        event.preventDefault();

        var form = document.querySelector("#form-adiciona");
        var paciente = obtemPacienteDoFormulario(form);

        var pacienteTr = montaTr(paciente);
        var erros = validaPaciente(paciente);
            console.log(erros)
                if(erros.length > 0) {
                    exibeMensagensDeErro(erros);
                    return;
            }
        var tabela = document.querySelector("#tabela-pacientes"); // adicionando o paciente na tabela
            tabela.appendChild (pacienteTr)
            form.reset();
            var mensagensErro =  document.querySelector("#mensagens-erro")
                mensagensErro.innerHTML = ""
    });


// ========================== FUNÇÕES ==========================  //

    function adicionaPacienteNatabela(paciente) {
        var pacienteTr = montaTr(paciente);
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr)
    }


 function obtemPacienteDoFormulario(form){
        var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc (form.peso.value, form.altura.value)
        }
        return paciente;
    }
//================================================================//
    function montaTr(paciente) {

        var pacienteTr = document.createElement("tr")
        pacienteTr.classList.add("paciente"); // definindo as classes, da mesma maneira que esta no html

            pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
            pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
            pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
            pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
            pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

            return pacienteTr;
    }

    function montaTd(dado, classe){
        var Td = document.createElement("td"); // aqui é aonde a "td" é criada
        Td.textContent = dado;
        Td.classList.add(classe);
            return Td;
    }
//================================================================//
    function validaPaciente(paciente){

        erros = []

            if(paciente.nome.length == 0){
                erros.push("nome nao pode ser em branco");
            }

            if (!validaPeso(paciente.peso)){
                erros.push("peso é invalido");
            }
            if (paciente.peso.length == 0){
                erros.push("o peso não pode ser em branco");
            }
            if (!validaAltura(paciente.altura)){
                erros.push ("Altura é invalida");
            }
            if (paciente.altura.length == 0){
                erros.push ("a altura não pode ser em branco");
            }
            if (paciente.gordura.length == 0){
                erros.push("gordura não pode ser em branco");
            }

        return erros;
    }
//================================================================//
    function exibeMensagensDeErro(erros){
        var ul = document.querySelector("#mensagens-erro");
            ul.innerHTML = "";
            erros.forEach(function(erro){
            var li = document.createElement("li");
                li.textContent = (erro);
                li.classList.add("informacao-erro");
                ul.appendChild(li);
        });
    }