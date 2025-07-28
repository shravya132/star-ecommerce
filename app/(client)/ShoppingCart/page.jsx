"use client";
import { useState } from "react";

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product A",
      price: 19.99,
      quantity: 2,
    },
    {
      id: 2,
      name: "Product B",
      price: 9.99,
      quantity: 1,
    },
  ]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(({ id, name, price, quantity }) => (
            <li key={id} className="flex justify-between mb-3">
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-600">Qty: {quantity}</p>
              </div>
              <div>${(price * quantity).toFixed(2)}</div>
            </li>
          ))}
          <li className="flex justify-between font-bold border-t pt-3 mt-3">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </li>
        </ul>
      )}
    </div>
  );
}
