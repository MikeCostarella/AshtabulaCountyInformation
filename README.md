# Ashtabula County Information

A searchable, filterable directory of meaningful links across **Ashtabula County, Ohio** — government, education, health, business, community, recreation, and news. This is the first app of its kind in the collection.

## What's inside

```
AshtabulaCountyInformation/
├── react-app/                 # the Vite + React browsing app
│   └── src/data/links.js      # single source of truth for all links
├── data/
│   └── ashtabula_county_links.csv   # the same directory as a spreadsheet
└── README.md
```

- **`react-app/src/data/links.js`** — the single source of truth for all links (name, category, subcategory, URL, description).
- **`data/ashtabula_county_links.csv`** — the same directory as a spreadsheet for easy editing/import.
- **React + Vite app** — a fast browsing page with live search and category filters.

## Run it

```bash
cd react-app
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Add or edit links

Edit **`react-app/src/data/links.js`** — each entry looks like:

```js
{ name: "…", category: "Government", subcategory: "County", url: "https://…", description: "…" }
```

Categories are defined by the `CATEGORIES` array in the same file. Keep `data/ashtabula_county_links.csv` in sync if you rely on the spreadsheet.

## Notes

- Links were researched and reviewed on **July 11, 2026**. Municipal and township sites change; the county directory pages (Townships, Villages, Libraries, Newspapers) are included as living gateways.
- This is a community reference tool, not an official government site.
