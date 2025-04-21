import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

type FadeInViewProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  style?: any;
};

export const FadeInView = ({ 
  children, 
  delay = 0, 
  duration = 500, 
  style 
}: FadeInViewProps) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        {
          opacity,
          transform: [{ translateY }],
        },
        style,
      ]}
    >
      {children}
    </Animated.View>
  );
}; 