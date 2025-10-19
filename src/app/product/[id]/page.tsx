"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CartIcon } from "@/constants/icons";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showSizeChart, setShowSizeChart] = useState(false);

  // Mock movie data with merchandise
  const movieData = {
    id: params.id,
    title: "Avengers Endgame",
    description: "The epic conclusion to the Infinity Saga",
    poster: "/placeholder-movie.jpg",
    merchandise: [
      {
        id: "tshirt",
        name: "Premium T-Shirt",
        type: "clothing",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.8,
        reviews: 124,
        description:
          "Premium quality cotton t-shirt featuring the iconic Avengers Endgame design. Made with 100% organic cotton for ultimate comfort and durability.",
        images: ["/placeholder-product-1.jpg", "/placeholder-product-2.jpg"],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        features: [
          "100% Organic Cotton",
          "Pre-shrunk fabric",
          "Reinforced seams",
          "Machine washable",
          "Officially licensed",
        ],
        inStock: true,
      },
      {
        id: "hoodie",
        name: "Premium Hoodie",
        type: "clothing",
        price: 49.99,
        originalPrice: 59.99,
        rating: 4.9,
        reviews: 89,
        description:
          "Comfortable hoodie with premium print and soft fleece lining.",
        images: ["/placeholder-hoodie-1.jpg", "/placeholder-hoodie-2.jpg"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        features: [
          "80% Cotton 20% Polyester",
          "Fleece lined",
          "Kangaroo pocket",
          "Machine washable",
          "Officially licensed",
        ],
        inStock: true,
      },
      {
        id: "phonecase",
        name: "Phone Case",
        type: "accessory",
        price: 19.99,
        originalPrice: 24.99,
        rating: 4.6,
        reviews: 156,
        description:
          "Durable phone case with stunning Avengers Endgame artwork.",
        images: ["/placeholder-case-1.jpg", "/placeholder-case-2.jpg"],
        variants: [
          "iPhone 14",
          "iPhone 14 Pro",
          "iPhone 15",
          "Samsung Galaxy S24",
        ],
        features: [
          "Drop protection",
          "Wireless charging compatible",
          "Scratch resistant",
          "Easy installation",
        ],
        inStock: true,
      },
      {
        id: "mug",
        name: "Ceramic Mug",
        type: "accessory",
        price: 14.99,
        originalPrice: 19.99,
        rating: 4.7,
        reviews: 203,
        description:
          "High-quality ceramic mug perfect for your morning coffee.",
        images: ["/placeholder-mug-1.jpg", "/placeholder-mug-2.jpg"],
        features: [
          "Ceramic material",
          "Dishwasher safe",
          "11oz capacity",
          "Heat resistant",
        ],
        inStock: true,
      },
    ],
  };

  const sizeChart = [
    { size: "XS", chest: "32-34", length: "26", width: "16" },
    { size: "S", chest: "34-36", length: "27", width: "18" },
    { size: "M", chest: "36-38", length: "28", width: "20" },
    { size: "L", chest: "38-40", length: "29", width: "22" },
    { size: "XL", chest: "40-42", length: "30", width: "24" },
    { size: "XXL", chest: "42-44", length: "31", width: "26" },
  ];

  const selectedProductData = selectedProduct
    ? movieData.merchandise.find((item) => item.id === selectedProduct)
    : null;

  const handleAddToCart = () => {
    if (selectedProductData) {
      console.log(`Added ${quantity} x ${selectedProductData.name} to cart`);
    }
  };

  if (!selectedProduct) {
    // Show merchandise selection page
    return (
      <div className="min-h-screen">
        <Navbar />

        <main className="pt-16">
          {/* Breadcrumb */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex text-sm text-gray-400">
              <Link
                href="/"
                className="hover:text-purple-400 transition-colors"
              >
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{movieData.title}</span>
            </nav>
          </div>

          {/* Movie Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {movieData.title}
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                {movieData.description}
              </p>
              <p className="text-gray-300">Choose your merchandise</p>
            </div>

            {/* Merchandise Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {movieData.merchandise.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedProduct(item.id)}
                  className="glass-card p-6 cursor-pointer hover:scale-105 transition-all duration-300 hover:border-purple-400/50"
                >
                  {/* Product Image */}
                  <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                      <svg
                        className="w-16 h-16 mx-auto mb-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm font-medium">{item.name}</p>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-white text-lg">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-purple-400">
                        ${item.price.toFixed(2)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${item.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(item.rating)
                              ? "text-yellow-400"
                              : "text-gray-600"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs text-gray-400 ml-1">
                        ({item.reviews})
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // Show individual product page
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex flex-wrap text-sm text-gray-400 gap-1">
            <Link href="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <button
              onClick={() => setSelectedProduct(null)}
              className="hover:text-purple-400 transition-colors"
            >
              {movieData.title}
            </button>
            <span className="mx-2">/</span>
            <span className="text-white">{selectedProductData?.name}</span>
          </nav>
        </div>

        {/* Product Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="glass-card p-4">
                <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center group overflow-hidden">
                  <div className="text-gray-500 text-center transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="w-24 h-24 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-lg font-medium">
                      {selectedProductData?.name}
                    </p>
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {selectedProductData?.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square glass-card p-2 transition-all duration-200 ${
                      selectedImage === index
                        ? "ring-2 ring-purple-400"
                        : "hover:ring-1 hover:ring-purple-400/50"
                    }`}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="space-y-6">
              {/* Product Title & Price */}
              <div>
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  {movieData.title} - {selectedProductData?.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-2xl md:text-3xl font-bold text-purple-400">
                    ${selectedProductData?.price.toFixed(2)}
                  </span>
                  {selectedProductData?.originalPrice && (
                    <span className="text-lg md:text-xl text-gray-500 line-through">
                      ${selectedProductData.originalPrice.toFixed(2)}
                    </span>
                  )}
                  {selectedProductData?.originalPrice && (
                    <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-sm font-medium">
                      Save $
                      {(
                        selectedProductData.originalPrice -
                        selectedProductData.price
                      ).toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(selectedProductData?.rating || 0)
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
                  <span className="text-gray-400">
                    ({selectedProductData?.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="glass-card p-4 md:p-6 bg-black/40 backdrop-blur-xl border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Description
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProductData?.description}
                </p>
              </div>

              {/* Size/Variant Selection */}
              {selectedProductData?.type === "clothing" &&
                selectedProductData?.sizes && (
                  <div className="glass-card p-4 md:p-6 bg-black/40 backdrop-blur-xl border border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">Size</h3>
                      <button
                        onClick={() => setShowSizeChart(!showSizeChart)}
                        className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                      >
                        Size Chart
                      </button>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
                      {selectedProductData.sizes.map((size: string) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`py-2 px-3 rounded-lg border transition-all duration-200 text-sm ${
                            selectedSize === size
                              ? "border-purple-400 bg-purple-400/20 text-purple-400"
                              : "border-white/20 text-gray-300 hover:border-purple-400/50 hover:text-purple-400"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>

                    {/* Size Chart */}
                    {showSizeChart && (
                      <div className="mt-4 p-4 bg-white/5 rounded-lg">
                        <h4 className="text-white font-medium mb-3">
                          Size Chart (inches)
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-white/10">
                                <th className="text-left py-2 text-gray-300">
                                  Size
                                </th>
                                <th className="text-left py-2 text-gray-300">
                                  Chest
                                </th>
                                <th className="text-left py-2 text-gray-300">
                                  Length
                                </th>
                                <th className="text-left py-2 text-gray-300">
                                  Width
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {sizeChart.map((item) => (
                                <tr
                                  key={item.size}
                                  className="border-b border-white/5"
                                >
                                  <td className="py-2 text-white font-medium">
                                    {item.size}
                                  </td>
                                  <td className="py-2 text-gray-300">
                                    {item.chest}
                                  </td>
                                  <td className="py-2 text-gray-300">
                                    {item.length}
                                  </td>
                                  <td className="py-2 text-gray-300">
                                    {item.width}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                )}

              {/* Quantity & Add to Cart */}
              <div className="glass-card p-4 md:p-6 bg-black/40 backdrop-blur-xl border border-white/20">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium">Quantity:</span>
                    <div className="flex items-center border border-white/20 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                      <span className="px-4 py-2 text-white font-medium">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 btn-primary text-lg py-3 flex items-center justify-center space-x-2"
                  >
                    <CartIcon />
                    <span>Add to Cart</span>
                  </button>
                  <button className="btn-secondary px-6 py-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="glass-card p-4 md:p-6 bg-black/40 backdrop-blur-xl border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Features
                </h3>
                <ul className="space-y-2">
                  {selectedProductData?.features.map(
                    (feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 text-gray-300"
                      >
                        <svg
                          className="w-4 h-4 text-purple-400 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
