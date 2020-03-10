function directory(){
    var kata = new Map([
        ['cucumber', 500],
        ['tomatoes', 350],
        ['onion', "bawang"]
    ]);
    console.log(kata);
    let a = prompt("Masukkan Kata");
    let b = prompt("Masukkan Kata");
    
    console.log(a,b);

    kata.set(a,b);
    console.log(kata.get(a));
    console.log(kata);

}
directory();

function cari_kata(kata){

    var c = document.getElementById("demo").value;
    var kata = new Map([
        ['cucumber', 500],
        ['tomatoes', 350]
        ['onion', "bawang"]
    ]);

}

cari_kata();