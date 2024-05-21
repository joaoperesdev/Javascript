var buscar = document.querySelector ("#buscar-pacientes")
    buscar.addEventListener("click", function(){
        var xhr = new XMLHttpRequest()
        xhr.open("get", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json")
        xhr.addEventListener("load", function(){

            if (xhr.status == 200){
                var erro = document.querySelector("#erro-ajax")
                erro.classList.add("invisivel")
                var resposta = xhr.responseText // aqui é uma string
                var pacientes = JSON.parse(xhr.responseText)
                pacientes.forEach(function(paciente) {
                    adicionaPacienteNatabela(paciente)
                });
            } else {
                console.log(xhr.status)
                console.log(xhr.responseText)
                var erro = document.querySelector("#erro-ajax")
                        console.log("erro no ajax")
                erro.classList.remove("invisivel")

            }
        });
        xhr.send();
    });


