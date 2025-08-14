import React from "react";
import { DashboardHeader } from "./DashboardHeader";
import { StatsGrid } from "./StatsGrid";
import { WebsitesGrid } from "../websites/WebsitesGrid";
import { RecentActivity } from "../activity/RecentActivity";

export const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <StatsGrid />
      <WebsitesGrid />
      <RecentActivity />
    </>
  );
};
