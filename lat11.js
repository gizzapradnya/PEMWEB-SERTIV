// Mendefinisikan objek kucing
let kucing = {
    nama: 'Tom',
    umur: 3
  };
  
  // Menambahkan method suara ke objek kucing
  kucing['suara'] = function() {
    return 'Meong';
  };
  
  // Menggunakan method suara
  console.log(kucing.suara()); // Output: Meong
  