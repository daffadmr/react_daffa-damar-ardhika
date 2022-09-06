/*
Kalian memiliki variabel berikut (let arr = [1.5, 2.56, 5.1, 12.33]). Bulatkan ke atas variabel terseut sehingga output yang dihasilkan adalah [2, 3, 5, 12]
*/

let arr = [1.5, 2.56, 5.1, 12.33];

let result = arr.map((array) => Math.round(array));

console.log(result);
