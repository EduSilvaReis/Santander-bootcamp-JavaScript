//array contendo os alunos(nesse contexto eles são objetos)
const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Pedro',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Marcus',
        nota: 6,
        turma: '2C'
    },
    {
        nome: 'Marcus lucca',
        nota: 3,
        turma: '2C'
    },
];


//função
function alunosAprovados(arr, media){
    let aprovados = [];

    for(let i = 0; i < arr.length; i++){
        //uso do método object destructing(usar apenas as propiedade que queremos)
        const {nota, nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome);
        }
        /*
        if(arr[i].nota >= media){
            aprovados.push(arr[i].nome);
        }
        */
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));