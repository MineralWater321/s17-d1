// Common examples of arrays
let grades = [98.5, 94.3, 89.2, 90.1];
let computerBrands = ['Acer', 'Asus', 'Lenovo', 'Neo', 'Redfox', 'Gateway', 'Toshiba', 'Fujitsu'];
//Not recommended use of array
let mixedArr = [12, 'Asus', null, undefined, {}];

//Alternative way to write arrays
let myTasks = [
	'drink HTML',
	'eat Javacript',
	'inhale CSS',
	'bake SASS'
]

//index = n - 1, where n is the total length of the array

//Reassigning array values
console.log('Array before reassignment');
console.log(myTasks);
myTasks[0] = 'clean node';
console.log('Array after reassignment');
console.log(myTasks);

//Reading from Array

console.log(grades[0]);
console.log(computerBrands[3]);
//Accessing an array element that does not exist
console.log(grades[20]);

//Getting the length of an array (.length)

console.log(computerBrands.length);

//Manipulating Arrays
//Array Methods
//Mutator Methods functions that 'mutate' or change an array after they're created

let fruits = ['Apple', 'Orange', 'Kiwi', 'Dragon Fruit'];

//push() - adds an element in the end of an array and returns the array's length.

console.log('Current Array');
console.log(fruits);
let fruitsLength = fruits.push('Mango');
console.log(fruitsLength);
console.log('Mutated array from push method');
console.log(fruits);

//Adding multiple elements to an array
fruits.push('Avocado,', 'Guava');
console.log('Mutated array from push method');
console.log(fruits);

//pop() - removes the last element in an array and returns the removed element
let removedFruit = fruits.pop();
console.log(removedFruit);
console.log('Mutated array from pop method');
console.log(fruits);

//unshift() - adds one or more elements at the beginning of an array
/* Syntax: 
	arrayName.unshift('elementA');
	arrayName.unshift('elementA', 'elementB')
*/

fruits.unshift('Lime', 'Banana');
console.log('Mutated from unshift method');
console.log(fruits);

// shift() - removes an element at the beginning of an array and returns the removed element. Syntax arrayName.shift();
let anotherFruit = fruits.shift();
console.log(anotherFruit);
console.log('Mutated array from shift method')
console.log(fruits);

// splice() = simultaneously removes elements from a specified index number and adds elements. Syntax arrayName.splice(startingIndex, deleteCount, elementsToBeAdded);

fruits.splice(1, 2, 'Lime', 'Cherry');
console.log('Mutated array from splice method')
console.log(fruits);

//sort() - rearranges the array elements in alphanumeric order: Syntax: arrayName.sort();

fruits.sort();
console.log('Mutated array from sort method');
console.log(fruits);

//reverse() - reverses the order of array elements. Syntax: arrayName.reverse();

fruits.reverse();
console.log('Mutated array from reverse method');
console.log(fruits);

//Non-mutator methods - functions that do not modify or change an array after they're created

let countries = ['US', 'PH', 'CAN', 'SG', 'TH', 'PH', 'FR', 'DE'];

//indexOf() - returns the index number of the first matching element found in an array
//Syntax: arrayName.indexOf(searchValue);

let firstIndex = countries.indexOf('PH');
console.log('Result of indexOf method: ' + firstIndex);

let invalidCountry = countries.indexOf('BR');
console.log('Result of indexOf method: ' + invalidCountry);

// lastIndexOf() - returns the index number of the last matching element found in an array. Syntax: arrayName.lastIndexOf(searchValue);

let lastIndex = countries.lastIndexOf('PH');
console.log('Result of lastIndexOf method: ' + lastIndex);

//slice() - portions/slices elements from an array and returns a new array
/* Syntax:
	arrayName.slice(startingIndex);
	arrayName.slice(startingIndex, ending Index);
*/

//Slicing off elements from a specified index to another index
let slicedArrayA = countries.slice(2);
console.log('Result from slice method');
console.log(slicedArrayA)

let slicedArrayB = countries.slice(2, 4);
console.log('Result from slice method');
console.log(slicedArrayB)

//toString() - returns an array as a string separated by commas. Syntax: arrayName.toString();

//concat() - combines two arrays and returns the combined result. Syntax: arrayA.concat(arrayB);

let taskArrayA = ['drink html', 'eat javascript'];
let taskArrayB = ['inhale css', 'breathe sass'];
let taskArrayC = ['get git', 'be node'];

