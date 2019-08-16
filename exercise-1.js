function angkaPrima(angka) {
    if (angka < 2) {
        return false;
    } else {
        for (var i = 2; i < angka-1; i++) {
            if (angka % i == 0) {
                    return false;
                }
            }
        }
        return true;
    }

  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false

/*
function angkaPrima(angka) {
    debugger
    if (angka < 2) {
        return '0' + angka + ' is not prime'
    } else {
        for (var i = 2; i < angka-1; i++) {
            if (angka % i == 0) {
                if (angka < 10) {
                    return '0' + angka + ' is composite';
                } else {
                    return angka + ' is composite'
                }
            }
        }
    }
    if (angka < 10) {
        return '0' + angka + ' is prime';
    } else {
        return angka + ' is prime';
    }
  }
  
  for (var count = 0; count < 100; count++) {
      console.log(angkaPrima(count));
  }

  */