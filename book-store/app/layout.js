import './globals.css';
import { CartProvider } from '../components/CartContext';

export const metadata = {
  title: 'Book Store',
  description: 'Selling history and humanities books',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
