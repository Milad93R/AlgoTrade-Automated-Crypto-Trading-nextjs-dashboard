import 'package:flutter/material.dart';

class ScrollIndicator extends StatelessWidget {
  final bool isDark;
  final AnimationController scrollIndicatorController;
  
  const ScrollIndicator({
    super.key,
    required this.isDark,
    required this.scrollIndicatorController,
  });

  @override
  Widget build(BuildContext context) {
    return TweenAnimationBuilder<double>(
      tween: Tween(begin: 0.0, end: 1.0),
      duration: const Duration(milliseconds: 600),
      builder: (context, value, child) {
        return Opacity(
          opacity: value,
          child: Container(
            width: 24,
            height: 40,
            decoration: BoxDecoration(
              border: Border.all(
                color: Colors.grey.withOpacity(0.2),
                width: 2,
              ),
              borderRadius: BorderRadius.circular(16),
            ),
            child: Center(
              child: AnimatedBuilder(
                animation: scrollIndicatorController,
                builder: (context, child) {
                  return Transform.translate(
                    offset: Offset(0, 10 * scrollIndicatorController.value),
                    child: Container(
                      width: 4,
                      height: 8,
                      decoration: BoxDecoration(
                        color: isDark
                            ? Colors.indigo.shade400
                            : Colors.indigo.shade600,
                        borderRadius: BorderRadius.circular(3),
                      ),
                    ),
                  );
                },
              ),
            ),
          ),
        );
      },
    );
  }
} 