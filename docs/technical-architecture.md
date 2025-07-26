# Technical Architecture

## Overview
The CustomerVault Analytics Platform is built with:

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **State Management**: React Query + Zustand

## Architecture Diagram

```
[User Browser] 
  → [Next.js Frontend] 
  → [API Routes] 
  → [Prisma Client] 
  → [PostgreSQL Database]
```

## Key Components

### 1. Multi-Tenant Architecture
- Row-level security implemented via tenant IDs
- Separate schema for each tenant's data
- Tenant isolation at application and database levels

### 2. Authentication Flow
- Credentials (email/password) authentication
- Session management with JWT
- Role-based access control (Admin, Manager, Analyst, Viewer)

### 3. Data Layer
- Prisma ORM for type-safe database access
- PostgreSQL for relational data
- Redis for caching (future implementation)

## Deployment
- Containerized with Docker
- CI/CD pipeline with GitHub Actions
- Monitoring with Prometheus + Grafana
