# Setup Guide

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Base URL for API requests | `https://jsonplaceholder.typicode.com` |

## Development

Start the dev server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Building for Production

```bash
npm run build
```

This creates a `dist` folder ready for deployment.

---

**Created by 17713746 Canada Inc. as GodsIMiJ AI Solutions 2026. James Derek Ingersoll, President & Architect. 2025 Brainz Mag. Global 500 honoree & executive contributor.**
