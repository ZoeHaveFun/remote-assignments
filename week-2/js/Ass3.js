const data = {
  size: 3,
  products: [{
      name: "Product 1",
      price: 100
    },
    {
      name: "Product 2",
      price: 700
    },
    {
      name: "Product 3",
      price: 250
    }
  ]
}

function avg(data) {
  let car =  data.products
  let total = 0
  for (let i = 0; i < car.length; i++) {
    total = total + car[i].price
  }
  console.log("Ass3->", total);
}