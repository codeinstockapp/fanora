"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CartIcon } from "@/constants/icons";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems] = useState([
    {
      id: 1,
      name: "Avengers Endgame T-Shirt",
      price: 29.99,
      quantity: 1,
      image: "/placeholder-product.jpg",
    },
    {
      id: 2,
      name: "Batman Phone Case",
      price: 19.99,
      quantity: 2,
      image: "/placeholder-product.jpg",
    },
  ]);

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="relative">
      {/* Cart Icon Button */}
      <div className="flex gap-[3px]" onClick={() => setIsOpen(!isOpen)}>
        <CartIcon />

        {itemCount > 0 && (
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
            {itemCount}
          </span>
        )}
      </div>

      {/* Cart Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-7 max-w-[100vw] md:max-w-[calc(100vw-2rem)] z-50">
          <div className="glass-card w-[380px] ml-[86px] p-4 sm:p-6 bg-black/80 backdrop-blur-xl border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">
                Shopping Cart
              </h3>
              <span className="text-sm text-gray-400">{itemCount} items</span>
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <svg
                  className="w-12 h-12 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                  />
                </svg>
                <p className="text-gray-400">Your cart is empty</p>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          ${item.price.toFixed(2)} × {item.quantity}
                        </p>
                      </div>
                      <div className="text-sm font-medium text-purple-400">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart Total */}
                <div className="border-t border-white/10 mt-4 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-base font-medium text-white">
                      Total
                    </span>
                    <span className="text-lg font-bold text-purple-400">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Link
                      href="/cart"
                      className="w-full btn-secondary block text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      View Cart
                    </Link>
                    <Link
                      href="/checkout"
                      className="w-full btn-primary block text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Overlay to close cart when clicking outside */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}

export default Cart;
