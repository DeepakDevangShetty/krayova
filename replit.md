# replit.md

## Overview

This is a full-stack web application built with React and Express, showcasing a modern agency portfolio website called "KRAYOVA". The application features a responsive design with smooth animations, interactive components, and a professional layout suitable for a digital agency or web design company.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and scroll-based animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Hot reloading with Vite integration
- **API Structure**: RESTful API with `/api` prefix routing
- **Error Handling**: Centralized error middleware

### Data Storage Solutions
- **Database**: PostgreSQL (configured but not actively used)
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Current Storage**: In-memory storage implementation for development
- **Migration**: Drizzle Kit for database schema management

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero Section**: Animated landing area with particle effects
- **Creative Section**: Image and text showcase with hover effects
- **Services Section**: Three-column service offerings
- **Reviews Section**: Animated star ratings and testimonials
- **Portfolio Section**: Grid-based project showcase
- **Contact Section**: Business information and contact details
- **Footer**: Company information and social links

### UI System
- **Design Tokens**: CSS custom properties for consistent theming
- **Component Library**: Extensive collection of Radix-based components
- **Responsive Design**: Mobile-first approach with breakpoint system
- **Accessibility**: ARIA-compliant components with keyboard navigation

### Backend Components
- **Route Registration**: Modular route handling system
- **Storage Interface**: Abstract storage layer with CRUD operations
- **Request Logging**: Comprehensive API request monitoring
- **Static Serving**: Production-ready static file serving

## Data Flow

### Client-Server Communication
1. Frontend makes API requests to `/api` endpoints
2. Express server processes requests through registered routes
3. Storage layer handles data persistence operations
4. Responses are formatted and sent back to client
5. TanStack Query manages caching and synchronization

### User Interaction Flow
1. User navigates through single-page application
2. Smooth scroll animations trigger on section visibility
3. Interactive elements respond to hover and click events
4. Form submissions would integrate with backend API endpoints

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **Build Tools**: Vite, TypeScript, PostCSS, Autoprefixer
- **UI Framework**: Tailwind CSS, Radix UI components
- **Animation**: Framer Motion for smooth transitions
- **HTTP Client**: Native fetch API with TanStack Query

### Database Integration
- **Neon Database**: Serverless PostgreSQL provider
- **Connection**: @neondatabase/serverless for database connectivity
- **Schema Management**: Drizzle ORM with Zod validation

### Development Tools
- **Hot Reloading**: Vite development server with HMR
- **Error Overlay**: Replit-specific error modal integration
- **Code Quality**: TypeScript strict mode, ESLint configuration

## Deployment Strategy

### Build Process
1. Frontend builds to `dist/public` directory via Vite
2. Backend compiles to `dist/index.js` via esbuild (for local development only)
3. Static assets are served from built frontend directory
4. Environment variables configure database connections

### Vercel Deployment (Production)
- **Platform**: Vercel for static site hosting
- **Configuration**: `vercel.json` with SPA routing support
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Deployment Type**: Static site (no backend API)
- **Auto-Deploy**: Configured for automatic deployments from Git
- **Guide**: See `VERCEL_DEPLOYMENT.md` for complete deployment instructions

### Production Configuration
- **Hosting**: Vercel static site deployment with global CDN
- **HTTPS**: Automatic SSL certificate provisioning
- **Routing**: Client-side routing with fallback to index.html
- **Environment**: Production optimized Vite build

### Development Workflow
- **Dev Server**: Hot reloading with `npm run dev`
- **Type Checking**: `npm run check` for TypeScript validation
- **Build**: `npm run build` for production compilation
- **Deploy**: Push to Git for automatic Vercel deployment

The application is deployed as a static site to Vercel, leveraging global CDN distribution, automatic HTTPS, and instant deployments for optimal performance and developer experience.