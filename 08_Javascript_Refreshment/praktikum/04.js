/*
Kalian memiliki sebuah variabel berikut (let bdays = ["10-17", "05-19", "20-19"]). Ubahlah tanda (-) dalam variable tersebut menjadi (/) sehingga output yang akan keluar dalam console menjadi ['10/17', '05/19', '20/19']
*/

let bdays = ["10-17", "05-19", "20-19"];

let result = bdays.map((array) => array.replace("-", "/"));

console.log(result);