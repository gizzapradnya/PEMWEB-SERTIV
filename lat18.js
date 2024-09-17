// Mendeklarasikan variabel angka sebagai array kosong
let angka = [];

// Inisialisasi variabel i
let i = 5;

// Menggunakan do...while loop
do {
  angka.push(i); // Menambahkan nilai i ke dalam array angka
  i++; // Menambah nilai i
} while (i <= 10); // Loop akan berhenti jika i lebih besar dari 10

// Menampilkan hasil
console.log(angka); // Output: [5, 6, 7, 8, 9, 10]
console.log(i); // Output: 11
