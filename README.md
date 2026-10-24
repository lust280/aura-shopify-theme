# Aura — Shopify theme

Aura is a standalone Shopify Online Store 2.0 theme project.

## Requirements

- Node.js 22.12 or newer
- npm
- A Shopify development store for live theme preview

## Setup

```sh
npm install
npm run check
npm run build
npm run dev -- --store your-store.myshopify.com
```

`npm run check` runs Shopify Theme Check. `npm run build` packages the theme into an uploadable ZIP. `npm run dev` uploads the theme as a temporary development theme and serves a live preview using your store's catalog. The Shopify CLI prompts you to authenticate the first time.

## Current scope

- `layout/theme.liquid`: global document, Shopify SEO metadata, font and color variables, and shared assets.
- `config/settings_schema.json`: global colors, typography, social links, and motion preference.
- `sections/header.liquid` / `sections/footer.liquid`: small working shell sections for the initial layout.
- `sections/hero.liquid`: responsive image/video hero with editable content blocks.
- `templates/index.json`: starter homepage configuration.

The featured collection, product card, and AJAX cart are planned next; they are not included yet.
