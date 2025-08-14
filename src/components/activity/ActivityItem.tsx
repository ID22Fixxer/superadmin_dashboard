import React from "react";

interface ActivityItemProps {
  icon: string;
  iconBgColor: string;
  iconColor: string;
  title: string;
  description: string;
  time: string;
}

export const ActivityItem: React.FC<ActivityItemProps> = ({
  icon,
  iconBgColor,
  iconColor,
  title,
  description,
  time
}) => {
  return (
    <li className="py-3 flex items-start">
      <span className={`mr-3 mt-1 flex-shrink-0 w-8 h-8 ${iconBgColor} rounded-full flex items-center justify-center ${iconColor}`}>
        <span className="material-symbols-outlined text-sm">{icon}</span>
      </span>
      <div className="flex-grow">
        <p className="text-sm font-medium text-black">{title}</p>
        <p className="text-sm text-black">{description}</p>
        <p className="mt-1 text-xs text-black">{time}</p>
      </div>
    </li>
  );
};
