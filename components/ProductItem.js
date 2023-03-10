import Link from "next/link";
import React from "react";
export default function ProductItem({ product }) {
  return (
    <div className="mb-5 block rounded-lg border border-gray-100 shadow-md">
      <Link href={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow"
        ></img>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
}
