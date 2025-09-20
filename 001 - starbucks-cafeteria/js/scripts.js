/* 
JavaScript Não é JAVA

Variáveis -> Um pedacinho de memória do computador, que você separa e pode guardar QUALQUER coisa.

Console.log -> Uma forma de ENXERGAR o que eu tenho no JavaScript Dentro do navegador.

Funções - Pedacinho código, Que só executa quando é chamado.

Allgoritmo:
[] Saber quem é o botão
[] Saber quando o botão for clicado
[] Saber quem é a bola colorida
[] Trocar a cor da bola colorida
[] Saber quem é o copo
[] Trocar a imagem do copo

obsevações document = html
querySlector = selecionar um elemento
*/

let safira = document.querySelector(".circulo")

function mudarCor(cor) {
  // console.log(cor)
  safira.style.backgroundColor = cor
}
