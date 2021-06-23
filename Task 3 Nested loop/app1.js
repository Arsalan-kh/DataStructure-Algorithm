//Nested loop PROBLEMS 1(a):

let arr = [
    [1, 2],
    [3, 4],
    [5, 6],
];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

//Nested loop PROBLEMS 1(b):

let i = 0; //first initilizing i as 0
let array = [1, 2, 3, 4, 5, 6]; // then initialize an array

while (i < array.length) {
    console.log(array[i]);
    i++;
}