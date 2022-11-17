const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');

const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}


btnAvancar.addEventListener('click', function() {

    if(cartaoAtual === cartoes.length -1 ) {
        
        esconderCartaoSelecionado();
        cartaoAtual = 0 
        mostrarCartao(cartaoAtual);
        return;
        
    }
        
    esconderCartaoSelecionado();
 
    cartaoAtual ++;
    //console.log(cartaoAtual)
    mostrarCartao(cartaoAtual);

})


btnVoltar.addEventListener('click', function() {

    if(cartaoAtual === 0 ){
        esconderCartaoSelecionado();
        cartaoAtual = 2
        mostrarCartao(cartaoAtual);
        return;
    }
   
    esconderCartaoSelecionado();
         
    cartaoAtual --;
    //console.log(cartaoAtual)
    mostrarCartao(cartaoAtual);


})