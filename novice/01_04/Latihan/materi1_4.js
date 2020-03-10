const nama = ['Cindy', 'Indah', 'Nola'];
 
const germanPhonebook = new Intl.Collator('de-DE-u-co-phonebk');
 
console.log(nama.sort(germanPhonebook.compare).join(', '));