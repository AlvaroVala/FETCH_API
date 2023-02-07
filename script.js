/*

***FETCH-API

*/
function transformarEmJson(response){
    return response.json()
}


function exibiNaTela(dados){
    console.log(dados)
}


function exbirErro(){
    console.log('Ops deu erro!')
}


const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () =>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(transformarEmJson)
    .then(exibiNaTela)
    .catch(exbirErro)
}