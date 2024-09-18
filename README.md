# Prisma & Zod Integration in Next.js Server Actions

This project demonstrates how to integrate Prisma with Zod in a Next.js application to handle form submissions using server actions. By combining Prisma for database interactions and Zod for schema validation, this project provides a robust solution for managing backend form logic in a clean, efficient manner.

## Features

- **Prisma**: ORM for handling database interactions.
- **Zod**: Schema validation for ensuring form data integrity.
- **Next.js Server Actions**: Server-side logic for handling form submissions in real-time.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm or yarn
- PostgreSQL (or another supported Prisma database)

## Getting Started

### Clone the repository:

```bash
git clone https://github.com/yourusername/prisma-zod-nextjs-server-actions.git
```

### Install dependencies:
```bash
cd prisma-zod-nextjs-server-actions
npm install
````

### Set up your environment variables:
Create a `.env` file in the root of the project and add your database URL:

```bash
DATABASE_URL=postgresql://username:password@localhost:5432/mydb
```

### Set up Prisma:
Initialize the Prisma schema:
```bash
npx prisma init
```
Run the migration to set up your database schema:
```bash
npx prisma migrate dev --name init
````

## Run the development server:
Start the Next.js server:

```bash
npm run dev
```

Your application will be running at http://localhost:3000.

# Usage

This project demonstrates form submission where the data is validated using Zod and then stored in the database using Prisma. The example form validates fields like name and email using a Zod schema before sending the data to a Prisma-powered server action.

- Fill out the form on the homepage.
- Upon submission, the form data is validated with Zod.
- If the validation passes, the data is inserted into the database using Prisma.