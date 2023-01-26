import { Store } from "@/utils/Stores";
import Link from "next/link";
import React, { Children, useContext } from "react";
import { useState, useEffect } from "react";
export default function Layout({ children }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <>
      <title>runzada</title>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between px-4 items-center shadow-md">
            <Link href="/" className="text-lg font-bold text-red-500">
              runzada
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                Cart
                {cart.cartItems.length > 0 && (
                  <span className="ml-1 rounded-full bg-blue-300 px-2 py-1 text-xs font-bold text-white">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                )}
              </Link>
              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          @runzada
        </footer>
      </div>
    </>
  );
}
