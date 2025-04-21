import React, { useEffect, useRef } from 'react';
import { Text, TouchableOpacity, Animated, Easing } from 'react-native';
import { styles } from '../styles/styles';

type PulsatingButtonProps = {
  title: string;
  onPress: () => void;
  style?: any;
  textStyle?: any;
  delay?: number;
};

export const PulsatingButton = ({ 
  title, 
  onPress, 
  style, 
  textStyle,
  delay = 600 
}: PulsatingButtonProps) => {
  // Animation values
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.95)).current;
  const shadowOpacity = useRef(new Animated.Value(0.2)).current;
  
  // Animation for pulsating effect
  const startPulseAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.03,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.sin),
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.sin),
        }),
      ])
    ).start();
    
    // Shadow animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(shadowOpacity, {
          toValue: 0.4,
          duration: 1000,
          useNativeDriver: false,
          easing: Easing.inOut(Easing.sin),
        }),
        Animated.timing(shadowOpacity, {
          toValue: 0.2,
          duration: 1000,
          useNativeDriver: false,
          easing: Easing.inOut(Easing.sin),
        }),
      ])
    ).start();
  };
  
  // Initial appearance animation
  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      startPulseAnimation();
    });
  }, []);

  return (
    <Animated.View
      style={{
        opacity,
        transform: [{ scale }],
        shadowOpacity,
        shadowColor: '#4338ca',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 5,
        width: '100%',
      }}
    >
      <TouchableOpacity
        style={[styles.primaryButton, style]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}; 