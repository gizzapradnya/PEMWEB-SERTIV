// Mendeklarasikan dua array nama buah
const namaBuah1 = ["apel", "mangga"];
const namaBuah2 = ["sirsak", "semangka"];

// Menggunakan spread operator untuk menggabungkan namaBuah1 dan namaBuah2
const semuaNamaBuah = [...namaBuah1, ...namaBuah2];

// Menampilkan hasil
console.log(semuaNamaBuah); // Output: ["apel", "mangga", "sirsak", "semangka"]
