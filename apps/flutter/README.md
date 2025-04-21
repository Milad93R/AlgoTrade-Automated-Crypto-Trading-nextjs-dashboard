# Flutter Test Applications

This directory contains Flutter applications for testing purposes.

## Projects

### Simple Test App

A basic Flutter application with minimal functionality for testing purposes. 

The application demonstrates:
- Basic Flutter application structure
- Stateful widgets with counter functionality
- UI components including buttons and switches
- Theme customization

### Running the App

To run the Simple Test App:

```bash
cd simple_test_app
flutter pub get
flutter run
```

Available devices for testing:
- Chrome browser: `flutter run -d chrome`
- macOS desktop: `flutter run -d macos`
- iOS/Android emulators (if configured)

### Project Structure

The Simple Test App follows standard Flutter project structure:
- `lib/main.dart` - Main application code
- `pubspec.yaml` - Project configuration and dependencies
- Platform-specific directories (android, ios, web, etc.)

## Creating New Test Apps

To create a new Flutter test application in this directory:

```bash
# Create a new Flutter app
flutter create app_name

# Run the app
cd app_name
flutter run
``` 