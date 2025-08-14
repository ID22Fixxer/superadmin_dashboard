import React from "react";
import { StatCard } from "./StatCard";

export const StatsGrid = () => {
  const stats = [
    {
      title: "Total Websites",
      value: "12",
      icon: "web",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      trend: { value: "4.75%", isPositive: true }
    },
    {
      title: "Total Visits",
      value: "48.7K",
      icon: "visibility",
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600",
      trend: { value: "12.4%", isPositive: true }
    },
    {
      title: "Uptime",
      value: "99.8%",
      icon: "schedule",
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      trend: { value: "0.2%", isPositive: false }
    },
    {
      title: "Avg. Load Time",
      value: "1.2s",
      icon: "speed",
      iconBgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      trend: { value: "5.1%", isPositive: true }
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};
