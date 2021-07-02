var arr = [2, 0, 1, 6, 45, 89];
var largestNum = arr[0];

for (i = 0; i < arr.length; i++) {
    if (largestNum < arr[i]) {
        var largestNum = arr[i];
    }
}
console.log(arr)
console.log("Largest number is " + largest);