let tasks = taskArrayA.concat(taskArrayB);
console.log('Result from concat method');
console.log(tasks);

//combining multiple arrays
console.log('Result from concat method');
let allTasks = taskArrayA.concat(taskArrayB, taskArrayC);
console.log(allTasks);

//combining arrays with elements
let combinedTasks = taskArrayA.concat('smell Express', 'throw react');
console.log('Result from concat method');
console.log(combinedTasks);

//join() - returns an array as a string separated by specified separator string. Syntax: arrayName.join('separatorString');

let users = ['John', 'Jane', 'Joe', 'Robert'];
console.log(users.join());
console.log(users.join(''));
console.log(users.join(' - '));

//Iteration methods - are loops designed to perform repetitive tasks on arrays

// forEach() - similar to a for loop that iterates on each array element
/* Syntax:
	arrayName.forEach(function(indivElement)){
		statement
	}
*/
console.log('Result from forEach method')
allTasks.forEach(function(task){
	console.log(task);
});
console.log(allTasks);
//Using forEach with conditional statements
let filteredTasks = [];

allTasks.forEach(function(task){
	if(task.length > 10){
		filteredTasks.push(task)
	}
});

console.log('Result of filtered tasks:')
console.log(filteredTasks)

//map() - iterates on each element and returns a new array with different values depending on the result of the function's operation.
/* Syntax:
	let/const resultArray = arrayName.map(function(individualElement){
		statement/s;
	})
*/

let numbers = [1, 2, 3, 4, 5];
let numberMap = numbers.map(function(number){
	return number * number;
})

console.log('Result of map method: ');
console.log(numberMap);

// every() - checks if all elements in an array meet the given condition
/* Syntax:
	let/const resultArray = arrayName.every(function(indivElement){
		return expression/condition;
	})
*/

let allValid = numbers.every(function(number){
	return (number < 3);
})

console.log('Result of every method: ')
console.log(allValid);

// come() - checks if at least one of them elements in an array meets the given condition
/* Syntax:
	let/const resultArray = arrayName.some(function(indivElement){
		return expression/condition;
	})
*/

let someValid = numbers.some(function(number){
	return (number < 2);
})

console.log('Result of some method: ')
console.log(someValid);

//filter() - return a new array that contains elements which meets the given condition
/* Syntax:
	let/const resultArray = arrayName.filter(function(indivElement){
		return expression/condition;
	})
*/

let filterValid = numbers.filter(function(number){
	return(number < 3)
})

console.log('Result of filter method: ');
console.log(filterValid);

let nothingFound = numbers.filter(function(number){
	return (number == 0);
})

console.log('Result of filter method: ');
console.log(nothingFound);

//filtering using forEach
let filteredNumbers = [];

numbers.forEach(function(number){
	if(number > 3){
		filteredNumbers.push(number);
	}
})

console.log('Result of filter method: ');
console.log(filteredNumbers);

//includes() - the result of the first method is used on the second method until all "chained" methods have been resolved

let products = ['Mouse', 'Keyboard', 'Laptop', 'Monitor'];

let filteredProducts = products.filter(function(product){
	return product.toLowerCase().includes('a');
})
console.log(filteredProducts);

//reduce() - evaluates elements from left to right and returns/reduces the array into a single value
/* Syntax:
	let/const resultArray = arrayName.reduce(function(accumulator, currentValues){
		return expression/operation;
	})
*/

let iteration = 0;

let reducedArray = numbers.reduce(function(x, y){
	console.warn('current iteration: ' + ++iteration);
	console.log('accumulator: ' + x);
	console.log('currentValue: ' + y);

	return x + y;
})
console.log("Result of reduce method: " + reducedArray);

let list = ['Hello', 'Again', 'World'];
let reducedJoin = list.reduce(function(x,y){
	return x + ' ' + y;
})

console.log("Result of reduce method: " + reducedJoin);

//Multidimensional Array
//Two dimensional Array - having an array within an array

let oneDim = [];
// 1st Dim   0   		1
// 2nd Dim  0 1    	   0 1
let twoDim = [[2, 4],[6, 8]];
// 2x2 Two Dimensional Array
console.log(twoDim[1][0]);
console.log(twoDim[0][1]);
console.log(twoDim[1][1]);

// 3x2 Two Dimensional Array
//            0         1       2
//           0 1       0 1     0 1
let twoDim2 = [[2, 4],[6, 8],[10, 12]];
console.log(twoDim2[2][0]);