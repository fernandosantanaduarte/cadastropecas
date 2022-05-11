let pesoPeca = 200
let numeroPecas = 10
let listaPecas = ["Disco de Freio","Motor","Pastilha de Freio","Volante","Chassi","Disco de Freio","Motor","Pastilha de Freio","Volante","Chassi"]
let nomePeca = 'Pa'//Trim

//Verificação Peso da Peça
if(pesoPeca > 100) {
   //podemos cadastrar
   console.log("Peso adequado,podemos cadastrar")

}else {
    //não podemos cadastrar
    console.log("Peso menor que 100g não podemos cadastrar")
}

//Verificação Tamanho da Lista de Peça
if (listaPecas.length >= 10) {
    //capacidade maxima atingida
   console.log("capacidade maxima atingida") 
} else {
    //ainda ha espaço para cadastro
    console.log("ainda ha espaço para cadastro")
}

//Verificação do nome da peça
if (nomePeca.length < 3 ) {
   // nome invalido
   console.log("nome invalido,o nome precisa ter mais de 3 caracteres ou mais")
} else {
   //nome de peça adequado
   console.log("nome adequado")
}