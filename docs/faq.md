# Frequently Asked Questions

## How do I add a new route?
1. Create a page component in `src/pages`.
2. Import it in `src/App.tsx`.
3. Add a `<Route>` inside `AppRoutes`.

## How do I change the primary color?
Go to `src/index.css` and modify the `--primary` HSL values.

## How do I connect to a backend?
Use `axios` in your components. We recommend creating a service layer in `src/utils/api.ts` to handle interceptors and base URLs.

## Can I use Redux instead of Context?
Yes! The template is unopinionated. You can install Redux Toolkit and wrap the app in a Provider in `main.tsx`.

---

**Created by 17713746 Canada Inc. as GodsIMiJ AI Solutions 2026. James Derek Ingersoll, President & Architect. 2025 Brainz Mag. Global 500 honoree & executive contributor.**
