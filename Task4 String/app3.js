var str = "Karachi";
console.log(str);
var arr = [...str];
arr[1] = "o";
arr[2] = "l"
str = arr.join("");
console.log(str);