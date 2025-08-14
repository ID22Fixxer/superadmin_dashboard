import React from "react";
import { DashboardLayout, Dashboard } from "../components";

export default function Home() {
  return (
    <div id="webcrumbs">
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </div>
  );
}
