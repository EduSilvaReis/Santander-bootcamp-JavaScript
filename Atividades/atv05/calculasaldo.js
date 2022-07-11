const lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

const saldo = 100;

function calculaSaldo(saldo, lista) {
	if (!saldo || !lista || !lista.length) return 'Envie todos os parâmetros';

	return lista.reduce(function (prev, current, index){
		console.log('rodada', index +1);
		console.log({prev});
		console.log({current})
		return prev - current.preco;
	}, saldo);
}

console.log(calculaSaldo(saldo, lista));

//2º forma
/*function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O saldo final será de ${saldoFinal} reais`;
}

console.log(calculaSaldo(saldo, lista));
*/