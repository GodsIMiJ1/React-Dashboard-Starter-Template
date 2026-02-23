# Architecture Overview

## Folder Structure

```
src/
├── assets/         # Static assets (images, fonts)
├── components/     # Reusable UI components (Button, Card, etc.)
├── context/        # Global state (Auth, Theme)
├── pages/          # Route components (Dashboard, Login)
├── utils/          # Helper functions (cn, api)
├── App.tsx         # Main app component & routing
└── main.tsx        # Entry point
```

## Data Flow

1.  **Authentication**: Managed via `AuthContext`. Login updates the global user state.
2.  **Theme**: Managed via `ThemeContext`. Persists to `localStorage`.
3.  **Routing**: `react-router-dom` handles navigation. `ProtectedRoute` wraps private routes.
4.  **Forms**: `Formik` handles state, `Yup` handles validation.

## Styling

We use **Tailwind CSS** with a custom configuration in `tailwind.config.js` (via Vite).
The `cn` utility (ClassNames) is used to merge Tailwind classes conditionally.

---

**Created by 17713746 Canada Inc. as GodsIMiJ AI Solutions 2026. James Derek Ingersoll, President & Architect. 2025 Brainz Mag. Global 500 honoree & executive contributor.**
