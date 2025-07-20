# Dev Jani Data Analytics Portfolio

## Overview

This is a modern full-stack portfolio website for Dev Jani, a self-taught data analytics enthusiast and Computer Science graduate from Veer Narmad South Gujarat University. The application showcases real professional experience, technical skills, actual projects, and provides a contact form for potential opportunities. Built with React/TypeScript frontend, Express.js backend, and PostgreSQL database. Updated with authentic personal information, skills, projects, and experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (January 20, 2025)

✓ Updated all personal information with Dev Jani's real details
✓ Replaced sample content with authentic professional experience  
✓ Added 8 real data analytics projects including final year projects
✓ Updated skills section with accurate proficiency levels
✓ Integrated real virtual internship experience from Deloitte and Tata Group
✓ Added authentic certifications and current work role
✓ Enhanced project layout to accommodate increased project portfolio

## System Architecture

The application follows a modern full-stack architecture with clear separation of concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact form submission
- **Middleware**: Express built-in JSON parsing and custom logging

### Database Layer
- **ORM**: Drizzle ORM with Zod validation
- **Database**: PostgreSQL (configured for Neon serverless)
- **Migrations**: Drizzle Kit for schema management
- **Storage**: Dual implementation with memory storage fallback

## Key Components

### Frontend Components
1. **Navigation**: Sticky header with smooth scroll navigation
2. **Hero Section**: Main landing area with call-to-action buttons
3. **About Section**: Personal background and education information
4. **Skills Section**: Technical skills with progress bars
5. **Projects Section**: Portfolio showcasing data analytics projects
6. **Experience Section**: Virtual internships and project experience
7. **Contact Section**: Form submission with validation and feedback

### Backend Services
1. **Contact API**: Handles form submissions with validation
2. **Storage Service**: Abstracted data persistence layer
3. **Route Registration**: Centralized API endpoint management
4. **Error Handling**: Consistent error responses and logging

### Shared Components
1. **Schema Definitions**: Drizzle table schemas with Zod validation
2. **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

1. **User Interaction**: User fills out contact form on frontend
2. **Validation**: Client-side validation using react-hook-form with Zod resolvers
3. **API Request**: TanStack Query handles API communication
4. **Server Processing**: Express validates data and stores in database
5. **Response Handling**: Success/error feedback displayed via toast notifications

### Contact Form Flow
- Form data validation happens on both client and server
- Server stores messages with timestamp in PostgreSQL
- Admin endpoint available for retrieving all contact messages
- Optimistic UI updates with proper error handling

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, Radix UI components, Tailwind CSS
- **Data Fetching**: TanStack Query for API state management
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, Neon PostgreSQL serverless
- **Validation**: Zod for runtime type checking
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite with React plugin and error overlay
- **Linting**: TypeScript compiler for type checking
- **Database**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with HMR and error overlay
- **Backend**: tsx for TypeScript execution with auto-restart
- **Database**: Environment variable configuration for connection
- **Integration**: Vite proxy setup for API requests during development

### Production
- **Frontend**: Static build output served by Express
- **Backend**: Compiled JavaScript bundle with ESM format
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Serving**: Express serves both API routes and static frontend assets

### Build Process
1. Frontend assets built to `dist/public` directory
2. Backend compiled to `dist/index.js` with external packages
3. Single deployment artifact containing both frontend and backend
4. Environment-based configuration for database and external services

### Configuration Management
- Database URL via environment variables
- TypeScript path mapping for clean imports
- Shared configuration between client and server builds
- Development vs production environment detection