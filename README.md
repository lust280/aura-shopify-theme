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
- `sections/featured-collection.liquid` / `snippets/product-card.liquid`: featured products from a Shopify collection, with four clearly marked sample products until a collection is selected.
- `templates/index.json`: starter homepage configuration with the demo product cards enabled.

### Demo product photography

The sample cards use locally stored product photos so the theme is easy to preview before a store has a product catalog. They are placeholders, not a real catalog, pricing, or product claims. Replace them with your own licensed product photos before launch.

- `demo-serum.jpg` — [George Dagerotip on Unsplash](https://unsplash.com/photos/a-dropper-bottle-with-a-dropper-on-top-of-it-io6vt4rAFo0)
- `demo-skincare.jpg` — [Content Pixie on Unsplash](https://unsplash.com/photos/white-drop-bottle-on-white-surface-WdJ4WnLxyDs)
- `demo-cosmetics.jpg` — [Pexels photo 21283464](https://www.pexels.com/photo/close-up-of-a-cream-container-without-a-label-standing-next-to-a-plant-21283464/)
- `demo-perfume.jpg` — [Sanket Khatua on Unsplash](https://unsplash.com/photos/a-glass-bottle-with-a-liquid-inside-of-it--bRyA4PRPKg)

Pexels states that its photos are free for commercial use, while visible brands and trademarks remain subject to their own rights. The selected samples avoid visible logos. [Pexels license guidance](https://help.pexels.com/hc/en-us/articles/360042295214-Can-I-use-the-photos-and-videos-for-a-commercial-project)

## Preview before creating a store

Open `preview/aura-preview.html` in a browser, or serve this repository's `preview` folder locally. This static mockup is for checking the visual direction; Shopify's Liquid sections, real catalog, cart, and editor need a Shopify store. Once you have a `*.myshopify.com` address, `npm run dev -- --store your-store.myshopify.com` creates a live theme preview.
