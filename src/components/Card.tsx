"use client";

import React from "react";
import Link from "next/link";

interface Movie {
  id?: string;
  title: string;
  image?: string;
  price?: number;
  originalPrice?: number;
  rating?: number;
  category?: string;
}

interface CardProps {
  movie: Movie;
}

function Card({ movie }: CardProps) {
  const {
    id = "1",
    title,
    image = "/placeholder-movie.jpg",
    price = 29.99,
    originalPrice,
    rating = 4.5,
    category = "Apparel",
  } = movie;

  return (
    <Link href={`/product/${id}`} className="group block">
      <article className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.15] hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-t-2xl">
          <div className="aspect-[4/5]">
            {image && image !== "/placeholder-movie.jpg" ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.remove(
                    "hidden"
                  );
                }}
              />
            ) : null}

            {/* Fallback placeholder */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center text-gray-400 ${
                image && image !== "/placeholder-movie.jpg" ? "hidden" : ""
              }`}
            >
              <div className="w-16 h-16 mb-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-300 text-center px-4">
                {title}
              </p>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
            <span className="px-2.5 py-1 text-xs font-medium bg-black/40 backdrop-blur-md text-white/90 rounded-lg border border-white/10">
              {category}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="px-2.5 py-1 text-xs font-medium bg-red-500/90 backdrop-blur-md text-white rounded-lg">
                Sale
              </span>
            )}
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute bottom-4 left-4 right-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log(`Viewing ${title}`);
                }}
                className="w-full bg-white/20 backdrop-blur-md border border-white/30 text-white py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-300 hover:bg-white/30 hover:border-white/50 transform translate-y-2 group-hover:translate-y-0"
              >
                Quick View
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Title */}
          <h3 className="font-semibold text-white text-base leading-tight line-clamp-2 group-hover:text-purple-300 transition-colors duration-300">
            {title}
          </h3>

          {/* Rating & Price Row */}
          <div className="flex items-center justify-between">
            {/* Rating */}
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(rating)
                        ? "text-yellow-400"
                        : "text-gray-600"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-400 ml-1">{rating}</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-purple-400">
                ${price.toFixed(2)}
              </span>
              {originalPrice && originalPrice > price && (
                <span className="text-xs text-gray-500 line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default Card;
