import 'package:flutter/material.dart';

class AnimatedSubtitle extends StatelessWidget {
  final bool isDark;
  
  const AnimatedSubtitle({
    super.key,
    required this.isDark,
  });

  @override
  Widget build(BuildContext context) {
    return TweenAnimationBuilder<double>(
      tween: Tween(begin: 0.0, end: 1.0),
      duration: const Duration(milliseconds: 600),
      curve: Curves.easeOut,
      builder: (context, value, child) {
        return Transform.translate(
          offset: Offset(0, 20 * (1 - value)),
          child: Opacity(
            opacity: value,
            child: Text(
              'Join our proven crypto trading strategy and earn 90% of all profits. Our algorithm works 24/7 while you sit back and watch your gains grow.',
              style: TextStyle(
                fontSize: 16,
                height: 1.5,
                color: isDark ? Colors.grey.shade300 : Colors.grey.shade700,
              ),
              textAlign: TextAlign.center,
            ),
          ),
        );
      },
    );
  }
} 