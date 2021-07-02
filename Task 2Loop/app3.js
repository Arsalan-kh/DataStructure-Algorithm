let animals = ['cat', 'rabbit', 'pigeon', 'parrot', 'goldfish'];
var i = 0;

do {

    console.log("this is ", animals[i]);
    i++

} while (animals[i] != undefined);
if (i > 4) {
    console.log("this is something else");
}