import React from "react";
import { router, useRouter } from "next/router";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Stores";
import cart from "./cart";
import { STATES } from "mongoose";
const reset = () => {
  dispatch({ type: "CART_RESET", cart });
};
export default function thankyou() {
  return (
    <div class="bg-gray-100 h-screen">
      <div class="bg-white p-6  md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          class="text-green-600 w-16 h-16 mx-auto my-6"
        ></svg>
        <div class="text-center">
          <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Error!
          </h3>
          <p class="text-gray-600 my-2">Sorry for inconvenience.</p>
          <p> please come back later </p>
          <div class="py-10 text-center">
            <a
              class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
              onClick={() => router.push("/")}
            >
              GO BACK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
