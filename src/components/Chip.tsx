"use client";

import React from "react";
import Link from "next/link";

interface Category {
  id?: string;
  name: string;
  slug?: string;
  count?: number;
  color?: string;
}

interface ChipProps {
  category: Category;
  isSelected?: boolean;
  onSelect?: () => void;
}

function Chip({ category, isSelected = false, onSelect }: ChipProps) {
  const {
    id = "1",
    name,
    slug = name.toLowerCase().replace(/\s+/g, "-"),
    count = 0,
    color = "purple",
  } = category;

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700";
      case "green":
        return "from-green-400 to-green-600 hover:from-green-500 hover:to-green-700";
      case "red":
        return "from-red-400 to-red-600 hover:from-red-500 hover:to-red-700";
      case "yellow":
        return "from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700";
      case "pink":
        return "from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700";
      default:
        return "from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700";
    }
  };

  // If onSelect is provided, render as button, otherwise as link
  if (onSelect) {
    return (
      <button
        onClick={onSelect}
        className={`glass-card px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
          isSelected ? "border-purple-400 bg-purple-400/20" : ""
        }`}
      >
        <div className="flex items-center space-x-3">
          {/* Category Icon/Color Indicator */}
          <div
            className={`w-3 h-3 rounded-full bg-gradient-to-r ${getColorClasses(
              color
            )} shadow-lg`}
          ></div>

          {/* Category Name */}
          <span
            className={`font-medium text-sm md:text-base transition-colors duration-200 ${
              isSelected
                ? "text-purple-300"
                : "text-white hover:text-purple-300"
            }`}
          >
            {name}
          </span>

          {/* Item Count */}
          {count > 0 && (
            <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
              {count}
            </span>
          )}
        </div>

        {/* Hover Effect Border */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getColorClasses(
            color
          )} opacity-0 hover:opacity-20 transition-opacity duration-300 -z-10`}
        ></div>
      </button>
    );
  }

  return (
    <Link href={`/category/${slug}`} className="group inline-block">
      <div className="glass-card px-6 py-3 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
        <div className="flex items-center space-x-3">
          {/* Category Icon/Color Indicator */}
          <div
            className={`w-3 h-3 rounded-full bg-gradient-to-r ${getColorClasses(
              color
            )} shadow-lg`}
          ></div>

          {/* Category Name */}
          <span className="text-white font-medium text-sm md:text-base group-hover:text-purple-300 transition-colors duration-200">
            {name}
          </span>

          {/* Item Count */}
          {count > 0 && (
            <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
              {count}
            </span>
          )}
        </div>

        {/* Hover Effect Border */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getColorClasses(
            color
          )} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}
        ></div>
      </div>
    </Link>
  );
}

export default Chip;
