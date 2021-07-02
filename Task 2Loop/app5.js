var array = [2, 0, 1, 6, 45, 89];
var smallest = array[0];

for (i = 0; i < array.length; i++) {
    if (smallest > array[i]) {
        var smallest = array[i];
    }
}
console.log(array)
console.log("smallest number is " + smallest);