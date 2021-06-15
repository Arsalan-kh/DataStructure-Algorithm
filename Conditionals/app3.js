// //Problem no 3
// var num = prompt("Enter a num");

// switch (true) {
//     case (num < 10):
//         console.log("Number is less than 10");
//         break;
//     case (num > 10):
//         console.log("Number is greater than 10");
//         break;
//     case (num == 10):
//         console.log("Number is Equal to 10");
//         break;
// }

//Problem no 5 Check wheater a animal is wild or not//

var Wildanimal = prompt("Enter a Animal name");

switch (true) {
    case (Wildanimal === "lion" || Wildanimal === "leopard"):
        console.log("Wild Animal");
        break;
    case (Wildanimal === "cat" || Wildanimal === "rabbit"):
        console.log("Pet animal");
        break;
    default:
        Wildanimal = "Unknown"
        console.log(Wildanimal);
}