let myName = "Arsalan"

function getAllIndices(input) {

    for (let i = 0; i < input.length; i++) {
        //you simply need to output i.
        console.log(i + " < " + input[i]);

    }
    console.log("Length of my name is " + myName.length);
}

getAllIndices(myName);