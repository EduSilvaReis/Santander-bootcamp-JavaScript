function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') throw TypeError("Array com tipo errado(deve ser tipo object)");

        if(typeof arr !== 'number') throw TypeError("Array com tipo errado(deve ser number)");

        if(arr.length !== num) throw new RangeError('Tamanho invalido');

        return arr;
    }

    catch(e){
        if( e instanceof ReferenceError){
            console.log("Este é um erro reference erro");
            console.log(e.message);
        } else if(e instanceof TypeError){
            console.log("Este é um Type error");
            console.log(e.message);
        } else if(e instanceof RangeError){
            console.log("Este é um RangeError");
            console.log(e.message);
        } else{
            console.log("tipo de erro nao esperado" + e);
        }
    }
}

console.log(validaArray());