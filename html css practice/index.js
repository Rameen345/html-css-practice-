let cart = [];
    let total = 0;

    function addToCart(itemName, itemPrice) {
      // Add item to the cart array
      cart.push({ name: itemName, price: itemPrice });

      // Update the cart display
      updateCartDisplay();
    }

    function updateCartDisplay() {
      // Update the cart items list
      const cartItemsList = document.getElementById('cart-items');
      cartItemsList.innerHTML = '';

      cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
      });

      // Update the total price
      total = cart.reduce((acc, item) => acc + item.price, 0);
      document.getElementById('cart-total').textContent = total.toFixed(2);
    }

