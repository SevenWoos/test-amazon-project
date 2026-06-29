export let cart = JSON.parse(localStorage.getItem('cart')) || [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 
  quantity: 2, 
  deliveryOptionId: '1'
}, 

{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d', 
  quantity: 1, 
  deliveryOptionId: '2'
}];

// export let cart = JSON.parse(localStorage.getItem('cart'));
// if (!cart) {
//   cart = [{
//   productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 
//   quantity: 2
//   }, 

//   {
//     productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d', 
//     quantity: 1
//   }]
// }

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export function addToCart(productId) {
  // Check for duplicate items so we can increase quantity
  let matchingItem;

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
  const quantity = Number(quantitySelector.value);

  // If we find a matching duplicate item, just increase the quantity, instead of adding it again to the cart.
  if(matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId: productId, 
      quantity: quantity, 
      deliveryOptionId: '1'
    });
  }

  saveToStorage();
};

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
};  

export function calculateCartQuantity() {
  // Loop through total cart quantities.
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
};

export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    };
  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
};