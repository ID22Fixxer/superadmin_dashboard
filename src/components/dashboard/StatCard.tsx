import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  iconBgColor: string;
  iconColor: string;
  trend: {
    value: string;
    isPositive: boolean;
  };
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  iconBgColor,
  iconColor,
  trend
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-black">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-black">{value}</h3>
        </div>
        <div className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center ${iconColor}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
      <div className="mt-4 flex items-center text-sm">
        <span className={`${trend.isPositive ? 'text-green-500' : 'text-yellow-500'} flex items-center`}>
          <span className="material-symbols-outlined text-sm">
            {trend.isPositive ? 'trending_up' : 'trending_down'}
          </span>
          <span>{trend.value}</span>
        </span>
        <span className="text-black ml-2">vs last month</span>
      </div>
    </div>
  );
};
