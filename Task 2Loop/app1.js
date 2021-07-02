var arr = [1, 8, 7, 3, 2, 9, 10, 12];

function test_prime(n) {

    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(test_prime(arr));