/*
================
Kalkulator Nilai
================

[INSTRUCTIONS]
Kamu diminta menghitung Nilai Ujian Nasional dari sebuah laporan nilai murid.
Buatlah function kalkulatorNilai yang menerima satu parameter berupa string.
function tersebut akan menghitung total nilai dan memutuskan apakah murid tersebut lulus/tidak.
Adapun ketentuannya:
  - A bernilai 4
  - B bernilai 3
  - C bernilai 2
  - D bernilai 1
  - E bernilai 0
  - Murid dinyatakan TIDAK LULUS jika ada mata pelajaran memperoleh nilai E, selain itu LULUS.

[RULES]
  - WAJIB menggunakan ALGORITMA atau PSEUDOCODE.
*/


// Algorithm or pseudocode here
//   1. Look for 'E' from the input,
//   2. If 'E' is found, store graduate equals 'TIDAK LULUS'.
//   3. Add every entry from the input, with each letter switched by specified Value from INSTRUCTIONS.
//   4. Print out value of graduate, followed by total value from all the entry.

function kalkulatorNilai(nilai) {
  var graduateStatus = '';
  if (nilai.indexOf('E') !== -1) {
    graduateStatus = 'Maaf kamu TIDAK LULUS';
  } else {
    graduateStatus = 'Selamat kamu LULUS!';
  }
  
  function convertLetter(letter) {
    if (letter == 'A') {
      return 4;
    } else if (letter == 'B') {
      return 3;
    } else if (letter == 'C') {
      return 2;
    } else if (letter == 'D') {
      return 1;
    } else if (letter == 'E') {
      return 0;
    }
  }

  var score = 0;
  for (i = 0; i < nilai.length; i++) {
    score = score + convertLetter(nilai[i]);
  }

  return 'Total Nilai: ' + score + '. ' + graduateStatus;
}

console.log(kalkulatorNilai("AABCADDA")); // Total Nilai: 23. Selamat kamu LULUS!
console.log(kalkulatorNilai("AAAAEA")); // Total Nilai: 20. Maaf kamu TIDAK LULUS.
console.log(kalkulatorNilai("ABCDD")); // Total Nilai: 11. Selamat kamu LULUS!