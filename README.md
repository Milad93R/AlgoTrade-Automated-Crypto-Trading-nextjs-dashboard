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

# AtVest Monorepo

This is a monorepo for the AtVest platform, containing both web and mobile applications that share code.

## Project Structure

```
atvest/
├── apps/
│   ├── web/         # Next.js web application
│   └── mobile/      # React Native mobile application
└── packages/
    ├── ui/          # Shared UI components
    ├── api/         # API integrations
    └── config/      # Shared configs
```

## Getting Started

First, install dependencies:

```bash
npm install
```

### Running the Web Application

```bash
# From the root directory
npm run dev

# Or specifically for the web app
cd apps/web && npm run dev
```

This will start the Next.js development server for the web application.

### Running the Mobile Application

To run the mobile application, you need to have Expo CLI installed:

```bash
# Install Expo CLI globally if you don't have it
npm install -g expo-cli

# Start the mobile app
cd apps/mobile
npm run dev
```

This will start the Expo development server. You can run the app on:
- iOS simulator (requires macOS and Xcode)
- Android emulator (requires Android Studio)
- Physical device using the Expo Go app (scan the QR code)

## Shared Packages

### UI Components

Shared UI components are located in the `packages/ui` directory. These components can be used in both web and mobile applications.

### API Integration

Shared API client is located in the `packages/api` directory. It provides a unified way to interact with the backend services.

### Configuration

Shared configuration is located in the `packages/config` directory. It contains common configuration like Tailwind and ESLint configurations.

## Development Workflow

1. Make changes to shared packages if needed
2. Run tests to ensure everything works correctly
3. Run the appropriate application (web or mobile) to test your changes
4. Commit your changes

## Building for Production

### Web Application

```bash
npm run build
```

### Mobile Application

For mobile, you'll need to use Expo's build service or EAS Build:

```bash
cd apps/mobile
npx expo build:android  # For Android
npx expo build:ios      # For iOS (requires Apple Developer account)
```

Or with EAS Build (recommended):

```bash
cd apps/mobile
npx eas build --platform android
npx eas build --platform ios
```
