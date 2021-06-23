//Nested loop PROBLEMS 2:


let animal = [
    ['cat', 'rabbit'],
    ['pigeon', 'parrot'],
    ['goldfish', 'whale']
];

for (let i = 0; i < animal.length; i++) {
    for (let j = 0; j < animal[i].length; j++) {
        if ((animal[i][j] === "cat") || (animal[i][j] === "rabbit")) {
            console.log("Pet animals");
        } else if ((animal[i][j] === "pigeon") || (animal[i][j] === "parrot")) {
            console.log("Pet birds");
        } else if ((animal[i][j] === "goldfish") || (animal[i][j] === "whale")) {
            console.log("Fish");
        }
    }
}