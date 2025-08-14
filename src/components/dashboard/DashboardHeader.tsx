import React from "react";

export const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-black">My Websites</h2>
        <p className="text-black mt-1">Manage and monitor all your web projects in one place</p>
      </div>
      <div className="mt-4 md:mt-0 flex items-center space-x-3">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search websites..." 
            className="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-full" 
          />
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-neutral-400">search</span>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <span className="material-symbols-outlined text-sm">add</span>
          <span>Add Website</span>
        </button>
      </div>
    </div>
  );
};
