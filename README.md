# React Dashboard Starter

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-3-cyan)

A beginner-friendly React admin dashboard boilerplate for quick SaaS prototypes. Built with modern tools and best practices.

![Dashboard Preview](https://placehold.co/1200x600/png?text=Dashboard+Preview)

## Versioning

- Current version: `0.1.0`
- Changelog: `CHANGELOG.md`
- Devlog: `DEVLOG.md`
- Release tags follow Semantic Versioning (`vMAJOR.MINOR.PATCH`)

## Key Features

- 🔐 **Authentication**: Login page with Formik & Yup validation.
- 📊 **Charts**: Interactive data visualization using Chart.js.
- 👥 **User Management**: CRUD operations table with mock data.
- 🎨 **Theming**: Dark/Light mode toggle with persistence.
- 📱 **Responsive**: Mobile-friendly sidebar and layout.
- ⚡ **Fast**: Powered by Vite for instant HMR.
- ♿ **Accessible**: ARIA labels and semantic HTML.

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-dashboard-starter.git
   cd react-dashboard-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

## Usage Guide

### Customizing the Theme
Edit `src/index.css` to change the CSS variables for colors. The theme uses HSL values for easy opacity manipulation.

### Adding New Pages
1. Create a new component in `src/pages/`.
2. Add the route in `src/App.tsx`.
3. Add a navigation link in `src/components/Layout.tsx`.

### Connecting to Real API
Replace the mock logic in `src/pages/Users.tsx` and `src/pages/Login.tsx` with Axios calls.
```typescript
import axios from 'axios';
const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });
```

## Deployment

### Vercel / Netlify
1. Connect your GitHub repository.
2. Set the build command to `npm run build`.
3. Set the output directory to `dist`.

## Troubleshooting

- **Tailwind not working?** Ensure `npm run dev` is running.
- **Charts not showing?** Check console for canvas errors.

## Contribution

We welcome contributions! Please follow the `CONTRIBUTING.md` guidelines.
1. Fork the repo.
2. Create a feature branch.
3. Submit a PR.

---

**Created by 17713746 Canada Inc. as GodsIMiJ AI Solutions 2026. James Derek Ingersoll, President & Architect. 2025 Brainz Mag. Global 500 honoree & executive contributor.**
