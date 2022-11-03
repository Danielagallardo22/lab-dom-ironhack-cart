// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span')
  const quantityElement = product.querySelector('.quantity input')
  const price = priceElement.innerHTML
  const quantity = quantityElement.value

  const subtotal = price * quantity

  let subtotalElement = product.querySelector('.subtotal span')
  subtotalElement.innerHTML = subtotal

  console.log('Calculating subtotal, yey!', subtotal);

  return subtotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let productElements = document.querySelectorAll('.product');
  let totalPrice = 0;

  productElements.forEach(function(product){
    let productTotal = updateSubtotal(product);
    totalPrice = totalPrice + productTotal;
  });
 
// ITERATION 3

  let finalTotal = document.querySelector('#total-value span') 
  finalTotal.innerHTML = totalPrice

 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentElement.parentElement);
  
 
  target.parentElement.parentElement.remove();

}

// ITERATION 5

function createProduct() {
  
  let newProduct = document.querySelector('.product ');
  let createNewProduct = newProduct.cloneNode(true); 

  let productName = document.querySelector('.create-product input[type="text"]').value
  let productPrice = document.querySelector('.create-product input[type="number"]').value

  createNewProduct.querySelector('.name span').textContent = productName
  createNewProduct.querySelector('.price span').textContent = productPrice
  
  document.querySelector('tbody').appendChild(createNewProduct)

  createNewProduct.querySelector('.btn-remove').addEventListener("click" , removeProduct)
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let createButton = document.querySelector('#create')
  createButton.addEventListener('click', createProduct);


 let removeBtns = document.querySelectorAll(".btn-remove")
 
 for (let i = 0; i <removeBtns.length; i++){
    removeBtns[i].addEventListener("click" , removeProduct)
 }

});
