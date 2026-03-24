# Character Explorer

A React application for browsing and managing Rick and Morty characters, built to demonstrate React Router DOM concepts including nested routes, dynamic segments, and programmatic navigation.

## Features

- Browse all 826+ Rick and Morty characters in a responsive grid
- Search characters by name across the full API dataset
- Paginated results with smart page number display
- Click any character to view their full details
- Edit a character's name, status, and species
- Delete characters from your view
- Edits and deletions persist across page refreshes via localStorage
- Tabbed detail view with Info and Episodes tabs
- Active link highlighting in sidebar navigation
- Skeleton loading states on the character grid and detail page
- Back navigation from detail view to characters list

## Tech Stack

- React (Vite)
- React Router DOM v6
- Tailwind CSS v4
- Rick and Morty API

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
  Components/
    CharacterCard.jsx
    CharacterEpisodes.jsx
    CharacterInfo.jsx
    Sidebar.jsx
  Context/
    CharacterContext.jsx
  Pages/
    About.jsx
    CharacterDetail.jsx
    Characters.jsx
    Dashboard.jsx
    Home.jsx
```

## Notes

Character edits and deletions are stored in localStorage and are not synced to any backend. The Rick and Morty API is read-only — all mutations are managed client-side.