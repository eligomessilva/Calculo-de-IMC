const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 5000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


function calculaImc(altura, peso){
  const alturaEmMetros = altura * altura
  const imcAtual = peso / alturaEmMetros
  return imcAtual;
}


app.post('/imc', function (req, res) {

  const altura = req.body.altura
  const peso = req.body.peso
  const imcAtual = calculaImc(altura, peso)
  

  if (imcAtual < 24.9) {
    res.send(`O indice de massa corporal  ${imcAtual.toFixed(2)},esta normal de acordo com a tabela de normalidade que esta entre 18,5 e 24,9`)

  } else
    res.send(`Por favor procure um endocrinologista, pois seu imc é de  
    ${imcAtual.toFixed(2)} portanto é considerado irregular de acordo com  tabela IMC, Sobrepeso = 25,0 á 29,9	, Obesidade = 30,0 á 39,9 e Obesidade Grave que	
    maior que 40,0`)
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

})



