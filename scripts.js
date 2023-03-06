
let chave = "2d3af113f7d095ec38b1b369dac152f8"


function ColocarNaTela(dados){

console.log(dados)

document.querySelector(".cidade").innerHTML = "tem em " + dados.name
document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C"
document.querySelector(".descricao").innerHTML =  dados.weather[0].description
document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"


}


async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + 
     chave + "&lang=pt_br" +
     "&units=metric").then(resposta => resposta.json())
     
      ColocarNaTela(dados)
    
 }
 
 function cliqueinoBotao(){ 
        let cidade = document.querySelector(".imput-cidade").value
 
        buscarCidade(cidade)
 
 
 }
 










