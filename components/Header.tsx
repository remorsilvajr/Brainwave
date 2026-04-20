import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-20 bg-white border-b border-stone-100 flex items-center justify-end px-8 sticky top-0 z-10 shadow-sm">
      {/* Right Actions */}
      <div className="flex items-center space-x-6">
        {/* Notifications */}
        <button className="relative p-2 text-stone-500 hover:bg-stone-50 rounded-full transition-all group">
          <BellIcon />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white group-hover:scale-110 transition-transform"></span>
        </button>

        {/* User Profile - Clicking this takes you to /profile */}
        <Link
          href="/profile"
          className="flex items-center space-x-3 pl-6 border-l border-stone-100 group cursor-pointer"
        >
          <div className="text-right transition-colors group-hover:opacity-70">
            <p className="text-sm font-semibold text-stone-800">Lebron James</p>
            <p className="text-xs text-stone-400 font-medium">
              Student ID: 230612
            </p>
          </div>
          <div className="w-10 h-10 bg-amber-100 rounded-full border-2 border-amber-200 flex items-center justify-center overflow-hidden transition-all group-hover:scale-110 group-hover:border-[#F9A825]">
            <UserIcon />
          </div>
        </Link>
      </div>
    </header>
  );
};

// --- SVG Icons ---

const BellIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const UserIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle
      cx="12"
      cy="7"
      r="4"
    />
  </svg>
);

export default Header;
