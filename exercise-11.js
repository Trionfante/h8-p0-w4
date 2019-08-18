function shoppingTime(memberId, money) {
	// debugger
	var sale = [
		{
			goods: 'Sepatu Stacattu',
			price: 1500000
		},
		{
			goods: 'Baju Zoro',
			price: 500000
		},
		{
			goods: 'Baju H&N',
			price: 250000
		},
		{
			goods: 'Sweater Uniklooh',
			price: 175000
		},
		{
			goods: 'Casing Handphone',
			price: 50000
		}
	];
	var bought = [];
	var Receipt = {};

	if (typeof(memberId) != 'string' || memberId.length == 0) {
		return 'Mohon maaf, toko X hanya berlaku untuk member saja';
		// parameter is Not a Number == true, then one of the || condition is fulfilled, hence returns rejection.
	} else if (money < 50000 || isNaN(money)) {
		return 'Mohon maaf, uang tidak cukup'
	}

	Receipt.memberId = memberId;
	Receipt.money = money;
	for (var i = 0; i < sale.length; i++) {
		debugger
		if (money >= sale[i].price) {
			money -= sale[i].price
			bought.push(sale[i].goods);
			// console.log(money);
		}
	}
	Receipt.listPurchased = bought;
	Receipt.changeMoney = money;
	
	return Receipt;
}

  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //	{	memberId: '1820RzKrnWn08',
  //	 	money: 2475000,
  //	 	listPurchased:
  //	  [ 'Sepatu Stacattu',
  //	    'Baju Zoro',
  //	    'Baju H&N',
  //	    'Sweater Uniklooh',
  //	    'Casing Handphone' ],
  //	 	changeMoney: 0 }
	console.log(shoppingTime('82Ku8Ma742', 170000));
  //	{ memberId: '82Ku8Ma742',
  // 		money: 170000,
  // 		listPurchased:
  //  	[ 'Casing Handphone' ],
	// 		changeMoney: 120000 }
	console.log(shoppingTime('', 2475000));
	//	Mohon maaf, toko X hanya berlaku untuk member saja
	console.log(shoppingTime('234JdhweRxa53', 15000));
	//	Mohon maaf, uang tidak cukup
	console.log(shoppingTime());
	//	Mohon maaf, toko X hanya berlaku untuk member saja