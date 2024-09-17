// Variabel angka yang sudah ada
const angka = [46, 75, 12, 54, 89, 100, 101];

// Mendeklarasikan variabel genap sebagai array kosong
let genap = [];

// Menggunakan for loop untuk memeriksa setiap angka dalam array angka
for (let i = 0; i < angka.length; i++) {
  // Memeriksa jika angka adalah bilangan genap
  if (angka[i] % 2 === 0) {
    genap.push(angka[i]); // Menambahkan angka genap ke dalam array genap
  }
}

// Menampilkan hasil
console.log(genap); // Output: [46, 12, 54]
