/*Resolução do professor.

function tabuada(){
var num = document.getElementById('txtano');
var resposta = document.getElementById('res');
if (num.value.length == 0){
    alert('errado')
}else{
    let n = Number(num.value)
    let c = 1
    resposta.innerHTML = ''
    while(c <= 10){
        let item = document.createElement('option')
        item.text = `${n} e ${c} = ${n*c}`
        resposta.appendChild(item)
        c++
    }
}
}

*/
//Minha resolução.

function tabuada(){
    var num = document.getElementById('txtano').value;
    var resposta = document.getElementById('res');
    var tabuada = '';
    
    if (num == 0 ){
        alert ('Digite um número válido!')
    }else{
    
    for (var count = 1; count <= 10; count++){
        tabuada += num+ 'x' +count+ ' = ' +num*count+ '<br/>'
        
    }
    }
    resposta.innerHTML = `O resultado da tabuada é: <br> ${tabuada}</br>`;
    
    } 
    
    
    
    
    
    

