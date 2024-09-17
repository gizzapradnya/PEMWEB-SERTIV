// Mendefinisikan fungsi warnaKesukaan dengan parameter default
function warnaKesukaan(warna = 'putih') {
    return 'Warna kesukaan saya adalah ' + warna;
  }
  
  // Contoh penggunaan
  console.log(warnaKesukaan()); // Output: Warna kesukaan saya adalah putih
  console.log(warnaKesukaan('biru')); // Output: Warna kesukaan saya adalah biru
  