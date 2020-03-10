function calculateSupply(umur, jumPerHari) {
    var MaksUmur = 100;
    var total = (jumPerHari * 365) * (MaksUmur - umur);
    var pesan = 'Anda Membutuhkan ' + total + ' cangkir teh untuk Anda sampai usia ' + MaksUmur;
    document.write(pesan);
  }
  
  calculateSupply(28, 36);
  calculateSupply(28, 2.5);
  calculateSupply(28, 400);