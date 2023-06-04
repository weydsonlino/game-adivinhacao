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
            palpitesAnteriores.style.color = "red"
            /*Aqui é definido a quantidade de palpites que o úsuario tem e 
            o resultado da consulta do número informado*/ 
            var resultado = document.querySelector('.ultimoResultado')
            var palpiteQuant = 0
            var palpiteMax = 10
            var ultimoPalpite

            campoPalpite.focus()
            chances.textContent = `Você tem até ${palpiteMax} tentativas`
            
            
            function checarPalpite(){
                var palpiteUsuario = Number (campoPalpite.value)
                
                        resultado.textContent = ""
                         if (ultimoPalpite === palpiteUsuario) {
                            resultado.textContent=`Digite um número diferente do anterior`
                            campoPalpite.focus()
                            campoPalpite.value = ''
                         }
                        else{
                            erros()

                            if (palpiteUsuario === numeroAleatorio) {
                                resultado.textContent = `Parabéns, o número era ${numeroAleatorio}`;
                                resultado.style.backgroundColor = 'green';
                                resultado.style.color= 'white';
                                maiorMenor.textContent = ' '
                                chances.textContent = ' '
                                fimdejogo();
                            }
                            //O palpite foi errado
                            else{
                                resultado.textContent = 'Você Errou'
                                resultado.style.color = "white";
                                resultado.style.backgroundColor = 'red';
                                
                                //Palpite maior e diferente do anterior
                                if (palpiteUsuario > numeroAleatorio) {
                                    maiorMenor.textContent = `O número digitado é maior"`;
                                    
                                }
                                //Palpite menor e diferente do anterior 
                                else if(palpiteUsuario < numeroAleatorio){
                                    maiorMenor.textContent = 'O número digitado é menor'   
                                }

                                palpitesAnteriores.textContent += `${palpiteUsuario},  `
                                palpiteQuant ++
                                chances.textContent = `Agora lhe restam ${10 - palpiteQuant} palpites`
                                
                            }
                        
                            ultimoPalpite = palpiteUsuario
                            campoPalpite.value = ""
                            campoPalpite.focus()
                            checarchance()
                        
                        
                    }
                }

            
            function erros(){
                if (palpitesAnteriores.textContent === '') {
                    palpitesAnteriores.textContent  = `Números usados : `
                }
            }
                
            function checarchance(){
                if (palpiteQuant === (palpiteMax))
                {
                    resultado.textContent = `Você Perdeu o número era ${numeroAleatorio}`
                    resultado.style.backgroundColor = 'red';
                    resultado.style.color= 'white';
                    maiorMenor.textContent = ' '
                    chances.textContent = ' '
                    fimdejogo();
                }
            }

            function fimdejogo(){
                
                campoPalpite.disabled = true
                enviarPalpite.disabled = true
                campoPalpite.value = ' '
                botaoReinicio = document.createElement('Button')
                botaoReinicio.classList.add('meuBotao')
                botaoReinicio.textContent = 'Iniciar novo Jogo'
                document.getElementById("jogo").appendChild(botaoReinicio)
                botaoReinicio.addEventListener('click' , reiniciarJogo)

            }

            function reiniciarJogo(){
                campoPalpite.disabled = false
                enviarPalpite.disabled = false
                palpiteQuant = 0
                

                botaoReinicio.parentNode.removeChild(botaoReinicio);

                var limparParagrafos = document.querySelectorAll('.vfeedback p')
                for (let i = 0; i < limparParagrafos.length; i++) {
                    limparParagrafos[i].textContent = " "
                    
                }

                chances.textContent = `Você tem até ${palpiteMax} tentativas`
                palpitesAnteriores.textContent = ''
                numeroAleatorio = Math.floor(Math.random() * 100) + 1;
                campoPalpite.focus()
            }
            
            
            
            enviarPalpite.addEventListener('click', checarPalpite);