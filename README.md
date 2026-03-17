## 🏃 Expediate Web

Expediate is a simple way for athletes to track their [Diet Quality Score](https://strengthrunning.com/2014/06/runners-diet-plan-matt-fitzgerald-interview/).

Matt Fitzgerald introduced the DQS system in his book, [Racing Weight](https://www.goodreads.com/book/show/7192581-racing-weight). The system gives athletes a rule‑of‑thumb way to measure the quality of their diets without tracking every calorie.

This web app is the front‑end for Expediate: you paste everything you ate into a single text field, and the app sends it to the Expediate API to calculate your score and show a detailed breakdown by food category.


## 🥦 Diet Quality Score (DQS) Overview

Fitzgerald’s DQS follows a point‑based system based on two factors:

1. The _quality_ of the food  
2. The _quantity_ of the food

Higher‑quality foods earn positive points, and lower‑quality foods subtract points. Categories include fruits, vegetables, lean meats & fish, whole grains, nuts & seeds, dairy, refined grains, sweets, fried foods, and fatty proteins.

For the full scoring table and background, see the API README or the in‑app `DQS explained` page.


## 🧑‍💻 Tech Stack

- **Framework**: `Next.js` 16 (App Router)
- **UI**: React 19 + Tailwind CSS 4
- **State / Data**: `@tanstack/react-query`
- **Build tooling**: TypeScript, ESLint, Prettier

The app is designed as a small, focused UI on top of the Expediate API.

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+ recommended
- **npm** (or another compatible package manager like `pnpm` or `yarn`)

You’ll also need a running instance of the **Expediate API** and its base URL.


## 📦 Installation

From the `expediate-web` directory:

```bash
npm install
```



## ⚙️ Environment Configuration

The web app needs to know where your Expediate API is running.

Create a `.env.local` file in the `expediate-web` root:

```bash
cp .env.local.example .env.local  # if present, otherwise create manually
```

Then set:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
```

- **`NEXT_PUBLIC_API_URL`**: Base URL for the Expediate API (e.g. `http://localhost:3000` or your deployed API URL).  
- This variable is required; the app will throw an error at startup if it’s missing.


## 💻 Development

Run the dev server:

```bash
npm run dev
```

By default this starts Next.js in development mode on **port 4001**:

- App URL: `http://localhost:4001`

As you edit files under `src/`, the browser will hot‑reload.

## 🏗 Production Build

Build the app:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

By default this serves the built app on **port 4000**:

- App URL: `http://localhost:4000`

Make sure `NEXT_PUBLIC_API_URL` is configured for your production API before building/running.

## 📜 Scripts

From `package.json`:

- **`npm run dev`**: Start the development server (Turbopack, port 4001).
- **`npm run build`**: Create an optimized production build.
- **`npm start`**: Run the production server (port 4000).
- **`npm run lint`**: Run ESLint.
- **`npm run format`**: Format the codebase with Prettier.

## 🌟 App Features

- **One‑field logging**: Paste what you ate today in natural language. The app sends it to the API for parsing and scoring.
- **Instant DQS result**: See your **total Diet Quality Score** with contextual messaging and visual styling based on your score.
- **Category breakdown**: View scores by food category (e.g. Fruits, Vegetables, Refined grains), with expandable details of individual items and their point values.
- **Educational links**: Jump to the in‑app `DQS explained` and category pages for more detail on how each food type affects your score.
- **Accessible, responsive UI**: Layout and components are tailored for both mobile and desktop, with attention to keyboard and screen‑reader accessibility.

## 🔗 Relationship to the API

- The web app is a **pure client** of the Expediate API.
- It uses a small API client (`NEXT_PUBLIC_API_URL` + `fetch`) and React Query to:
  - Submit your logged food text.
  - Retrieve the computed DQS and per‑category breakdown.
- For endpoint details, request/response shapes, and DQS internals, see the **Expediate API README** in the `expediate-api` project.

