import 'package:flutter/material.dart';

class AnimatedBadge extends StatelessWidget {
  final bool isDark;
  
  const AnimatedBadge({
    super.key,
    required this.isDark,
  });

  @override
  Widget build(BuildContext context) {
    return TweenAnimationBuilder<double>(
      tween: Tween(begin: 0.0, end: 1.0),
      duration: const Duration(milliseconds: 500),
      builder: (context, value, child) {
        return Transform.translate(
          offset: Offset(0, 20 * (1 - value)),
          child: Opacity(
            opacity: value,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              decoration: BoxDecoration(
                color: isDark
                    ? Colors.indigo.shade900.withOpacity(0.5)
                    : Colors.indigo.shade100,
                borderRadius: BorderRadius.circular(30),
              ),
              child: Text(
                'PASSIVE CRYPTO TRADING',
                style: TextStyle(
                  fontSize: 12,
                  fontWeight: FontWeight.w500,
                  color: isDark ? Colors.indigo.shade300 : Colors.indigo.shade800,
                ),
              ),
            ),
          ),
        );
      },
    );
  }
} 