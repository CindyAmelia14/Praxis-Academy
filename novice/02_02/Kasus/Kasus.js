class Cat {
    constructor(nama, kelelahan, kelaparan, kesepian, bahagia) {
        this.nama = nama;
        this.kelelahan = kelelahan;
        this.kelaparan = kelaparan;
        this.kesepian = kesepian;
        this.bahagia = bahagia;
    }

    tidur(jam){
        this.kelelahan -= jam
        this.kelaparan -= jam
        return '${this.nama} Selesai tidur.'
    }

    makan(porsi){
        this.kelaparan += porsi;
        return '${this.nama} Selesai makan.'
    }

    rawat(senang){
        this.kesepian -= senang 
        if (this.kelelahan > 30) {
            return '${this.nama} Tidak ingin diganggu.'
        } else {
            return '${this.nama} Tidak kesepian lagi.'
        }
    }

    main(main) {
        this.kelelahan += main
        this.bahagia += main
        return '${this.nama} Mulai kelelahan, tapi ${this.nama} Merasa senang.'
    }
}

let cicin = new Cat('cicin', 30, 20, 30, 10)
console.log(cicin);

 