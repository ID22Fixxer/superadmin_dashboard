import React from "react";
import { WebsiteCard } from "./WebsiteCard";

export const WebsitesGrid = () => {
  const websites = [
    {
      name: "ShopEase",
      type: "E-commerce",
      description: "A full-featured e-commerce platform with responsive design and secure payment integration.",
      image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      status: "Online" as const,
      rating: 5,
      keywords: "ecommerce, online store, shop"
    },
    {
      name: "Creative Portfolio",
      type: "Portfolio",
      description: "A modern portfolio showcasing creative work with a clean, minimalist design and smooth animations.",
      image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      status: "Online" as const,
      rating: 4,
      keywords: "portfolio, design, creative"
    },
    {
      name: "TechBlog",
      type: "Blog",
      description: "A tech-focused blog with advanced content management and newsletter integration.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      status: "Maintenance" as const,
      rating: 3,
      keywords: "blog, articles, content"
    },
    {
      name: "TaskFlow",
      type: "SaaS",
      description: "Project management SaaS application with collaborative features and real-time updates.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      status: "Online" as const,
      rating: 5,
      keywords: "saas, software, app"
    },
    {
      name: "LearnHub",
      type: "Educational",
      description: "Online learning platform with course management, interactive lessons, and student progress tracking.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      status: "Online" as const,
      rating: 4,
      keywords: "education, learning, courses"
    },
    {
      name: "GlobalCorp",
      type: "Corporate",
      description: "Professional corporate website with service listings, about sections, and contact forms.",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
      status: "Offline" as const,
      rating: 3,
      keywords: "corporate, business, company"
    }
  ];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-black mb-4">My Websites</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {websites.map((website, index) => (
          <WebsiteCard key={index} {...website} />
        ))}
      </div>
    </div>
  );
};
