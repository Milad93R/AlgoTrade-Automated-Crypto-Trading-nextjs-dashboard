# AtVest Mobile App Setup

## What We've Done

1. **Created a Monorepo Structure**
   - Set up Turborepo for managing the monorepo
   - Created a structure with `apps/` for applications and `packages/` for shared code
   - Moved the web app to `apps/web/`
   - Created a new mobile app in `apps/mobile/`

2. **Set Up Shared Packages**
   - `packages/ui`: For shared UI components
   - `packages/api`: For shared API client code
   - `packages/config`: For shared configuration

3. **Created a React Native Mobile App**
   - Used Expo for easier development
   - Set up basic screens matching the web app's structure
   - Implemented theme support (light/dark mode)
   - Configured navigation

## Next Steps

1. **Complete the Mobile App Setup**
   - Add the necessary assets (icons, splash screens)
   - Install Expo CLI globally: `npm install -g expo-cli`
   - Create actual screens for all features

2. **Extract Common Code to Shared Packages**
   - Move common API calls to the `api` package
   - Extract reusable UI components to the `ui` package
   - Share types and business logic

3. **Run the Mobile App**
   ```bash
   # Make sure you have Expo CLI installed
   npm install -g expo-cli
   
   # Go to the mobile app directory
   cd apps/mobile
   
   # Start the development server
   npm run dev
   ```

4. **Test on Real Devices**
   - Use the Expo Go app on your iOS or Android device
   - Scan the QR code from the terminal

5. **Build for Production**
   - Set up Expo EAS Build for creating production builds
   - Configure app signing for iOS and Android

## Working with the Monorepo

- Run commands for all projects: `npm run dev` at the root
- Run commands for a specific project: `cd apps/mobile && npm run dev`
- Install dependencies for the whole monorepo: `npm install` at the root
- Install dependencies for a specific project: `cd apps/mobile && npm install <package-name>`

## Common Issues

- **React Version Mismatch**: React Native requires React 18.2.0, while your web app might use a newer version. We've set up the mobile app with the compatible version.
- **Path Aliases**: Make sure path aliases are properly configured in tsconfig.json files
- **Shared Types**: Ensure all shared types are properly exported and imported

---

With this setup, you now have a foundation for developing both web and mobile apps for AtVest with code sharing capabilities. 