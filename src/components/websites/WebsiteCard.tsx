import React from "react";

interface WebsiteCardProps {
  name: string;
  type: string;
  description: string;
  image: string;
  status: "Online" | "Offline" | "Maintenance";
  rating: number;
  keywords: string;
}

export const WebsiteCard: React.FC<WebsiteCardProps> = ({
  name,
  type,
  description,
  image,
  status,
  rating,
  keywords
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Online":
        return "bg-green-500/80";
      case "Maintenance":
        return "bg-yellow-500/80";
      case "Offline":
        return "bg-red-500/80";
      default:
        return "bg-gray-500/80";
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`w-2 h-2 rounded-full ${
          i < rating ? "bg-green-500" : "bg-gray-300"
        }`}
      ></span>
    ));
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-all group">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          keywords={keywords}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 w-full">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-medium">{name}</h4>
              <span className={`px-2 py-1 ${getStatusColor(status)} text-white text-xs rounded-full`}>
                {status}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-black">{type}</span>
          <div className="flex space-x-1">
            {renderStars(rating)}
          </div>
        </div>
        <p className="text-sm text-black mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="text-black hover:text-primary-600 transition-colors">
              <span className="material-symbols-outlined">edit</span>
            </button>
            <button className="text-black hover:text-primary-600 transition-colors">
              <span className="material-symbols-outlined">bar_chart</span>
            </button>
            <button className="text-black hover:text-primary-600 transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
          <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors font-medium text-sm flex items-center">
            <span>Visit</span>
            <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  );
};
