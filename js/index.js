// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let priceItem = document.querySelector(".price span")
  let quantityItem = document.querySelector(".quantity input")
  let subElement = document.querySelector(".subtotal span")


  let price = priceItem.innerHTML
  let quantity = quantityItem.value

  console.log(`${price}, ${quantity.value}`)

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

  let onePriceItem = document.querySelectorAll(".price span")
  let oneFinalPrice =  onePriceItem[0].innerHTML;
  let twoFinalPrice =  onePriceItem[1].innerHTML;

  let quantItem = document.querySelectorAll(".quantity input")
  let oneFinalQuant = quantItem[0].value
  let twoFinalQuant = quantItem[1].value

  let firstSubElement = document.querySelectorAll(".subtotal span")

  //console.log(oneFinalPrice, twoFinalPrice, oneFinalQuant, twoFinalQuant)

  let firstSubprice = oneFinalPrice * oneFinalQuant
  let secondSubPrice = twoFinalPrice * twoFinalQuant

  firstSubElement[0].innerHTML = firstSubprice
  firstSubElement[1].innerHTML = secondSubPrice


  // ITERATION 3
  
  let finalTotal = firstSubprice + secondSubPrice

  let totalValue = document.querySelector("#total-value span")
  totalValue.innerHTML = finalTotal
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  let parentElement = target.parentNode;
  let nextParent = parentElement.parentNode
  console.log(nextParent)
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
