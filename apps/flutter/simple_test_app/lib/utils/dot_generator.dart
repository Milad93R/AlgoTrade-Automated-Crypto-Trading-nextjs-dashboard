import 'dart:math';

class DotGenerator {
  static List<Map<String, dynamic>> generateFloatingDots({int count = 20}) {
    final random = Random();
    final List<Map<String, dynamic>> dots = [];
    
    for (int i = 0; i < count; i++) {
      dots.add({
        'id': i,
        'size': random.nextDouble() * 8 + 2,
        'x': random.nextDouble() * 100,
        'y': random.nextDouble() * 100,
        'delay': random.nextDouble() * 2,
        'duration': random.nextDouble() * 4 + 3,
        'opacity': 0.3 + random.nextDouble() * 0.4,
      });
    }
    
    return dots;
  }
} 