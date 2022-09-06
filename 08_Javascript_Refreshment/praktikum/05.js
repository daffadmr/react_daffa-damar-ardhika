/*
Kalian memiliki variabel berikut (let value = [1, 2, 3, 4, 5, 6]). Kalikan setiap value dalam array tersebut dengan dua. Sehingga, ketika dipanggil variabel value mengeluarkan output berupa [2, 4, 6, 8, 10, 12]
*/
let value = [1, 2, 3, 4, 5, 6];

let result = value.map((array) => array * 2);

console.log(result);