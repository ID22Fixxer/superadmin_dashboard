# Portfolio Dashboard - Component Structure

This Next.js application has been refactored into modular, reusable components. Here's the structure:

## Component Organization

### Layout Components (`src/components/layout/`)
- **Header.tsx** - Top navigation bar with user profile and notifications
- **Sidebar.tsx** - Left navigation sidebar with menu items
- **DashboardLayout.tsx** - Main layout wrapper combining Header, Sidebar, and content area

### Dashboard Components (`src/components/dashboard/`)
- **Dashboard.tsx** - Main dashboard component that combines all sections
- **DashboardHeader.tsx** - Header section with title, search, and add button
- **StatCard.tsx** - Individual statistics card component
- **StatsGrid.tsx** - Grid layout for displaying all statistics cards

### Website Components (`src/components/websites/`)
- **WebsiteCard.tsx** - Individual website card with image, status, and actions
- **WebsitesGrid.tsx** - Grid layout for displaying all website cards

### Activity Components (`src/components/activity/`)
- **ActivityItem.tsx** - Individual activity entry component
- **RecentActivity.tsx** - Recent activity section with list of activities

## Usage

### Main Page (`src/app/page.tsx`)
```tsx
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
```

### Component Props

#### StatCard
```tsx
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
```

#### WebsiteCard
```tsx
interface WebsiteCardProps {
  name: string;
  type: string;
  description: string;
  image: string;
  status: "Online" | "Offline" | "Maintenance";
  rating: number;
  keywords: string;
}
```

#### ActivityItem
```tsx
interface ActivityItemProps {
  icon: string;
  iconBgColor: string;
  iconColor: string;
  title: string;
  description: string;
  time: string;
}
```

## Features

- **Responsive Design** - Works on mobile, tablet, and desktop
- **TypeScript Support** - Full type safety for all components
- **Modular Architecture** - Easy to maintain and extend
- **Reusable Components** - Components can be used in different contexts
- **Material Symbols Icons** - Consistent iconography throughout
- **Tailwind CSS** - Utility-first styling approach

## Customization

### Adding New Statistics
Edit `src/components/dashboard/StatsGrid.tsx` to add new stat cards.

### Adding New Websites
Edit `src/components/websites/WebsitesGrid.tsx` to add new website cards.

### Adding New Activities
Edit `src/components/activity/RecentActivity.tsx` to add new activity items.

### Styling
All styling is done with Tailwind CSS classes. The project uses a custom "Bluewave" theme with:
- **Primary Colors**: Purple-based color palette (#611bf8 as default)
- **Fonts**: Lato for titles, Open Sans for body text
- **Custom Spacing**: Tailored spacing scale
- **Custom Border Radius**: Rounded corners with specific values

The theme is configured in `tailwind.config.js` and fonts are imported in `src/app/globals.css`.

## Dependencies

- Next.js 14+
- React 18+
- TypeScript
- Tailwind CSS v3.4+
- PostCSS
- Autoprefixer
- Material Symbols (Google Fonts)
- Lato & Open Sans fonts (Google Fonts)
