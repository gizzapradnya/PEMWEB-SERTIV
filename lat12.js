// Mendefinisikan bilangan untuk setiap operasi

// 1. Bilangan untuk Math.pow sehingga hasilnya integer
let base = 2;
let exponent = 3;
let powResult = Math.pow(base, exponent); // 2^3 = 8

// 2. Bilangan untuk Math.sqrt sehingga hasilnya integer
// Kita pilih kuadrat dari integer yang sudah diketahui
let number = 16;
let sqrtResult = Math.sqrt(number); // sqrt(16) = 4

// 3. Bilangan untuk Math.max sehingga hasilnya integer
let a = 8;
let b = 4;
let maxResult = Math.max(a, b); // max(8, 4) = 8

// Menampilkan hasil
console.log('Hasil Math.pow:', powResult); // Output: 8 (integer)
console.log('Hasil Math.sqrt:', sqrtResult); // Output: 4 (integer)
console.log('Hasil Math.max:', maxResult); // Output: 8 (integer)
