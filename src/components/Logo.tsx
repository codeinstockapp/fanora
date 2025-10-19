import React from "react";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <div className="relative">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
          <span className="text-white font-bold text-lg">F</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
      </div>
      <span className="text-white font-bold text-xl tracking-tight group-hover:text-purple-300 transition-colors duration-300">
        FANORA
      </span>
    </Link>
  );
}

export default Logo;
