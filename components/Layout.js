import Link from "next/link";
import React, { Children } from "react";

export default function Layout({ children }) {
  return (
    <>
      <title>runzada</title>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between px-4 items-center shadow-md">
            <Link href="/" className="text-lg font-bold">
              runzada
            </Link>
            <div>
              <Link href="/Cart" className="p-2">
                Cart
              </Link>
              <Link href="/Login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          footer
        </footer>
      </div>
    </>
  );
}
