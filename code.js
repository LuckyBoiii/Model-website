// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {resizeFunction()}

function resizeFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    "Om man scrollar ner så händer följande:"
    document.getElementById("header").style.height = "50px"
  } else {
    "Om man scrollar hela vägen upp händer följade:"
    document.getElementById("header").style.height = "80px"
  }
}



// cart
function openCart() {
  document.getElementById("cart").style.right = 0
  document.getElementById("cart").style.boxShadow = "-3px 0px 10px 0px rgba(0, 0, 0, 0.589)"
}
function closeCart() {
  document.getElementById("cart").style.right = "-100%"
  document.getElementById("cart").style.boxShadow = "none"
}

//cart working JS
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
}else{
  ready()
}

//Making function
function ready() {
  //remove items from cart
  var removeCartButtons = document.getElementsByClassName('cartRemove')
  console.log(removeCartButtons)
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i]
    button.addEventListener('click', removeCartItem)
  }
  //add to cart
  var addToCartButtons = document.getElementsByClassName('addToCart')
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
  }
  //buy button work
  document
    .getElementsByClassName('btnBuy')[0]
    .addEventListener('click', buyButtonClicked)
}

//buy button
function buyButtonClicked() {
  alert('Thank you for your purchase')
  var cartContent = document.getElementsByClassName('cartContent')[0]
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild)
  }
  updateTotal()
}

//remove item from cart
function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateTotal()
}

//add to cart
function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('shopItemTitle')[0].innerText
  var price = shopItem.getElementsByClassName('shopItemPrice')[0].innerText
  var productImage = shopItem.getElementsByClassName('shopItemImage')[0].src
  addProductToCart(title, price, productImage)
  updateTotal()
}
function addProductToCart(title, price, productImage) {
  var cartItems = document.getElementsByClassName('cartContent')[0]
  var cartItemsNames = cartItems.getElementsByClassName('cartProductTitle')
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert('This item is already added to the cart')
      return
    }
  }
  var cartShopBox = document.createElement('div')
  cartShopBox.classList.add('cartBox')
  var cartBoxContent = `
      <div class="addedProduct">
        <img class="cartImg" src="${productImage}"></img>
        <div class="detailBox">
          <span class="cartProductTitle">${title}</span>
          <div class="cartPrice">${price}</div>
        </div>
        <img class="cartRemove trashImg" src="images/trash.png">
      </div>
  `
  cartShopBox.innerHTML = cartBoxContent
  cartItems.append(cartShopBox)
  cartShopBox
    .getElementsByClassName('cartRemove')[0]
    .addEventListener('click', removeCartItem) 
}

//update total
function updateTotal() {
  var cartContent = document.getElementsByClassName('cartContent')[0]
  var cartBoxes = cartContent.getElementsByClassName('cartBox')
  var total = 0
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i]
    var priceElement = cartBox.getElementsByClassName('cartPrice')[0]
    var price = parseFloat(priceElement.innerText.replace('$', ''))
    total = Math.round((total + price)*100)/100
  }
  if (cartBoxes.length === 0) {
    total = 0
  }
  document.getElementsByClassName("totalPrice")[0].innerText = "$" + total
}