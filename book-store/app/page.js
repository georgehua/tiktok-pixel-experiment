"use client"

import { useCart } from '../components/CartContext';
import Snackbar from '../components/Snackbar'; // Import the Snackbar component
import Link from 'next/link';
import { useState } from 'react';

// const books = [
//   { id: 1, title: 'History of the World', description: 'A brief history...', price: 20, image: '/book1.jpg' },
//   { id: 2, title: 'The Age of Humanity', description: 'Exploring humanity...', price: 25, image: '/book2.jpg' },
//   // Add more books as needed
// ];
const books = [
  {
    id: 1,
    title: 'Sapiens: A Brief History of Humankind',
    description: 'Explores the history of humanity from the Stone Age to the modern era.',
    price: 19.99,
    image: 'https://anylang.net/sites/default/files/covers/sapiens-brief-history-humankind_1.jpg',
  },
  {
    id: 2,
    title: 'Guns, Germs, and Steel: The Fates of Human Societies',
    description: 'Jared Diamond explores why certain societies have thrived while others have not.',
    price: 17.50,
    image: 'https://m.media-amazon.com/images/I/71V0df6wu+L._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 3,
    title: 'The History of the Decline and Fall of the Roman Empire',
    description: 'Edward Gibbon’s seminal work on the fall of one of history’s greatest empires.',
    price: 25.00,
    image: 'https://m.media-amazon.com/images/I/51s21i+0OsL._SY580_.jpg',
  },
  {
    id: 4,
    title: 'The Silk Roads: A New History of the World',
    description: 'Peter Frankopan reexamines the history of the world through the lens of the Silk Roads.',
    price: 22.99,
    image: 'https://m.media-amazon.com/images/I/91A1-6ny+pL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 5,
    title: 'A People’s History of the United States',
    description: 'Howard Zinn’s influential retelling of U.S. history from the perspective of marginalized groups.',
    price: 18.99,
    image: 'https://m.media-amazon.com/images/I/71Zb-D8NaGL._AC_UF1000,1000_QL80_.jpg',
  }
];


export default function Home() {
  const { addToCart } = useCart();
  const [snackMessage, setSnackMessage] = useState(''); // Snackbar message
  const [showSnack, setShowSnack] = useState(false); // Snackbar visibility state

  const handleAddToCart = (book) => {
    addToCart(book);
    setSnackMessage(`${book.title} added to cart!`); // Set snackbar message
    setShowSnack(true); // Show snackbar
  };

  // State to track loved books
  const [lovedBooks, setLovedBooks] = useState([]);

  // Toggle love state for a book
  const toggleLoveBook = (bookId) => {
    if (lovedBooks.includes(bookId)) {
      setLovedBooks(lovedBooks.filter((id) => id !== bookId)); // Un-love the book
    } else {
      setLovedBooks([...lovedBooks, bookId]); // Love the book
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">George's History & Humanity Bookstore</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {books.map((book) => (
          <div key={book.id} className="border p-4 rounded-lg shadow-md flex flex-col justify-between h-full">
            <div>
              <img src={book.image} alt={book.title} className="mb-4" />
              <h2 className="text-xl font-bold">{book.title}</h2>
              <p className="text-gray-600">{book.description}</p>
            </div>
            <div>
            <p className="text-lg font-semibold mt-2">${book.price}</p>

            <button
              className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700"
              onClick={() => handleAddToCart(book)}  // Call the handler
            >
              Add to Cart
            </button>
            {/* Love Button */}
            <button
              className={`py-2 px-4 mt-4 ml-2 rounded transition-colors ${
                lovedBooks.includes(book.id) ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => toggleLoveBook(book.id)}
            >
              {lovedBooks.includes(book.id) ? 'Loved ❤️' : 'Love this Book'}
            </button>
            </div>
            
          </div>
        ))}
      </div>
      <Link href="/checkout" legacyBehavior>
        <a className="block bg-orange-500 font-bold text-white py-2 px-4 mt-6 rounded hover:bg-orange-700">
          Go to Checkout
        </a>
      </Link>
      
      {/* Snackbar Component */}
      <Snackbar message={snackMessage} show={showSnack} />
    </div>
  );
}
