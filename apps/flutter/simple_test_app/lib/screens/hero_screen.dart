import 'package:flutter/material.dart';

import '../animations/animation_controllers.dart';
import '../utils/dot_generator.dart';
import '../widgets/animated_badge.dart';
import '../widgets/animated_heading.dart';
import '../widgets/animated_subtitle.dart';
import '../widgets/action_buttons.dart';
import '../widgets/stats_section.dart';
import '../widgets/background_elements.dart';

class HeroScreen extends StatefulWidget {
  const HeroScreen({super.key});

  @override
  State<HeroScreen> createState() => _HeroScreenState();
}

class _HeroScreenState extends State<HeroScreen> with TickerProviderStateMixin {
  late HeroAnimationControllers _animationControllers;
  late List<Map<String, dynamic>> _floatingDots;
  bool _isDark = false;
  
  @override
  void initState() {
    super.initState();
    
    // Initialize animation controllers
    _animationControllers = HeroAnimationControllers(vsync: this);
    
    // Generate floating dots
    _floatingDots = DotGenerator.generateFloatingDots();
  }

  @override
  void dispose() {
    _animationControllers.dispose();
    super.dispose();
  }

  void _toggleTheme() {
    setState(() {
      _isDark = !_isDark;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _isDark 
          ? const Color(0xFF111827) 
          : const Color(0xFFF3F4F6),
      body: Stack(
        children: [
          // Background Image
          Positioned.fill(
            child: Image.asset(
              'raising-graph.png',
              fit: BoxFit.cover,
            ),
          ),
          
          // Animated Background Elements
          BackgroundElements(
            isDark: _isDark,
            floatingDots: _floatingDots,
            pulseController: _animationControllers.pulseController,
            floatController: _animationControllers.floatController,
          ),
          
          // Main Content
          SingleChildScrollView(
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              width: double.infinity,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  const SizedBox(height: 80),
                  
                  // Styled badge above the title
                  AnimatedBadge(isDark: _isDark),
                  
                  const SizedBox(height: 24),
                  
                  // Main heading
                  AnimatedHeading(
                    isDark: _isDark,
                    shimmerController: _animationControllers.shimmerController,
                  ),
                  
                  const SizedBox(height: 24),
                  
                  // Subtitle
                  AnimatedSubtitle(isDark: _isDark),
                  
                  const SizedBox(height: 32),
                  
                  // CTA buttons
                  ActionButtons(
                    isDark: _isDark,
                    shimmerController: _animationControllers.shimmerController,
                  ),
                  
                  const SizedBox(height: 64),
                  
                  // Stats
                  StatsSection(isDark: _isDark),
                  
                  const SizedBox(height: 64),
                ],
              ),
            ),
          ),
          
          // Theme toggle button
          Positioned(
            top: 20,
            right: 20,
            child: IconButton(
              icon: Icon(_isDark ? Icons.light_mode : Icons.dark_mode),
              color: _isDark ? Colors.white : Colors.black,
              onPressed: _toggleTheme,
            ),
          ),
        ],
      ),
    );
  }
} 