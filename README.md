# OpenAP Inventory Manager Next.js template

This is a really simple project that shows the usage of Next.js with OpenAP Inventory Manager.

## How to use it?

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/ViacomInc/with-openap-inventory-manager.git openap-manager
# or
yarn create next-app --example https://github.com/ViacomInc/with-openap-inventory-manager.git openap-manager
```

## Setup

You should have PostgreSQL installed and running.

1. Copy `.env` as `.env.local` and fill in all the variables
2. Run database migrations for the manager `npm run migrate:manager`
3. Start the app `npm run dev:noauth`
4. Go to `http://localhost:8080`
