            /* Criação d eum jogo de adivinhação simples onde o objetivo do úsario
            é tentar adivinhar qual o número aleatorio q é escolhido pela maquina*/

                            //Criando variaveis
            //Variavel que permite a escolha de um número aleatorio
            var numeroAleatorio= Math.floor(Math.random() * 100) + 1;

            /*Variaveis que definem o local onde o úsuario digita seu numero
            e envia para a checagem*/
            var campoPalpite = document.querySelector('.jogoTentativa')
            var enviarPalpite = document.querySelector('.enviarPalpite')
            /*Aqui é informado se o número é maior ou menor que o alvo e tbm é informado a quantidade de
            palpites restantes e os números q foram tentados*/
            var maiorMenor = document.querySelector('.maiorMenor')
            var chances = document.querySelector('.chances')
            var palpitesAnteriores = document.querySelector('.palpitesAnteriores')
            /*Aqui é definido a quantidade de palpites que o úsuario tem e 
            o resultado da consulta do número informado*/ 
            var resultado = document.querySelector('.ultimoResultado')
            var palpiteQuant = 1
            var palpiteMax = 10

            campoPalpite.focus()
            chances.textContent = `Você tem até ${palpiteMax} tentativas`
            
            function checarPalpite(){

                var palpiteUsuario = Number (campoPalpite.value)
                palpitesAnteriores.textContent += `${palpiteUsuario}  `


                if (palpiteUsuario === numeroAleatorio) {
                    resultado.textContent = 'Parabéns';
                    resultado.style.backgroundColor = 'green';
                    resultado.style.color= 'white';
                    maiorMenor.textContent = ' '
                    chances.textContent = ' '
                    fimdejogo();
                }
                else if (palpiteQuant >= palpiteMax){
                    resultado.textContent = 'Você Perdeu'
                    resultado.style.backgroundColor = 'red';
                    resultado.style.color= 'white';
                    maiorMenor.textContent = ' '
                    chances.textContent = ' '
                    fimdejogo();
                    
                }
                else{
                    resultado.textContent = 'Você Errou'
                    resultado.style.backgroundColor = 'red';
                    chances.textContent = `Agora lhe restam ${10 - palpiteQuant} palpites`

                    if (palpiteUsuario > numeroAleatorio) {
                       
                        maiorMenor.textContent = "O número digitado é maior"
                     
                    } else {
                        maiorMenor.textContent = 'O número digitado é menor'
                    }
                    
                }
                
                palpiteQuant ++
                campoPalpite.value = ""
                campoPalpite.focus()
                
            }

            function fimdejogo(){
                campoPalpite.disabled = true
                enviarPalpite.disabled = true
                campoPalpite.value = ' '
                botaoReinicio = document.createElement('Button')
                botaoReinicio.textContent = 'Iniciar novo Jogo'
                document.body.appendChild(botaoReinicio)
                botaoReinicio.addEventListener('click' , reiniciarJogo)

            }

            function reiniciarJogo(){
                campoPalpite.disabled = false
                enviarPalpite.disabled = false
                palpiteQuant = 1

                botaoReinicio.parentNode.removeChild(botaoReinicio);

                var limparParagrafos = document.querySelectorAll('.vfeedback p')
                for (let i = 0; i < limparParagrafos.length; i++) {
                    limparParagrafos[i].textContent = " "
                    
                }

                chances.textContent = `Você tem até ${palpiteMax} tentativas`
            }
            
            
            enviarPalpite.addEventListener('click', checarPalpite);