# Deployment Instructions

This project is configured to deploy to GitHub Pages.

## GitHub Actions Setup (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `master` branch.

### Enable GitHub Pages:

1. Go to your repository on GitHub
2. Click on **Settings**
3. Navigate to **Pages** in the left sidebar
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
5. Push your code to the `master` branch - the site will automatically build and deploy

Your site will be available at: `https://sifes.github.io/Vuesax/`

## Manual Deployment

If you prefer to deploy manually or for testing:

1. Build the project:
   ```bash
   npm run build
   ```

2. The static files will be in the `out` directory

3. Deploy the `out` directory to any static hosting service

## Local Testing

To test the build locally:

```bash
npm run build
npx serve out
```

Then visit `http://localhost:3000/Vuesax` in your browser.

## Important Notes

- The site is configured with `basePath: '/Vuesax'` in `next.config.js`
- All routes will be prefixed with `/Vuesax/`
- The `.nojekyll` file is included to ensure GitHub Pages serves the site correctly
- Static export mode is enabled, so all pages are pre-rendered at build time
