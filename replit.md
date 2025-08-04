# Narpavai Honey Website

## Project Overview
A beautiful honey company website migrated from Figma to Replit. This is a full-stack JavaScript application showcasing Narpavai's honey products with modern web technologies.

## Project Architecture
- **Frontend**: React 18 with TypeScript, Vite build system
- **Backend**: Express.js server with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state
- **Database**: PostgreSQL with Drizzle ORM (configured but using in-memory storage)
- **Build Tool**: Vite with custom server integration

## Key Features
- Responsive honey company website
- Product showcase sections
- Newsletter subscription
- FAQ section
- Testimonials
- Call-to-action sections
- Figma assets properly integrated

## File Structure
```
client/
  src/
    components/ui/          # shadcn/ui components
    pages/
      NarpavaiHoney.tsx     # Main page component
      sections/             # Individual page sections
    lib/                    # Utilities and configurations
  public/
    figmaAssets/           # All Figma-exported assets
server/
  index.ts                 # Express server setup
  routes.ts                # API routes
  storage.ts               # Storage interface
  vite.ts                  # Vite integration
shared/
  schema.ts                # Shared TypeScript types and Zod schemas
```

## Recent Changes
- **2025-08-04**: Successfully migrated from Figma to Replit
  - All packages installed and configured
  - Figma assets properly organized in client/public/figmaAssets
  - React components implemented for all sections
  - Server running successfully on port 5000
  - Vite development environment working

## User Preferences
- Project imported from Figma design
- Focus on maintaining design fidelity
- Full-stack JavaScript architecture preferred

## Development Notes
- Uses port 5000 for both frontend and backend (Replit standard)
- All Figma assets preserved and properly referenced
- Client/server separation implemented for security
- Ready for deployment on Replit