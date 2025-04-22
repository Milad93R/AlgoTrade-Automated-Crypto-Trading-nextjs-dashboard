import 'package:flutter/material.dart';

class AppTheme {
  static ThemeData lightTheme() {
    return ThemeData(
      colorScheme: ColorScheme.fromSeed(seedColor: Colors.indigo),
      useMaterial3: true,
      fontFamily: 'Inter',
    );
  }

  static ThemeData darkTheme() {
    return ThemeData(
      colorScheme: ColorScheme.fromSeed(
        seedColor: Colors.indigo,
        brightness: Brightness.dark,
      ),
      scaffoldBackgroundColor: const Color(0xFF111827),
      useMaterial3: true,
      fontFamily: 'Inter',
    );
  }

  // Common colors
  static Color get lightBackground => const Color(0xFFF3F4F6);
  static Color get darkBackground => const Color(0xFF111827);

  static Color getIndigo(bool isDark, {double opacity = 0.3}) {
    return isDark
        ? Colors.indigo.shade900.withOpacity(opacity)
        : Colors.indigo.shade200.withOpacity(opacity * 2);
  }

  static Color getPurple(bool isDark, {double opacity = 0.3}) {
    return isDark
        ? Colors.purple.shade900.withOpacity(opacity)
        : Colors.purple.shade200.withOpacity(opacity * 2);
  }
} 