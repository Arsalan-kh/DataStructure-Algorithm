//PROBLEMS 1:

let userObject = {
    userName: 'Philip',
    fatherName: 'Norman',
    className: 'four',
};



for (let key in userObject) {
    console.log(key + " " + userObject[key]);
}

//PROBLEM 2:
//  using the same object, change the userName to your name, fatherName to your father’s name, and className to your class. 
userObject.userName = 'Arsalan khan';
userObject.fatherName = 'Abdul Sattar';
userObject.className = '13';
for (let key in userObject) {
    console.log(key + " " + userObject[key]);
}