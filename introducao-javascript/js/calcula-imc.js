    var titulo = document.querySelector(".titulo");
    titulo.textContent = "Nutrição com Aparecida";

    var subtitulo = document.querySelector(".subtitulo ");
    subtitulo.textContent = ("Clientela da Dona Maria");

//--------------------------------------------------------------//

    var pacientes = document.querySelectorAll(".paciente");

    for ( var i = 0; i < pacientes.length; i++)
    {
        var paciente = pacientes[i];

            var tdpeso = paciente.querySelector(".info-peso");
            var peso = tdpeso.textContent;


            var tdaltura = paciente.querySelector(".info-altura");
            var altura = tdaltura.textContent;

            var tdIMC = paciente.querySelector(".info-imc");
//------------------------------------------------------------------//

            pesoV = validaPeso(peso); // true or false
            alturaV = validaAltura(altura);

            if (!pesoV) {

                pesoV = false;
                tdIMC.textContent = "peso inválido";
                paciente.classList.add("paciente-inexistente");
            }

            if (!alturaV) {

                alturaV = false;
                tdIMC.textContent = "altura invalida";
                paciente.classList.add("paciente-inexistente");
            }


                if (pesoV && alturaV) {
                    var imc = calculaImc(peso, altura);
                    tdIMC.textContent = imc;
        }

    }
    function calculaImc(peso, altura){
        var  IMC = 0;

        IMC = peso / (altura * altura);

        return IMC.toFixed(0);
    }
//------------------------------------------------------------------------//

   function validaPeso(peso){
        if (peso >= 0 && peso <= 600) {
            return true;
        } else {
            return false;
        }
   }

   function validaAltura (altura){
        if (altura >= 0 && altura < 3.0) {
           return true;
        } else {
            return false;
        }
   }