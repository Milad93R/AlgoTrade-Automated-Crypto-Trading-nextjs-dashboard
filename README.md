# AlgoTrade - Automated Crypto Trading

![AlgoTrade](https://via.placeholder.com/1200x300/0a192f/64ffda?text=AlgoTrade)

## Overview

AlgoTrade is a sophisticated algorithmic cryptocurrency trading platform built with Next.js that empowers users to leverage advanced trading strategies without transferring custody of their assets. The platform connects to users' existing exchange accounts via secure read-only API keys, executing trades based on proven technical indicators and risk management protocols.

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## Key Features

- **Non-Custodial Trading**: Connect to your exchange accounts (Binance, MEXC, etc.) using read-only API keys
- **Algorithmic Trading**: Leverage sophisticated trading algorithms with proven performance metrics
- **Real-Time Dashboard**: Monitor your portfolio and trading performance with interactive charts
- **Secure Authentication**: Complete user authentication flow with signup, signin, and password reset
- **Responsive Design**: Beautiful UI that works seamlessly across desktop and mobile devices
- **Dark/Light Mode**: Toggle between themes for comfortable viewing in any environment
- **Performance Analytics**: Detailed insights into trading performance and historical results

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: TailwindCSS 4, Framer Motion for animations
- **Data Visualization**: Recharts for performance metrics
- **Authentication**: Custom auth flow with secure token management
- **State Management**: React Context API
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/cryptovest.git
   cd cryptovest
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application

## Project Structure

```
AlgoTrade/
├── app/                    # Next.js App Router
│   ├── components/         # Reusable UI components
│   ├── context/            # React Context providers
│   ├── auth-success/       # Authentication success page
│   ├── signin/             # User signin page
│   ├── signup/             # User registration page
│   ├── forgot-password/    # Password recovery flow
│   ├── reset-password/     # Password reset page
│   └── page.tsx            # Landing page
├── public/                 # Static assets
├── .next/                  # Next.js build output
├── tailwind.config.js      # TailwindCSS configuration
└── package.json            # Project dependencies
```

## Security

- User funds remain in their exchange accounts at all times
- Read-only API connections that cannot withdraw funds
- Secure authentication with password hashing and JWT tokens
- No storage of exchange API secret keys in plaintext

## Deployment

The easiest way to deploy CryptoVest is using the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
