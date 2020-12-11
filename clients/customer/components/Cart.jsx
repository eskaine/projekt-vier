import React, { useState, useRef } from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Cart({ session }) {
  const [cartPosition, setCartPosition] = useState('-60');
  const expandCart = useRef(false);

  const cartData = [
    {
      name: 'Lobster & Crab Stuffed Mushrooms',
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/cuxqLB9H2685fJoAAa3C.jpg',
      price: 12,
      description: 'Oysters on the half-shell baked with cheese & sprinkled with bacon bits',
      quantity: 2,
    },
    {
      name: 'Prawn & Mango Delight',
      price: 12,
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/Qgyke2b3STK09wHWWs7R.jpg',
      description: 'Chicken wings marinated in Chef’s special seasoning & deep-fried to perfection',
      quantity: 2,
    },
    {
      name: 'Combo',
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/sUDmgQV7ve4SgXOuNajL.jpg',
      price: 12,
      description: 'Chicken wings marinated in Chef’s special seasoning & deep-fried to perfection',
      quantity: 2,
    },
    {
      name: 'Seafood',
      price: 5,
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/uYLGylmtE8rQvPXlRSfu.jpg',
      description: 'Chicken wings marinated in Chef’s special seasoning & deep-fried to perfection',
      quantity: 2,
    },
    {
      name: 'Beverages',
      price: 15,
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/J65f5UAB3TW5zpU5DlYU.jpg',
      description: 'Chicken wings marinated in Chef’s special seasoning & deep-fried to perfection',
      quantity: 2,
    },
    {
      name: 'Pasta',
      price: 12,
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/uYLGylmtE8rQvPXlRSfu.jpg',
      description: 'Chicken wings marinated in Chef’s special seasoning & deep-fried to perfection',
      quantity: 2,
    },
    {
      name: 'Prawn & Mango Delight',
      price: 12,
      img_url:
        'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/Qgyke2b3STK09wHWWs7R.jpg',
      description: 'Chicken wings marinated in Chef’s special seasoning & deep-fried to perfection',
      quantity: 2,
    },
    // {
    //   name: 'Lobster & Crab Stuffed Mushrooms',
    //   img_url:
    //     'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/cuxqLB9H2685fJoAAa3C.jpg',
    //   price: 12,
    //   description: 'Oysters on the half-shell baked with cheese & sprinkled with bacon bits',
    //   quantity: 2,
    // },
    // {
    //   name: 'Lobster & Crab Stuffed Mushrooms',
    //   img_url:
    //     'https://res.cloudinary.com/d7bdciwna5/image/upload/v1607397311/vier/cuxqLB9H2685fJoAAa3C.jpg',
    //   price: 12,
    //   description: 'Oysters on the half-shell baked with cheese & sprinkled with bacon bits',
    //   quantity: 2,
    // },
  ];

  function toggleExpandCart() {
    expandCart.current = !expandCart.current;
    if (expandCart.current === true) {
      setCartPosition('0');
    } else if (expandCart.current === false) {
      setCartPosition('-60');
    }
  }

  function calculateTotal(cart) {
    let total = 0;
    for (const item of cart) {
      total += item.price;
    }
    return total;
  }

  const cartTotal = calculateTotal(cartData);

  const cartItems = cartData.map((item) => (
    <div className="cart-item-card">
      <h6>{item.name}</h6>
      <p>${item.price}</p>
    </div>
  ));

  return (
    <div className="cart-div" style={{ bottom: `${cartPosition}vh` }}>
      <div className="cart-header" onClick={() => toggleExpandCart()}>
        <h4>Shopping Cart</h4>
        <FontAwesomeIcon
          icon={faChevronUp}
          className="fa-arrow"
          style={expandCart.current === true ? { transform: 'rotate(180deg)' } : {}}
        />
      </div>
      <div className="cart-body">{cartItems}</div>
      <div className="cart-footer">
        <div>Place Order</div>
        <div> Total: ${cartTotal}</div>
      </div>
    </div>
  );
}

export default Cart;
