const ul = document.querySelector('#ul')
const painelSaldo = document.querySelector('.saldo span')
const painelReceita = document.querySelector('.receita span')
const painelDespesa = document.querySelector('.despesa span')
const formulario = document.querySelector('#form')
 


let getLocalStorage = JSON.parse(localStorage.getItem('transacoes'))
let = transacoes = localStorage.getItem(
	'transacoes') != null ? getLocalStorage : []




let excluirTransacao = (ID) => {
	transacoes = transacoes.filter((transacao)=>{
		return transacao.id != ID


})
	atualizarStorage()
	inicializar()

}

	// INSERINDO AS INFORMAÇÕES NA TELA
	let inserirTransacao = () =>{
    transacoes.map((transacao) => {

   	let	valor = transacao.valor.toFixed(2)

   		let li = document.createElement('li')
   		li.innerHTML = `<span>${transacao.nome}</span>
   		<span>R$ ${valor}</span>
   		<button onclick="excluirTransacao(${transacao.id})">X</button>
   		`
   		ul.append(li)
		
   })
  } 


 //ATUALIZANDO PAINEL 
 
 let atualizarPainel = () => {
 	let valorTransacao =	transacoes.map((item) =>{
 		return item.valor
 		
 		
 	})


 	let saldo = valorTransacao.reduce((acc,valor) => {
 		return acc + valor
 	},0)



 	let receita = valorTransacao.filter((valor) => {
 		return valor > 0
 		
 	})


 	let receitaTotal = receita.reduce((acc,valor) => {
 		return acc + valor
 	},0) 

 		
 	let despesa = valorTransacao.filter((valor) => {
 		return valor < 0
 	})
 
 	let despesaTotal = despesa.reduce((acc,valor) => {
 		return acc + valor
 	},0)

 	painelSaldo.innerHTML = `R$ ${saldo.toFixed(2)}`
 	painelReceita.innerHTML = `R$ ${receitaTotal.toFixed(2)}`
 	painelDespesa.innerHTML = `R$ ${despesaTotal.toFixed(2)}`
 	

}


let inicializar = () => {
	ul.innerHTML = ''
	 inserirTransacao()
	 atualizarPainel()
	 
} 
inicializar()

let atualizarStorage = () => {
	localStorage.setItem('transacoes', JSON.stringify(transacoes))
}


// CRIANDO UM IDENTIFICADOR ALEATORIO
const gerarId = () => {
	return Math.round(Math.random()*10000)
}

 formulario.addEventListener('submit',(event) => {
 	event.preventDefault()

 	let descricao = document.querySelector('#descricao').value
 	let valor = document.querySelector('#valorInput').value

 		

 	if(descricao == '' || valor == ''){
 		alert('Preencha todos os campos')
 		return
 	}

 	transacao = {
 		id:gerarId(),
 		nome:descricao,
 		valor: Number(valor)

 	}

 	    transacoes.push(transacao)
 	    
 	document.querySelector('#descricao').value = ''
 	document.querySelector('#valorInput').value = ''

 	
 	inicializar()
 	atualizarStorage()

 })



   

 


