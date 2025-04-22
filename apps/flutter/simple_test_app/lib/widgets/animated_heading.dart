import 'package:flutter/material.dart';
import 'passive_income_text.dart';

class AnimatedHeading extends StatelessWidget {
  final bool isDark;
  final AnimationController shimmerController;
  
  const AnimatedHeading({
    super.key,
    required this.isDark,
    required this.shimmerController,
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
            child: Column(
              children: [
                RichText(
                  textAlign: TextAlign.center,
                  text: TextSpan(
                    style: TextStyle(
                      fontSize: 32,
                      fontWeight: FontWeight.bold,
                      height: 1.2,
                      color: isDark ? Colors.white : Colors.black,
                    ),
                    children: [
                      const TextSpan(text: 'Earn '),
                      WidgetSpan(
                        child: PassiveIncomeText(
                          isDark: isDark,
                          shimmerController: shimmerController,
                        ),
                      ),
                    ],
                  ),
                ),
                Text(
                  'With Our Automated Trading',
                  style: TextStyle(
                    fontSize: 32,
                    fontWeight: FontWeight.bold,
                    color: isDark ? Colors.white : Colors.black,
                  ),
                  textAlign: TextAlign.center,
                ),
              ],
            ),
          ),
        );
      },
    );
  }
} 