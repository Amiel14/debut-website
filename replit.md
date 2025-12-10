# Debut Celebration Website

## Overview

This is a celebration website for an 18th birthday debut (Filipino coming-of-age tradition). The application displays event details, countdown timer, venue information with embedded maps, traditional ceremony participants (18 Treasures, 18 Roses, 18 Candles), transportation tips, and FAQ section. The design follows premium event website aesthetics with elegant typography and Filipino cultural elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: Shadcn/ui component library (New York style variant)
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with React plugin

The frontend follows a component-based architecture with:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/`
- Custom components in `client/src/components/`
- Shared hooks in `client/src/hooks/`

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints under `/api/` prefix
- **Development**: Vite dev server with HMR integration

The server uses a simple layered approach:
- `server/index.ts` - Express app setup and middleware
- `server/routes.ts` - API route definitions with static event data
- `server/storage.ts` - In-memory storage abstraction (ready for database integration)
- `server/vite.ts` - Development server integration
- `server/static.ts` - Production static file serving

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts`
- **Current State**: Schema defined with users table; event data currently hardcoded in routes
- **Validation**: Zod schemas with drizzle-zod integration

### Shared Code
The `shared/` directory contains TypeScript types and Zod schemas used by both frontend and backend, ensuring type safety across the stack.

### Design System
Typography and spacing follow the guidelines in `design_guidelines.md`:
- Serif fonts for headings (Playfair Display style)
- Sans-serif for body text (Inter/DM Sans)
- Consistent Tailwind spacing units

## External Dependencies

### Database
- **PostgreSQL**: Required for production (DATABASE_URL environment variable)
- **Drizzle Kit**: Database migrations via `npm run db:push`

### Frontend Libraries
- **Radix UI**: Accessible primitive components (accordion, dialog, popover, etc.)
- **Embla Carousel**: Carousel/slider functionality
- **React Day Picker**: Calendar component
- **Lucide React**: Icon library
- **date-fns**: Date formatting utilities

### Backend Libraries
- **express-session**: Session management (with connect-pg-simple for PostgreSQL sessions)
- **nanoid**: Unique ID generation

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner (development only)
- **esbuild**: Production server bundling
- **tsx**: TypeScript execution for development