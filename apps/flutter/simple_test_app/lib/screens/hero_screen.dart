import 'package:flutter/material.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';

import '../animations/animation_controllers.dart';
import '../utils/dot_generator.dart';
import '../widgets/animated_badge.dart';
import '../widgets/animated_heading.dart';
import '../widgets/animated_subtitle.dart';
import '../widgets/action_buttons.dart';
import '../widgets/stats_section.dart';
import '../widgets/background_elements.dart';
import 'how_it_works_screen.dart';

class HeroScreen extends StatefulWidget {
  const HeroScreen({super.key});

  @override
  State<HeroScreen> createState() => _HeroScreenState();
}

class _HeroScreenState extends State<HeroScreen> with TickerProviderStateMixin {
  late HeroAnimationControllers _animationControllers;
  late List<Map<String, dynamic>> _floatingDots;
  bool _isDark = false;
  final _pageController = PageController();
  
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
    _pageController.dispose();
    super.dispose();
  }

  void _toggleTheme() {
    setState(() {
      _isDark = !_isDark;
    });
  }

  @override
  Widget build(BuildContext context) {
    final Color indicatorColor = _isDark ? Colors.indigo.shade300 : Colors.indigo.shade600;
    final Color indicatorInactiveColor = _isDark ? Colors.grey.shade700 : Colors.grey.shade300;

    return Scaffold(
      backgroundColor: _isDark ? const Color(0xFF111827) : const Color(0xFFF3F4F6),
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
          
          // PageView for content
          PageView(
            controller: _pageController,
            children: [
              // Page 1: Original Hero Content
              _buildHeroPage(), 
              // Page 2: How It Works Content
              HowItWorksScreen(isDark: _isDark), 
            ],
          ),
          
          // Theme toggle button
          Positioned(
            top: 40,
            right: 20,
            child: IconButton(
              icon: Icon(_isDark ? Icons.light_mode : Icons.dark_mode),
              color: _isDark ? Colors.white : Colors.black,
              onPressed: _toggleTheme,
              tooltip: 'Toggle Theme',
            ),
          ),
          
          // Page Indicator Dots at the bottom
          Positioned(
            bottom: 30,
            left: 0,
            right: 0,
            child: Center(
              child: SmoothPageIndicator(
                controller: _pageController,
                count: 2,
                effect: ExpandingDotsEffect(
                  dotHeight: 8,
                  dotWidth: 8,
                  activeDotColor: indicatorColor,
                  dotColor: indicatorInactiveColor,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  // Helper widget for the original hero page content
  Widget _buildHeroPage() {
    return SingleChildScrollView(
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
            
            const SizedBox(height: 120),
          ],
        ),
      ),
    );
  }
} 