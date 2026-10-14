// Cara untuk membuat Object pada javascript
// 1. Object Literal
let mahasiswa1 = {
  nama: "Sandhika",
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
};

let mahasiswa2 = {
  nama: "Doddy",
  energi: 20,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
};

// 2. Function Declaration
// function 






// 3. Constructor Function
// 4. Object.create
