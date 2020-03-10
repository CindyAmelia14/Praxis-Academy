function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Cindy", "Adi", "Cindy", "Adi",
  "Adi", "Adi", "Cindy", "Cindy", ":-O"
];

console.log ( unique(values) );