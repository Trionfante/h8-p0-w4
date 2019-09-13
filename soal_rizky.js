var pricelist = [{ // 1 array
  name: 'pencil',
  types: [
    {type: '2b', price: 20},
    {type: '4b', price: 22},    // 1 a
    {type: 'hb', price: 24}
  ]
}, { // 1 object
  name: 'clothes',
  types: [
    {type: 'undies', price: 50},
    {type: 't-shirt', price: 55}, // 1 a
    {type: 'shorts', price: 80}
  ]
}, { // 2 object
  name: 'utensils',
  types: [
    {type: 'spoon', price: 88}, // 1 a
    {type: 'fork', price: 88}
  ]
}] // 3 object

// console.log(pricelist[0].types[1].price);

var cart = [  // length
  { name: 'pencil', type: '2b' },
  { name: 'pencil', type: '2b' },
  { name: 'pencil', type: '4b' },
  { name: 'pencil', type: 'hb' },
  { name: 'utensils', type: 'fork' },
  { name: 'utensils', type: 'fork' },
  { name: 'utensils', type: 'fork' },
  { name: 'utensils', type: 'spoon' },
  { name: 'clothes', type: 'undies' },
  { name: 'clothes', type: 't-shirt' },
  { name: 'clothes', type: 'shorts' },
]

// console.log(cart[0].name + ' ' + cart[0].type);

function checkout(input) {
  var output = 0; // get value, add here

  for (var i = 0; i < input.length; i++) {

  }
}