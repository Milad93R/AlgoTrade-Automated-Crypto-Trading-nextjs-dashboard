import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class BackgroundElements extends StatelessWidget {
  final bool isDark;
  final List<Map<String, dynamic>> floatingDots;
  final AnimationController pulseController;
  final AnimationController floatController;
  
  const BackgroundElements({
    super.key,
    required this.isDark,
    required this.floatingDots,
    required this.pulseController,
    required this.floatController,
  });

  @override
  Widget build(BuildContext context) {
    final Color purpleColor = AppTheme.getPurple(isDark);
    final Color indigoColor = AppTheme.getIndigo(isDark);
    
    return Stack(
      children: [
        // Gradient circles with pulsing animation
        Positioned(
          top: 0,
          left: MediaQuery.of(context).size.width * 0.25,
          child: AnimatedBuilder(
            animation: pulseController,
            builder: (context, child) {
              return Transform.scale(
                scale: 0.9 + pulseController.value * 0.2,
                child: Container(
                  width: 300,
                  height: 300,
                  decoration: BoxDecoration(
                    color: indigoColor,
                    shape: BoxShape.circle,
                    boxShadow: [
                      BoxShadow(
                        color: Colors.indigo.withOpacity(0.2),
                        blurRadius: 80,
                        spreadRadius: 20,
                      ),
                    ],
                  ),
                ),
              );
            },
          ),
        ),
        
        Positioned(
          bottom: 0,
          right: MediaQuery.of(context).size.width * 0.25,
          child: AnimatedBuilder(
            animation: pulseController,
            builder: (context, child) {
              return Transform.scale(
                scale: 0.9 + (pulseController.value + 0.3) * 0.2 % 1,
                child: Container(
                  width: 350,
                  height: 350,
                  decoration: BoxDecoration(
                    color: purpleColor,
                    shape: BoxShape.circle,
                    boxShadow: [
                      BoxShadow(
                        color: Colors.purple.withOpacity(0.2),
                        blurRadius: 80,
                        spreadRadius: 20,
                      ),
                    ],
                  ),
                ),
              );
            },
          ),
        ),
        
        // Floating dots
        ...floatingDots.map((dot) {
          return AnimatedBuilder(
            animation: floatController,
            builder: (context, child) {
              double delay = dot['delay'] as double;
              return Positioned(
                left: MediaQuery.of(context).size.width * (dot['x'] as double) / 100,
                top: MediaQuery.of(context).size.height * (dot['y'] as double) / 100,
                child: Opacity(
                  opacity: (dot['opacity'] as double) * ((floatController.value + delay) % 1.0),
                  child: Container(
                    width: dot['size'] as double,
                    height: dot['size'] as double,
                    decoration: BoxDecoration(
                      color: isDark ? Colors.indigo.withOpacity(0.3) : Colors.indigo.withOpacity(0.3),
                      shape: BoxShape.circle,
                    ),
                  ),
                ),
              );
            },
          );
        }),
        
        // Animated Rings
        ...[1, 2, 3].map((i) => Center(
          child: AnimatedBuilder(
            animation: pulseController,
            builder: (context, child) {
              double scale = pulseController.value * 0.3 + 0.7;
              return Container(
                width: MediaQuery.of(context).size.width * i * 0.25 * scale,
                height: MediaQuery.of(context).size.width * i * 0.25 * scale,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  border: Border.all(
                    color: isDark 
                      ? Colors.indigo.withOpacity(0.1)
                      : Colors.indigo.withOpacity(0.1),
                    width: 1,
                  ),
                ),
              );
            },
          ),
        )),
      ],
    );
  }
} 