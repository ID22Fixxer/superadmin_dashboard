import React from "react";
import { ActivityItem } from "./ActivityItem";

export const RecentActivity = () => {
  const activities = [
    {
      icon: "upload",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "ShopEase website updated",
      description: "New product pages added and checkout process improved",
      time: "2 hours ago"
    },
    {
      icon: "check_circle",
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600",
      title: "TaskFlow is back online",
      description: "Server maintenance completed successfully",
      time: "5 hours ago"
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
      <div className="p-4 border-b border-neutral-200">
        <h3 className="text-lg font-medium text-black">Recent Activity</h3>
      </div>
      <div className="p-4">
        <ul className="divide-y divide-neutral-200">
          {activities.map((activity, index) => (
            <ActivityItem key={index} {...activity} />
          ))}
        </ul>
      </div>
    </div>
  );
};
