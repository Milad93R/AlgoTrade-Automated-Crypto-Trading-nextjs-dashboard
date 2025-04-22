import 'package:flutter/material.dart';

import 'theme/app_theme.dart';
import 'screens/hero_screen.dart';

void main() {
  runApp(const SimpleTestApp());
}

class SimpleTestApp extends StatelessWidget {
  const SimpleTestApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Test App',
      theme: AppTheme.lightTheme(),
      darkTheme: AppTheme.darkTheme(),
      themeMode: ThemeMode.light, // Default to light theme
      home: const HeroScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}
