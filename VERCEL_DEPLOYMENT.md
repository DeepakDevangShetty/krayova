# Vercel Deployment Guide for KRAYOVA

This guide will help you deploy your KRAYOVA website to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup) (free tier works great)
2. Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"

3. **Import your repository**
   - Select your Git provider (GitHub, GitLab, or Bitbucket)
   - Find and import your KRAYOVA repository

4. **Configure project settings**
   - **Framework Preset**: Vercel should auto-detect "Vite"
   - **Root Directory**: Leave as default (.)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist/public` (auto-configured in vercel.json)

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
4. **For production deployment**
   ```bash
   vercel --prod
   ```

## Configuration Details

Your project includes a `vercel.json` file with the following configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This configuration:
- Specifies the build command to run
- Sets the output directory where Vercel will find your built files
- Enables client-side routing (SPA support) by rewriting all routes to index.html

## Post-Deployment

### Custom Domain (Optional)
1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

### Environment Variables
If you need environment variables in the future:
1. Go to "Settings" → "Environment Variables"
2. Add your variables (must be prefixed with `VITE_` for frontend access)
3. Redeploy the project

### Automatic Deployments
Once connected to Git:
- **Production deployments**: Automatically triggered on pushes to main branch
- **Preview deployments**: Automatically created for pull requests

## Troubleshooting

### Build Fails
- Check that all dependencies are listed in `package.json`
- Ensure Node.js version compatibility (Vercel uses Node 18+ by default)

### 404 Errors on Page Refresh
- The `vercel.json` rewrite configuration should handle this
- If issues persist, verify the rewrite rule is in place

### Assets Not Loading
- Check that asset imports use correct paths
- Verify `dist/public` contains all built assets after running `npm run build` locally

## Vercel Features You Get

✅ **Global CDN**: Your site is served from edge locations worldwide  
✅ **Automatic HTTPS**: SSL certificates provisioned automatically  
✅ **Instant Rollbacks**: Revert to any previous deployment instantly  
✅ **Preview Deployments**: Test changes before going live  
✅ **Analytics**: Built-in web analytics (free tier available)  

## Your Live URLs

After deployment, you'll receive:
- **Production URL**: `https://your-project-name.vercel.app`
- **Preview URLs**: Unique URLs for each branch/PR
- **Custom Domain**: Configure in project settings

---

Need help? Check [Vercel's documentation](https://vercel.com/docs) or the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html).
