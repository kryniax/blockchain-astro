
# Blockchain Astro

`Blockchain Astro` is a responsive landing page with dummy data, built using Astro, React, and TypeScript. This page includes a blog section and a job listings section, making it perfect for showcasing content and current job opportunities in a user-friendly way.

## Technologies

This project utilizes the following technologies and tools:

- **Astro**: A framework for building fast, static sites and applications. With a zero JavaScript-by-default approach, it enables fast, static web pages.
- **React**: A JavaScript library used in selected UI components, such as forms, animations, and dynamic elements.
- **TypeScript**: Used to provide static typing and better code structure.
- **Tailwind CSS**: A utility-first CSS framework that allows for fast and easy styling through utility classes.
- **Framer Motion**: An animation library for React components, used to add smooth transitions and animations to the page.

## Application Features

- **Blog Section**: Displays articles, news, and posts. Posts are presented in a clear layout, allowing users to browse content easily.
- **Job Listings**: The page includes a list of current job openings.
- **Animations**: Components are animated using `framer-motion`, adding smooth transitions and interactivity.
- **SEO Optimization**: Built-in SEO best practices, including proper meta tags, descriptions, and HTML structure.
- **Responsiveness**: The page works well on mobile devices, tablets, and desktops.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kryniax/blockchain-astro.git
   cd blockchain-astro
   ```

2. **Install dependencies**:
   Use npm to install the required packages:
   ```bash
   npm install
   ```

3. **Run the application**:
   In development mode:
   ```bash
   npm run dev
   ```
   The app will then be available at `http://localhost:4321`.

4. **Production Build**:
   To build the application for production, use:
   ```bash
   npm run build
   ```

   The generated build will be available in the `dist` folder.

## Scripts

- `npm run dev` - Starts the app in development mode
- `npx astro build` - Builds the app for production after checking for errors

## Folder Structure

- `src/components` - React and Astro components
- `src/layouts` - Astro layouts
- `src/pages` - Project pages
- `src/data` - Sample test data for page
