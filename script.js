//1 - crie uma função que exiba uma mensagem no console

function mensagem(){
    console.log("Uma mensagem qualquer");  
  }
  
  mensagem();
  
  //2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
  
  function meuNome(nome) {
    console.log(`Meu nome é ${nome}`);
  }
  
  meuNome("Guilherme");
  
  
  //3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
  
  function listaFavorito(nome, idade, estiloMusical){
    console.log(`Meu nome é ${nome} tenho` ,idade, `anos e gosto do genero musical ${estiloMusical}`);
  }
  
  listaFavorito("Guilherme", 26 , "Rap");
  
  //4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
  
  function duasCoisas(filme, musica){
    console.log(`O filme escolhido foi ${filme} e a musica ${musica}`);
  }
  
  duasCoisas("O resgate do soldado Ryan" , "Caminhos - BK");
  
 
  
  //5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
  
  function triplo(num){
      num = num * 3
    console.log(num);
  }
  
  triplo(5);
  