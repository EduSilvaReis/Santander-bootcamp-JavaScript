
function verificaPalindromo(string) {
     //verifica se a variavel veio nula, vazia ou undefined
    if (!string) return "string inexistente";
    //retorna string invertida e compara com a outra para ver se é igual
    return string.split("").reverse().join("") === string;
}

let myVar = null

console.log(verificaPalindromo("ovo"));

//solução 02
// não é necessario percorrer a string completa, pois a maioria das plavaras so possuem 3 letras e 
function verificaPalindromo2(string) {
    //verifica se a variavel veio nula, vazia ou undefined
   if (!string) return "string inexistente";
   //percorre cada caractere da string
   for(let i = 0; i <string.length / 2; i++){
    //condição para verifica se a palavra é a mesma de trás para frente
    if(string[i] !== string[string.length -1 -i]){
        return false;
    }
   }

   return true;
}

console.log(verificaPalindromo2("ovo"));