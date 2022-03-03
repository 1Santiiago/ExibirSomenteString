import "./styles.css";

const filme = {
  titulo:'Vingadores',
  ano:2018,
  diretor:'San',
  personagem:'Thor'
}
//preciso retirar somente as strings

function exibirPropis(obj){
  for(prop in obj){
      if(typeof obj[prop] === 'string'){
          console.log(prop, obj[prop])
      }
  }
}
exibirPropis(filme)
