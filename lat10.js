// Misalkan ini adalah array warna
let warna = ['merah', 'kuning', 'hijau', 'biru', 'kuning'];

// Mengubah semua kemunculan 'kuning' menjadi 'biru' menggunakan bracket notation
for (let i = 0; i < warna.length; i++) {
  if (warna[i] === 'kuning') {
    warna[i] = 'biru';
  }
}

console.log(warna);
