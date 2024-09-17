// Mendefinisikan objek tubuh dengan properti roda
let tubuh = {
    roda: 4,
    warna: 'merah',
    ukuran: 'besar'
};

// Menampilkan objek tubuh sebelum menghapus properti roda
console.log("Sebelum dihapus:", tubuh);

// Menghapus properti roda dari objek tubuh
delete tubuh.roda;

// Menampilkan objek tubuh setelah menghapus properti roda
console.log("Setelah dihapus:", tubuh);
