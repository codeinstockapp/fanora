"use client";

import React, { useState } from "react";

function Search() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <div className="relative">
      {/* Search Icon Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10"
        aria-label="Search"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      {/* Expanded Search Input */}
      {isExpanded && (
        <div className="fixed sm:absolute right-2 sm:right-0 top-20 sm:top-full sm:mt-2 left-2 sm:left-auto w-auto sm:w-96 z-50">
          <form
            onSubmit={handleSubmit}
            className="glass-card p-4 sm:p-6 bg-black/80 backdrop-blur-xl border border-white/20"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pr-12 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-200"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Quick Search Suggestions */}
            <div className="mt-4 space-y-3">
              <p className="text-xs text-gray-300 uppercase tracking-wide font-medium">
                Popular Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {["Marvel", "DC", "Star Wars", "Harry Potter", "Anime"].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="px-3 py-1.5 text-xs bg-white/10 hover:bg-purple-500/20 border border-white/20 hover:border-purple-400/50 rounded-lg text-gray-200 hover:text-white transition-all duration-200"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Overlay to close search when clicking outside */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  );
}

export default Search;
