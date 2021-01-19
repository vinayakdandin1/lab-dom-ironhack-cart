// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  let priceItem = product.querySelector(".price span")
  let quantityItem = product.querySelector(".quantity input")
  let subElement = product.querySelector(".subtotal span")

  let price = priceItem.innerHTML
  let quantity = quantityItem.value

  //console.log(`${price}, ${quantity.value}`)

  let subPrice = price * quantity;
  subElement.innerHTML = subPrice

  return subPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let mainTable = document.getElementById("cart")
  let particularProduct = mainTable.querySelectorAll(".product")

  //console.log(particularProduct);
  let sub = 0;
  for(let i = 0; i<particularProduct.length; i++) {
    updateSubtotal(particularProduct[i]);
    individual = updateSubtotal(particularProduct[i]);
    sub += individual
  }

  
  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = sub
 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  
  // let mainParent = document.getElementById("tablebody1")
  // mainParent.removeChild(target)

  let parentElement = target.parentNode;
  let nextParent = parentElement.parentNode
  //console.log(nextParent)
  nextParent.remove()

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let rmBtn = document.querySelectorAll(".btn-remove")

  rmBtn.forEach(function(ele) {
    ele.addEventListener('click', removeProduct)
  })

  //... your code goes here
});
