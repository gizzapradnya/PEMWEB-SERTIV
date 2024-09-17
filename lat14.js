// Mendefinisikan fungsi ganjilGenap
function ganjilGenap(platNomor) {
    // Memeriksa apakah platNomor adalah bilangan ganjil atau genap
    if (platNomor % 2 === 0) {
      return 'Genap'; // Plat nomor adalah genap
    } else {
      return 'Ganjil'; // Plat nomor adalah ganjil
    }
  }
  
  // Contoh penggunaan
  console.log(ganjilGenap(7)); // Output: Ganjil
  console.log(ganjilGenap(10)); // Output: Genap
  