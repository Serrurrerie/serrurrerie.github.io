function adicionar(tipo){

    var produtos = window.document.getElementById('listaprod').innerHTML

    if (produtos.includes(`${tipo}`) == false){
        window.document.getElementById('listaprod').innerHTML = `${produtos} Perfume fragância ${tipo} <input id="${tipo}" type="number" name="${tipo}" class="perfume" min="0" value="1" onfocusout="executar('${tipo}')"><br>`
        calculartotal()
    }
    else{
        var n = Number(window.document.getElementById(`${tipo}`).value)
        n = n + 1
        window.document.getElementById(`${tipo}`).outerHTML = `<input id="${tipo}" type="number" name="${tipo}" class="perfume" min="0" value="${n}" onfocusout="executar('${tipo}')">`
        calculartotal()
        //aqui tive de alterar o html inteiro porque quando adicionava só ao valor e adicionava um produto novo, o html atualizava e perdia o valor, assim troco tudo e não perde o valor.
    }
    
}

function executar(tipo){
    calculartotal()
    antiperda(tipo)

}

function calculartotal(){

    var elementos = window.document.getElementsByClassName('perfume')

    var total=0;
    for(var i=0;i<elementos.length;i++){
        if(parseInt(elementos[i].value))
            total += parseInt(elementos[i].value);
    }

    window.document.getElementById('total').value = total * 20

}

function antiperda(tipo){

    console.log(`primeiro: ${tipo}`)
    var n = window.document.getElementById(`${tipo}`).value
    console.log(`segundo: ${n}`)

    window.document.getElementById(`${tipo}`).outerHTML = `<input id="${tipo}" type="number" name="${tipo}" class="perfume" min="0" value="${n}" onfocusout="executar('${tipo}')">`

    //apesar de resolver o problema da função adicionar, aqui tive de resolver outro, se adicionasse um valor ao escrever na quantidade (ou carregar no botão de acrescentar ou subtrair), e depois adicionar um artigo, o valor voltava ao que tinha sido alterado pela função (no caso de carregar duas vezes no mesmo produto)

}
