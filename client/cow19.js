
var comp1 = [1,2];
var comp2 = [2,9]
var test = false;

var isElement = (x, ar) => { 
	var value = false;
	ar.map( e => {
		if (x === e) {
			value = true;
		};
	})
	return value;
}
var test = isElement(1,comp1);

console.log(test);

var simple = a => a > 15 ? 15 : a; 
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;

// Easy array filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b);  // 66
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
var double = arr.map(v => v * 2);       // [10, 12, 26, 0, 2, 36, 46]

console.log(isElement(14, arr));