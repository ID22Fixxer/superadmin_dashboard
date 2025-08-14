import React from "react";

export const Header = () => {
  return (
    <header className="bg-white border-b border-neutral-200 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="material-symbols-outlined text-primary-600">dashboard</span>
          <h1 className="font-bold text-lg text-black">Portfolio Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
            <span className="material-symbols-outlined text-black">notifications</span>
          </button>
          <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
            <span className="material-symbols-outlined text-black">settings</span>
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
              <span>JD</span>
            </div>
            <span className="hidden md:inline text-sm font-medium text-black">John Doe</span>
          </div>
        </div>
      </div>
    </header>
  );
};
