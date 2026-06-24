export const cart = [];

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
      quantity: quantity
    });
  }
};