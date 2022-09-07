let a = 5;
let b = "kampus merdeka";
const NAMA = "Budi";
let terdaftar = true;
let lengkapArr = [a, b, NAMA, terdaftar];

function perkenalan() {
  let asal = "Indonesia";
  return console.log(
    "perkenalkan nama saya " +
      NAMA +
      " nomor urut " +
      a +
      " sekarang sedang mengikuti " +
      b +
      "berasal dari " +
      asal
  );
}

if (terdaftar === true) {
  console.log(NAMA + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// Ambil index ke 2 dalam array di baris 5 dan tampilkan dalam console
let indexNumberTwo = lengkapArr[2];
console.log("array = " + indexNumberTwo);

console.log("a adalah = " + a);
console.log("b adalah = " + b);

perkenalan();

// Ubah kode di atas sehingga dapat menampilkan baris 22 di dalam console.
//Melakukan reassignment variable terdaftar dari false menjadi true.

//Lakukan pemanggilan untuk function perkenalan pada baris 31
//di baris 33 sudah dipanggil