import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import { styles } from '../styles/styles';

type AnimatedCardProps = {
  value: string;
  label: string;
  iconName: string;
  delay?: number;
};

export const AnimatedCard = ({ value, label, iconName, delay = 0 }: AnimatedCardProps) => {
  // Use first letter of iconName to display in the icon circle
  const iconLetter = iconName.charAt(0).toUpperCase();
  
  // Animation values
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;
  const scale = useRef(new Animated.Value(0.9)).current;
  
  useEffect(() => {
    // Start animations after delay
    Animated.sequence([
      Animated.delay(delay),
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
      ]),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.heroCard,
        {
          opacity,
          transform: [
            { translateY },
            { scale }
          ],
        },
      ]}
    >
      <View style={styles.heroCardIcon}>
        <Text style={{ fontSize: 24, color: '#4f46e5' }}>{iconLetter}</Text>
      </View>
      <View style={styles.heroCardContent}>
        <Text style={styles.heroCardValue}>{value}</Text>
        <Text style={styles.heroCardLabel}>{label}</Text>
      </View>
    </Animated.View>
  );
}; 