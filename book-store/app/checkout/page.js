"use client"

import { useCart } from '../../components/CartContext';
import Snackbar from '../../components/Snackbar'; // Import the Snackbar component
import Link from 'next/link';
import { useState } from 'react';

export default function Checkout() {
  const { cart, removeFromCart } = useCart();
  const [snackMessage, setSnackMessage] = useState(''); // Snackbar message
  const [showSnack, setShowSnack] = useState(false); // Snackbar visibility state

  const handleRemoveFromCart = (item) => {
    removeFromCart(item.id);
    setSnackMessage(`${item.title} removed from cart!`); // Set snackbar message
    setShowSnack(true); // Show snackbar
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/" legacyBehavior><a className="text-blue-500">Continue Shopping</a></Link></p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-md mb-4">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-lg font-semibold">${item.price}</p>
              <button
                className="bg-red-500 text-white py-2 px-4 mt-4 rounded hover:bg-red-700"
                onClick={() => handleRemoveFromCart(item)}  // Call the handler
              >
                Remove
              </button>
            </div>
          ))}
          <button className="bg-green-500 text-white py-2 px-4 mt-4 rounded hover:bg-green-700">
            Checkout
          </button>
        </div>
      )}

      <Link href="/" legacyBehavior>
        <a className="block bg-blue-500 text-white py-2 px-4 mt-6 rounded hover:bg-blue-700">
          Back to Books
        </a>
      </Link>

      {/* Snackbar Component */}
      <Snackbar message={snackMessage} show={showSnack} />
    </div>
  );
}
