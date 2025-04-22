import 'package:flutter/material.dart';

class HowItWorksScreen extends StatelessWidget {
  final bool isDark;

  const HowItWorksScreen({super.key, required this.isDark});

  @override
  Widget build(BuildContext context) {
    final Color primaryTextColor = isDark ? Colors.white : Colors.grey.shade900;
    final Color secondaryTextColor = isDark ? Colors.grey.shade300 : Colors.grey.shade600;
    final Color cardBackgroundColor = isDark ? Colors.grey.shade800.withOpacity(0.7) : Colors.white;
    final Color chipBackgroundColor = isDark 
        ? Colors.indigo.shade900.withOpacity(0.5) 
        : Colors.indigo.shade100;
    final Color chipTextColor = isDark ? Colors.indigo.shade300 : Colors.indigo.shade800;
    
    return Container(
      // Add a subtle background gradient
      decoration: BoxDecoration(
        gradient: isDark
            ? LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [
                  Colors.grey.shade900,
                  Colors.indigo.shade900.withOpacity(0.5),
                ],
              )
            : LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [
                  Colors.indigo.shade50.withOpacity(0.5),
                  Colors.white,
                ],
              ),
      ),
      child: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 40.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const SizedBox(height: 40),
              
              // Heading Section
              Column(
                children: [
                  // Chip with process label
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 3),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(30),
                      boxShadow: [
                        BoxShadow(
                          color: isDark 
                              ? Colors.indigo.withOpacity(0.3) 
                              : Colors.indigo.withOpacity(0.2),
                          blurRadius: 20,
                          spreadRadius: 1,
                        ),
                      ],
                    ),
                    child: Chip(
                      label: Text(
                        'SIMPLE PROCESS', 
                        style: TextStyle(
                          color: chipTextColor, 
                          fontSize: 12, 
                          fontWeight: FontWeight.w600,
                          letterSpacing: 1,
                        ),
                      ),
                      backgroundColor: chipBackgroundColor,
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(20),
                      ),
                    ),
                  ),
                  
                  const SizedBox(height: 20),
                  
                  // Heading with gradient text
                  ShaderMask(
                    shaderCallback: (bounds) {
                      return LinearGradient(
                        colors: isDark 
                            ? [Colors.white, Colors.indigo.shade300]
                            : [Colors.indigo.shade900, Colors.indigo.shade500],
                      ).createShader(bounds);
                    },
                    child: Text(
                      'Three Simple Steps',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 32,
                        fontWeight: FontWeight.bold,
                        color: Colors.white, // This gets masked by shader
                      ),
                    ),
                  ),
                  
                  Text(
                    'to Start Earning',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 32,
                      fontWeight: FontWeight.bold,
                      color: primaryTextColor,
                    ),
                  ),
                  
                  const SizedBox(height: 12),
                  
                  Text(
                    'No trading experience required - our algorithm does all the work',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 16,
                      color: secondaryTextColor,
                      letterSpacing: 0.3,
                    ),
                  ),
                ],
              ),
              
              const SizedBox(height: 48),
              
              // Step Cards - No animations
              ...List.generate(3, (index) {
                final stepDetails = [
                  {
                    'number': '1',
                    'title': 'Sign Up & Connect',
                    'description': 'Create your account in minutes and securely connect your exchange API. Your funds remain in your own exchange account at all times.',
                    'icon': Icons.account_circle_outlined,
                    'gradient': [Colors.blue.shade700, Colors.indigo.shade500],
                  },
                  {
                    'number': '2',
                    'title': 'Algorithm Trades for You',
                    'description': 'Our rasta-trendier algorithm executes trades directly through your exchange account using read-only API access with sophisticated risk management.',
                    'badgeText': 'Fully automated',
                    'icon': Icons.trending_up_outlined,
                    'gradient': [Colors.purple.shade700, Colors.indigo.shade500],
                  },
                  {
                    'number': '3',
                    'title': 'Watch Your Profits Grow',
                    'description': 'Track performance in real-time while maintaining full control of your funds. You keep 90% of all profits with no lock-up periods or transfer delays.',
                    'badgeText': 'No hidden fees',
                    'icon': Icons.account_balance_wallet_outlined,
                    'gradient': [Colors.pink.shade700, Colors.purple.shade500],
                  },
                ][index];
                
                return Padding(
                  padding: const EdgeInsets.only(bottom: 20),
                  child: _buildStepCard(
                    isDark: isDark,
                    cardBackgroundColor: cardBackgroundColor,
                    primaryTextColor: primaryTextColor,
                    secondaryTextColor: secondaryTextColor,
                    number: stepDetails['number'] as String,
                    title: stepDetails['title'] as String,
                    description: stepDetails['description'] as String,
                    badgeText: stepDetails['badgeText'] as String?,
                    icon: stepDetails['icon'] as IconData,
                    gradient: stepDetails['gradient'] as List<Color>,
                  ),
                );
              }),
              
              const SizedBox(height: 40),
              
              // CTA Button without animation
              Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(30),
                  boxShadow: [
                    BoxShadow(
                      color: isDark 
                          ? Colors.indigo.withOpacity(0.3) 
                          : Colors.indigo.withOpacity(0.4),
                      blurRadius: 20,
                      spreadRadius: 1,
                    ),
                  ],
                  gradient: LinearGradient(
                    colors: isDark
                        ? [Colors.indigo.shade800, Colors.indigo.shade600]
                        : [Colors.indigo.shade600, Colors.indigo.shade400],
                  ),
                ),
                child: ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.transparent,
                    shadowColor: Colors.transparent,
                    padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(30),
                    ),
                  ),
                  child: const Text(
                    'Start Trading Now',
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
              
              const SizedBox(height: 40),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildStepCard({
    required bool isDark,
    required Color cardBackgroundColor,
    required Color primaryTextColor,
    required Color secondaryTextColor,
    required String number,
    required String title,
    required String description,
    String? badgeText,
    required IconData icon,
    required List<Color> gradient,
  }) {
    return Card(
      elevation: isDark ? 8 : 4,
      shadowColor: isDark 
          ? gradient[0].withOpacity(0.4) 
          : gradient[0].withOpacity(0.2),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
      color: cardBackgroundColor,
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(24),
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [
              isDark 
                  ? Colors.transparent
                  : gradient[1].withOpacity(0.05),
              cardBackgroundColor,
            ],
          ),
          border: Border.all(
            color: isDark 
                ? gradient[0].withOpacity(0.2) 
                : gradient[0].withOpacity(0.1),
            width: 1,
          ),
        ),
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Header Row
              Row(
                children: [
                  // Step Number Badge
                  Container(
                    width: 32,
                    height: 32,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: LinearGradient(
                        colors: gradient,
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                      ),
                      boxShadow: [
                        BoxShadow(
                          color: gradient[0].withOpacity(0.3),
                          blurRadius: 8,
                          spreadRadius: 0,
                          offset: const Offset(0, 2),
                        ),
                      ],
                    ),
                    child: Center(
                      child: Text(
                        number,
                        style: const TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                          color: Colors.white,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: 12),
                  
                  // Title with gradient touch
                  Expanded(
                    child: ShaderMask(
                      shaderCallback: (bounds) {
                        return LinearGradient(
                          colors: gradient,
                          begin: Alignment.centerLeft,
                          end: Alignment.centerRight,
                        ).createShader(bounds);
                      },
                      child: Text(
                        title,
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                          color: Colors.white, // This will be masked by the gradient
                        ),
                      ),
                    ),
                  ),
                  
                  // Icon
                  Container(
                    width: 44,
                    height: 44,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: isDark
                          ? gradient[0].withOpacity(0.15)
                          : gradient[0].withOpacity(0.1),
                    ),
                    child: Icon(
                      icon,
                      color: gradient[0],
                      size: 24,
                    ),
                  ),
                ],
              ),
              
              const SizedBox(height: 16),
              
              // Divider with gradient
              Container(
                height: 1,
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    colors: [
                      gradient[0].withOpacity(0.5),
                      gradient[1].withOpacity(0.2),
                      gradient[0].withOpacity(0),
                    ],
                  ),
                ),
              ),
              
              const SizedBox(height: 16),
              
              // Description with visual elements
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Vertical line with dot connectors
                  Column(
                    children: [
                      Container(
                        width: 2,
                        height: 80, // Adjust based on text length
                        decoration: BoxDecoration(
                          gradient: LinearGradient(
                            begin: Alignment.topCenter,
                            end: Alignment.bottomCenter,
                            colors: [
                              gradient[0],
                              gradient[1].withOpacity(0.3),
                            ],
                          ),
                          borderRadius: BorderRadius.circular(1),
                        ),
                      ),
                    ],
                  ),
                  
                  const SizedBox(width: 12),
                  
                  // Description text
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          description,
                          style: TextStyle(
                            fontSize: 15,
                            color: secondaryTextColor,
                            height: 1.5,
                            letterSpacing: 0.3,
                          ),
                        ),
                        
                        if (badgeText != null) ...[
                          const SizedBox(height: 16),
                          // Badge without animation
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(30),
                              gradient: LinearGradient(
                                colors: [
                                  gradient[0].withOpacity(0.2),
                                  gradient[1].withOpacity(0.1),
                                ],
                              ),
                              boxShadow: [
                                BoxShadow(
                                  color: gradient[0].withOpacity(0.2),
                                  blurRadius: 8,
                                  spreadRadius: -2,
                                ),
                              ],
                            ),
                            child: Row(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Icon(
                                  Icons.check_circle,
                                  color: gradient[0],
                                  size: 16,
                                ),
                                const SizedBox(width: 6),
                                Text(
                                  badgeText,
                                  style: TextStyle(
                                    color: gradient[0],
                                    fontWeight: FontWeight.w600,
                                    fontSize: 13,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ],
                    ),
                  ),
                ],
              ),
              
              // Optional learn more text
              Align(
                alignment: Alignment.centerRight,
                child: Padding(
                  padding: const EdgeInsets.only(top: 8.0),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(12),
                      color: isDark
                          ? Colors.transparent
                          : gradient[0].withOpacity(0.05),
                    ),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text(
                          'Learn more',
                          style: TextStyle(
                            fontSize: 12,
                            color: gradient[0],
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        const SizedBox(width: 4),
                        Icon(
                          Icons.arrow_forward_ios,
                          size: 10,
                          color: gradient[0],
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
} 