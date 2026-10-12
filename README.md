# Paradise Nursery

Paradise Nursery is a React-based online plant shopping application that allows users to explore houseplants, browse different plant categories, add products to a shopping cart, manage quantities, and calculate the total purchase amount.

## Project objectives

- Build an accessible, responsive storefront for browsing indoor plants.
- Organize a catalog of plants into clear care and style categories.
- Demonstrate client-side routing and Redux Toolkit state management.
- Provide a working cart experience without a backend or payment service.

## Features

- Nature-inspired landing page with a responsive greenery hero and a Get Started link.
- About Us page with the company story, mission, vision, and sustainability commitment.
- 18 plant products across Air-Purifying, Low-Maintenance, and Indoor Decorative categories (six per category).
- Product images with descriptive alternative text and a fallback image.
- Redux-powered add, increase, decrease, remove, and clear cart operations.
- Duplicate prevention, disabled added-product buttons, live item count, and derived totals.
- Cart summary with per-product totals, overall total, empty-cart state, and a frontend-only checkout notice.
- Responsive navigation, product grid, and mobile cart layout.

## Technology stack

- React 19 with functional components and Hooks
- Vite
- JavaScript and CSS3
- React Router DOM
- Redux Toolkit and React Redux
- React Icons

## Installation and development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build and preview it locally:

```bash
npm run build
npm run preview
```

Run the configured linter:

```bash
npm run lint
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Landing page |
| `/about` | About Paradise Nursery |
| `/products` | Product listing |
| `/cart` | Shopping cart |

## Redux Toolkit integration

The cart slice in `src/redux/CartSlice.jsx` is the single source of truth for cart state. The Redux store is configured in `src/redux/store.js` and provided to the application from `src/main.jsx`. Components use `useDispatch` to dispatch cart actions and `useSelector` to read the cart.

Cart item count and cart amount are derived from the current cart items: count sums quantities, while the total sums each item's price multiplied by its quantity. Adding an existing product is ignored, and the product listing reads the same Redux state to disable its Add to Cart button. Decreasing a quantity never takes it below one; the remove action deletes an item.

## Product listing and shopping cart

Product information is maintained in `src/data/plants.js`. The listing groups all 18 products into three categories and formats prices in Indian rupees. The cart page shows each plant's unit price, quantity, line total, and the overall total. Continue Shopping links back to the catalog. Checkout intentionally displays a coming-soon message; no real payment processing is included.

## Project structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   └── Navbar.css
├── data/
│   └── plants.js
├── redux/
│   ├── store.js
│   └── CartSlice.jsx
├── AboutUs.jsx
├── AboutUs.css
├── App.jsx
├── App.css
├── CartItem.jsx
├── CartItem.css
├── ProductList.jsx
├── ProductList.css
├── index.css
└── main.jsx
index.html
package.json
README.md
```

## GitHub repository and submission

No GitHub repository URL has been assigned yet. After creating and uploading the repository, add its URL here.

Submit these exact source paths from the repository root:

1. `README.md`
2. `src/AboutUs.jsx`
3. `src/App.css`
4. `src/App.jsx`
5. `src/redux/CartSlice.jsx`
6. `src/ProductList.jsx`
7. `src/CartItem.jsx`

To obtain each GitHub file URL after upload, open the repository in GitHub, browse to the listed path, and copy the browser address. The URL will follow the repository's own address and branch; no repository-specific URL is assumed here.
