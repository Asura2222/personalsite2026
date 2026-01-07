# Personal Website

A minimalist, black-and-white personal website built with Next.js, featuring a clean design inspired by Apple's aesthetic principles.

## Features

- **Clean, Minimalist Design**: Black and white aesthetic with Manrope typography
- **Left Sidebar Navigation**: Fixed sidebar with right-aligned text on desktop, mobile-friendly hamburger menu
- **Command Palette**: Press `Cmd+K` (or `Ctrl+K`) for quick navigation
- **Highlighted Text**: Pastel-colored markers for key terms and entities
- **Filterable Project Grid**: Animated tabs to filter between projects and communities
- **MDX Blog**: Write blog posts in MDX format with full markdown support
- **Responsive**: Mobile-first design that works on all devices
- **Dark Mode**: Automatic dark mode support based on system preferences

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Typography**: Manrope (via Google Fonts)
- **Icons**: Lucide React
- **Command Palette**: cmdk
- **Animations**: Framer Motion
- **Blog**: MDX with gray-matter

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with sidebar and command menu
│   ├── page.tsx             # Home page with bio and projects
│   ├── experiences/         # Work history timeline
│   ├── fieldnotes/          # Blog posts index and individual posts
│   ├── philosophy/          # Core beliefs and philosophy
│   └── photos/              # Photo gallery
├── components/
│   ├── layout/              # Layout components (sidebar, command menu)
│   ├── ui/                  # Reusable UI components
│   └── sections/            # Page sections (project grid, etc.)
├── content/
│   └── fieldnotes/          # MDX blog posts
└── lib/                     # Utility functions
```

## Customization

### Update Personal Information

1. **Home Page** (`app/page.tsx`):
   - Change "Name Surname" to your name
   - Update bio text and highlights
   - Modify social media links
   - Update the "cool things" list

2. **Experiences** (`app/experiences/page.tsx`):
   - Replace the experiences array with your work history

3. **Philosophy** (`app/philosophy/page.tsx`):
   - Update philosophies with your core beliefs

4. **Photos** (`app/photos/page.tsx`):
   - Replace placeholder Unsplash images with your own photos
   - Update the photos array with your image URLs

### Add Blog Posts

Create new MDX files in `content/fieldnotes/` with this frontmatter:

```mdx
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post"
category: "Philosophy"
readingTime: "5 min"
---

Your content here...
```

### Modify Colors

The highlight colors can be customized in `components/ui/highlight.tsx`:
- blue, green, yellow, purple, red

### Update Metadata

Edit `app/layout.tsx` to update:
- Site title
- Description
- Other metadata

## Command Palette

Press `Cmd+K` (Mac) or `Ctrl+K` (Windows) to open the command palette. Use it to:
- Navigate to different pages
- Copy email address
- Open social media profiles
- Quick search functionality

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project can be easily deployed to:
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your Git repository
- **Any Node.js hosting**: Build and serve the `.next` folder

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## License

MIT License - feel free to use this as a template for your own website!
