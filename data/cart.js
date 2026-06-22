export const cart = [];

export function addToCart(productId) {
  // Check for duplicate items so we can increase quantity
  let matchingItem;

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // If we find a matching duplicate item, just increase the quantity, instead of adding it again to the cart.
  if(matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId, 
      quantity: 1
    });
  }
};
