import React from "react";

export const Sidebar = () => {
  return (
    <aside className="w-16 md:w-64 bg-white border-r border-neutral-200 hidden md:block">
      <div className="p-4">
        <nav className="space-y-1">
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-primary-50 text-primary-700">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="hidden md:inline font-medium">Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-neutral-100 transition-colors text-black">
            <span className="material-symbols-outlined">web</span>
            <span className="hidden md:inline">Websites</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-neutral-100 transition-colors text-black">
            <span className="material-symbols-outlined">analytics</span>
            <span className="hidden md:inline">Analytics</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-neutral-100 transition-colors text-black">
            <span className="material-symbols-outlined">account_circle</span>
            <span className="hidden md:inline">Profile</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-neutral-100 transition-colors text-black">
            <span className="material-symbols-outlined">help</span>
            <span className="hidden md:inline">Help</span>
          </a>
        </nav>
      </div>
    </aside>
  );
};
