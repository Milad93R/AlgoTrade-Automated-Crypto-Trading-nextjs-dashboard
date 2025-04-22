import 'package:flutter/material.dart';

class HeroAnimationControllers {
  final AnimationController pulseController;
  final AnimationController floatController;
  final AnimationController shimmerController;

  HeroAnimationControllers({
    required TickerProvider vsync,
  }) : 
    pulseController = AnimationController(
      vsync: vsync,
      duration: const Duration(seconds: 3),
    )..repeat(reverse: true),
    floatController = AnimationController(
      vsync: vsync,
      duration: const Duration(seconds: 5),
    )..repeat(reverse: true),
    shimmerController = AnimationController(
      vsync: vsync,
      duration: const Duration(seconds: 2),
    )..repeat(reverse: false);

  void dispose() {
    pulseController.dispose();
    floatController.dispose();
    shimmerController.dispose();
  }
} 