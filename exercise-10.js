function changeMe(arr) {
	debugger
	// console.log(typeof(arr[0][0]));
  var Obj = {};
  if (arr.length == 0) {
		console.log("");
	}
  for (var i = 0; i < arr.length; i++) {
		console.log((i+1) + '. ' + arr[i][0] + ' ' + arr[i][1])
    Obj.firstName = arr[i][0];
    Obj.lastName = arr[i][1];
		Obj.gender = arr[i][2];
			// return value from typeof is not object's Type property,
			// - but object's Type name in String.
		if (typeof(arr[i][3]) != "number" || arr[i][3] > 2019) {
    	Obj.age = 'Invalid Birth Year';
		} else {
			Obj.age = 2019 - arr[i][3];
		}
		console.log(Obj);
  }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""