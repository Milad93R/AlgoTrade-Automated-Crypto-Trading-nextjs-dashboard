import 'package:flutter/material.dart';

class PassiveIncomeText extends StatelessWidget {
  final bool isDark;
  final AnimationController shimmerController;
  
  const PassiveIncomeText({
    super.key,
    required this.isDark,
    required this.shimmerController,
  });

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        // Gradient Text
        ShaderMask(
          shaderCallback: (bounds) {
            return LinearGradient(
              colors: isDark
                ? [Colors.indigo.shade400, Colors.purple.shade400]
                : [Colors.indigo.shade600, Colors.purple.shade600],
            ).createShader(bounds);
          },
          child: AnimatedBuilder(
            animation: shimmerController,
            builder: (context, child) {
              return const Text(
                'Passive Income',
                style: TextStyle(
                  fontSize: 32,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              );
            },
          ),
        ),
        
        // Animated underline
        Positioned(
          bottom: 0,
          left: 0,
          right: 0,
          child: TweenAnimationBuilder<double>(
            tween: Tween(begin: 0.0, end: 1.0),
            duration: const Duration(milliseconds: 1000),
            curve: Curves.easeInOut,
            builder: (context, value, child) {
              return Container(
                height: 2,
                width: 160 * value,
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    colors: [
                      isDark
                        ? Colors.indigo.shade400.withOpacity(0)
                        : Colors.indigo.shade600.withOpacity(0),
                      isDark
                        ? Colors.indigo.shade400
                        : Colors.indigo.shade600,
                      isDark
                        ? Colors.purple.shade400.withOpacity(0)
                        : Colors.purple.shade600.withOpacity(0),
                    ],
                  ),
                ),
              );
            },
          ),
        ),
      ],
    );
  }
} 