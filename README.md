# NextGen Design System

NextGen Design System is an AI-first design system package that combines:

- primitive tokens (spacing, type scales, color ramps)
- semantic tokens (surface, text, border, interactive)
- reusable TSX components for rapid vibe coding

## Why this exists

This project is structured to be easy for AI coding tools to parse, reason about, and generate from. It keeps source token exports in JSON and exposes a flattened token layer in both TypeScript and CSS variables.

## Stack

- `tsx` component layer
- `ts` primitive and semantic APIs
- `css` system styles and generated token variables
- `json` token sources from Figma exports
- `mjs` scripts for syncing and generating token artifacts
- `md` docs for humans and AI workflows

## Quick start

```bash
cd NextGen-Design-System
npm install
npm run build:tokens
npm run check
```

## Core commands

- `npm run sync:tokens` copies the latest token exports into `src/tokens/source`
- `npm run build:tokens` flattens source tokens into generated TS and CSS files
- `npm run check` validates TypeScript

## Project map

- `src/primitives` low-level design primitives
- `src/semantics` theme contracts and semantic mappings
- `src/components` composable UI primitives
- `src/tokens/source` raw exported token files
- `src/tokens/generated` generated AI-friendly token map
- `docs` implementation and usage guides

## GitHub upload

Create a new repo and push this folder as its own project:

```bash
git init
git add .
git commit -m "chore: initialize NextGen Design System"
git branch -M main
git remote add origin <your-new-repo-url>
git push -u origin main
```
