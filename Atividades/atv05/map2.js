const orange = {
	preco: 2,
};

const apple = {
	preco: 10,
};

function mapArray(arr, thisArg) {
	return arr.map(function (item) {
		return item * this.preco;
	}, thisArg);
}

const nums = [1, 2,];


console.log('this -> maçã', mapArray(nums, apple));
console.log('this -> laranja', mapArray(nums, orange));

//sem this

/*const array = [1, 2, 3, 4, 5];

console.log(array.map((item) => item * 2));

console.log(array);
*/