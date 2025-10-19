import React from "react";
import Link from "next/link";
import { DressIcon, ShapeIcons } from "@/constants/icons";

function Banner() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-purple-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative w-[100%] z-10 px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card  p-8 md:p-16 max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 text-sm font-medium rounded-full border border-purple-400/30 mb-6">
              ✨ Premium Movie Merchandise Store
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Exclusive Movie
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
              Merchandise
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover premium collectibles, apparel, and accessories from
            Hollywood, Bollywood, Tollywood, and more.
            <span className="text-purple-300 font-medium">
              Officially licensed
            </span>{" "}
            and crafted with attention to detail.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="#products"
              className="btn-primary text-lg px-10 py-4 shadow-lg shadow-purple-500/25"
            >
              <p className="flex gap-3">
                <DressIcon /> Shop Collection
              </p>
            </Link>
            <Link
              href="/about"
              className="btn-secondary w-[190px] text-lg px-10 py-4"
            >
              <p className="flex gap-3">
                <ShapeIcons /> Learn More
              </p>
            </Link>
          </div>

          {/* Featured stats */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-gray-400 font-medium">Premium Products</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-400 font-medium">Movie Franchises</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                10K+
              </div>
              <div className="text-gray-400 font-medium">Happy Customers</div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

export default Banner;
