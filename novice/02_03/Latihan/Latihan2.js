var people = [
    {nama: "Cindy", umur: 21 },
    {nama: "Adi", umur: 22},
    {nama: "Yogi", umur: 25}
];

var peopleSentences = []

for (var i = 0; i < people.length; i++) {
    var sentence = people[i].nama + " adalah " + people[i].umur + " tahun ";
    peopleSentences.push(sentence);
}

console.log(peopleSentences);