"use client";

import React, { useState } from "react";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Chip from "@/components/Chip";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { movieCategories } from "@/constants/movieCat";
import {
  tollywoodMovies,
  hollywoodMovies,
  bollywoodMovies,
  kollywoodMovies,
  sandalwoodMovies,
} from "@/constants/movies";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Combine all movies with proper structure
  const allMovies = [
    ...tollywoodMovies.map((movie: any) => ({
      ...movie,
      category: "tollywood",
      price: 29.99,
      rating: 4.5,
    })),
    ...hollywoodMovies.map((movie: any) => ({
      ...movie,
      category: "hollywood",
      price: 34.99,
      rating: 4.7,
    })),
    ...bollywoodMovies.map((movie: any) => ({
      ...movie,
      category: "bollywood",
      price: 27.99,
      rating: 4.3,
    })),
    ...kollywoodMovies.map((movie: any) => ({
      ...movie,
      category: "kollywood",
      price: 31.99,
      rating: 4.6,
    })),
    ...sandalwoodMovies.map((movie: any) => ({
      ...movie,
      category: "sandalwood",
      price: 28.99,
      rating: 4.4,
    })),
  ];

  // Filter movies based on selected category
  const filteredMovies =
    selectedCategory === "all"
      ? allMovies
      : allMovies.filter((movie) => movie.category === selectedCategory);

  const handleCategorySelect = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Main Content */}
      <main className="pt-20">
        <Banner />

        {/* Featured Categories Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Shop by <span className="text-accent">Category</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover premium merchandise from your favorite movies and
              franchises
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {/* All Categories Chip */}
            <div className="animate-fade-in-up">
              <button
                onClick={() => handleCategorySelect("all")}
                className={`glass-card px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  selectedCategory === "all"
                    ? "border-purple-400 bg-purple-400/20"
                    : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg"></div>
                  <span
                    className={`font-medium text-sm md:text-base transition-colors duration-200 ${
                      selectedCategory === "all"
                        ? "text-purple-300"
                        : "text-white hover:text-purple-300"
                    }`}
                  >
                    All Movies
                  </span>
                </div>
              </button>
            </div>

            {movieCategories.map((cat: any, index: number) => (
              <div
                key={cat.slug}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <Chip
                  category={cat}
                  isSelected={selectedCategory === cat.slug}
                  onSelect={() => handleCategorySelect(cat.slug)}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {selectedCategory === "all"
                ? "Handpicked premium merchandise from all movie industries"
                : `Premium merchandise from ${
                    movieCategories.find(
                      (cat: any) => cat.slug === selectedCategory
                    )?.name || "selected"
                  } movies`}
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Showing {filteredMovies.length} products
            </div>
          </div>

          {filteredMovies.length > 0 ? (
            <div className="masonry-grid">
              {filteredMovies.map((movie: any, index: number) => (
                <div
                  key={`${movie.category}-${movie.slug}`}
                  className="masonry-item animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Card
                    movie={{
                      id: movie.slug,
                      title: movie.name,
                      image: movie.image,
                      price: movie.price,
                      originalPrice: movie.price + 10,
                      rating: movie.rating,
                      category:
                        movie.category.charAt(0).toUpperCase() +
                        movie.category.slice(1),
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="glass-card p-8 max-w-md mx-auto">
                <div className="text-gray-400 mb-4">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  No Products Found
                </h3>
                <p className="text-gray-400">
                  No products available for this category yet.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="glass-card p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Get notified about new releases, exclusive drops, and special
              offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-glass flex-1"
              />
              <button className="btn-primary px-8">Subscribe</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
