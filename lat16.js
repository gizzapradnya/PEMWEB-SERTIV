// Variabel angka yang sudah ada
const angka = [1, 2, 3, 4, 5, 75, 89, 100, 101];

// Mendeklarasikan variabel ganjil sebagai array kosong
let ganjil = [];

// Menggunakan for...of loop untuk memeriksa setiap angka dalam array angka
for (let num of angka) {
  // Memeriksa jika num adalah bilangan ganjil
  if (num % 2 !== 0) {
    ganjil.push(num); // Menambahkan angka ganjil ke dalam array ganjil
  }
}

// Menampilkan hasil
console.log(ganjil); // Output: [1, 75, 89, 101]
