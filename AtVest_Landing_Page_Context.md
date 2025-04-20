# AtVest Landing Page Context

## Overview
AtVest is a platform offering automated cryptocurrency trading solutions. The landing page showcases a sleek, modern design with a dark/light theme toggle functionality, animations, and a focus on showcasing the platform's value propositions.

## Brand Identity
- **Name**: AtVest
- **Logo**: Simple "A" logo with a gradient effect
- **Color Scheme**: Primarily indigo and purple gradients
- **Theme Support**: Dark and light mode with seamless transitions

## Key Components

### Header (Header.tsx)
- Fixed navigation bar with scroll-aware styling
- Logo with "Live" status indicator
- Navigation links to main page sections
- Mobile-responsive menu with animations
- Theme toggle and sign-up button
- Sections: Home, How It Works, Performance, FAQ

### Hero Section (Hero.tsx)
- Main value proposition: "Earn Passive Income With Our Automated Trading"
- Key selling point: "Join our proven crypto trading strategy and earn 90% of all profits"
- Background with animated elements (dots, circles, gradient effects)
- Call-to-action buttons: "Get Started" and "Learn More"
- Key statistics displayed prominently:
  - 200%+ Annual Return
  - 90% Profit Share
  - 24/7 Automated Trading

### How It Works (HowItWorks.tsx)
- Three-step process explaining the service:
  1. Sign Up & Connect - API connection with funds remaining in user's exchange
  2. Algorithm Trades for You - "rasta-trendier" algorithm executes trades
  3. Watch Your Profits Grow - User keeps 90% of profits, no lock-up periods
- Visual connectors between steps
- Animated highlighting of key points
- Call-to-action: "Start Your Trading Journey"

### Backtesting (Backtesting.tsx)
- Showcases the platform's backtesting capabilities
- Features a performance chart (MonthlyResultsChart component)
- Strategy library with featured "rasta-trendier" strategy
- Key statistics display:
  - Win Rate: 33%
  - Profit Factor: 1.5
  - Max Drawdown: 53%
  - Sharpe Ratio: 1.92
- Call-to-action for investing in the featured strategy

### Features (Features.tsx)
- Grid layout of platform features with icons
- Six main features highlighted:
  1. Advanced Backtesting - Testing across multiple timeframes and conditions
  2. Strategy Optimization - AI-powered tools using Optuna
  3. Risk Management - Stop-loss, take-profit, and position sizing
  4. Automated Trading - 24/7 execution without emotional bias
  5. Performance Analytics - Detailed metrics and reports
  6. Strategy Presets - Pre-built strategies and custom options

## Technical Implementation
- Built with Next.js (uses 'use client' directive)
- Framer Motion for animations
- Tailwind CSS for styling
- Responsive design supporting mobile and desktop layouts
- Context-based theming (ThemeContext)
- Section-based navigation with scroll detection

## User Journey
1. Users are introduced to the value proposition on the hero section
2. Learn about the simple three-step process
3. View performance metrics and backtesting capabilities
4. Discover detailed features of the platform
5. Sign up to start using the automated trading service

## Key Selling Points
- Fully automated trading (hands-off approach)
- 90% profit sharing with users
- Funds remain in the user's exchange account (security)
- Proven strategy with strong historical performance
- Advanced backtesting and optimization tools
- 24/7 automated trading without emotional bias

This landing page effectively communicates AtVest's value proposition as a platform for passive income through automated cryptocurrency trading while maintaining a professional, modern aesthetic with engaging interactive elements. 