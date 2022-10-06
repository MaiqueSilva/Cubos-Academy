let array = ["a", "b", "c", "d", "e"];
array.splice(1, 2, "f");
console.log(array); //a f d e

array = ["a", "b", "c", "d", "e"];
array.splice(1, 2, "f", "g", "h");
console.log(array); //a f g h d e

array = ["a", "b", "c", "d", "e"];
array.splice(1, 0, "f");
console.log(array); //a f b c d e

//array.push("f");
array = ["a", "b", "c", "d", "e"];
array.splice(array.length, 0, "f");
console.log(array);

//array.pop()
array = ["a", "b", "c", "d", "e"];
array.splice(array.length - 1, 1);
console.log(array);

//array.shift()
array = ["a", "b", "c", "d", "e"];
array.splice(0, 1);
console.log(array);

//array.unshift("f");
array = ["a", "b", "c", "d", "e"];
array.splice(0, 0, "f");
console.log(array);