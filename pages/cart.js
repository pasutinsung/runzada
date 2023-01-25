import Layout from "@/components/Layout";
import Link from "next/link";
import React, { useContext } from "react";
import { Store } from "@/utils/Stores";
import Image from "next/image";
import { router, useRouter } from "next/router";
import dynamic from "next/dynamic";
function CartScreen() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };
  const updateCartHandler = (item, qty) => {
    const quantity = Number(qty);
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };
  return (
    <Layout title="Shopping cart">
      <h1 className="mb-4 next-xl">Shoping cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty
          <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full">
              <thead className="border-b">
                <th className="px-5 text-left">Item</th>
                <th className="p-5 text-right">Quantity</th>
                <th className="p-5 text-right">Price</th>
                <th className="p-5 ">Action</th>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.slug} className="border-b">
                    <td>
                      <Link href={`/product/${item.slug}`}>
                        <div className="flex items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                          ></Image>
                          &nbsp;
                          {item.name}
                        </div>
                      </Link>
                    </td>
                    <td className="p-5 text-right">
                      <select
                        value={item.cartItems}
                        onChange={(e) =>
                          updateCartHandler(item, e.target.value)
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-5 text-right">{item.price}$</td>
                    <td className="p-5 text-center">
                      <button onClick={() => removeItemHandler(item)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" />
                          <path
                            fillRule="evenodd"
                            d="M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zm5.22 1.72a.75.75 0 011.06 0L10 10.94l1.72-1.72a.75.75 0 111.06 1.06L11.06 12l1.72 1.72a.75.75 0 11-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 01-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mb-5 p-5 block rounded-lg border border-gray-100 shadow-md">
            <ul>
              <li>
                <div className="pb-3 text-xl">
                  Subtotal {cartItems.reduce((a, c) => a + c.quantity, 0)}
                  {"   "} :{" "}
                  {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)} $
                </div>
              </li>
              <li>
                <button
                  onClick={() => router.push("/shipping")}
                  className="rounded bg-green-300  py-2 px-4 shadow outline-none hover:bg-green-200  active:bg-green-400 w-full"
                  type="button"
                >
                  Check out
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
}
export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
