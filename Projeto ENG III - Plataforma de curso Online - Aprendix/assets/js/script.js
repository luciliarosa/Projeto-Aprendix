//PRELOADER EVENTO
window.addEventListener("load", function(){
    document.querySelector(".preloader").style.display = "none";
});

//MENU PRINCIPAL
document.querySelector(".hamburguer").addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("mostrar"); 
});

//FORMULARIO DE ORCAMENTO
document.querySelector("#landing-page").addEventListener("click", preco);
document.querySelector("#loja-virtual").addEventListener("click", preco);
document.querySelector("#sistema-web").addEventListener("click", preco);
document.querySelector("#pag").addEventListener("click", preco);

//FUNCAO QUE CALCULA PRECO
function preco(){
    const landingPage = document.querySelector("#landing-page").checked;
    const lojaVirtual = document.querySelector("#loja-virtual").checked;
    const sistemaWeb = document.querySelector("#sistema-web").checked;
    const paginas = document.querySelector("#pag").value;
    let valorTotal = document.querySelector(".valor-total");
    let preco = paginas *70;

    //QUANDO OS ELEMENTOS FOREM SELECIONADOS
    if(landingPage){
        preco = preco + 500;
    }
  
    if(lojaVirtual){
        preco = preco + 1200;
    }
    if(sistemaWeb){
        preco = preco + 2000;
    }

    else if(landingPage && lojaVirtual && sistemaWeb){
        preco = paginas *70 + 3700;
    }

    else if(landingPage && lojaVirtual){
        preco = paginas *70 + 1700;
    }
    else if(landingPage && sistemaWeb){
        preco = paginas *70 + 2500;
    }
    else if(lojaVirtual && sistemaWeb){
        preco = paginas *70 + 3200;
    }
    
    //MOSTRANDO O VALOR
    valorTotal.textContent = `R$: ${preco.toFixed(2,1)}`;
}

//BOTAO TOPO
window.onscroll = function(){
    btnTop();
}

function btnTop(){
    if(document.querySelector("body").scrollTop > 30 || document.documentElement.scrollTop > 30){
        document.querySelector(".btn-topo").style.display = "flex";
    }
    else{
        document.querySelector(".btn-topo").style.display = "none";
    }
}