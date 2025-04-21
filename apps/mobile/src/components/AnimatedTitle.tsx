import React, { useEffect, useRef } from 'react';
import { Text, Animated, View } from 'react-native';
import { styles } from '../styles/styles';

type AnimatedTitleProps = {
  mainText: string;
  highlightedText: string;
  endText: string;
};

export const AnimatedTitle = ({ mainText, highlightedText, endText }: AnimatedTitleProps) => {
  // Animation values
  const opacityMain = useRef(new Animated.Value(0)).current;
  const opacityHighlight = useRef(new Animated.Value(0)).current;
  const opacityEnd = useRef(new Animated.Value(0)).current;
  
  const translateMain = useRef(new Animated.Value(20)).current;
  const translateHighlight = useRef(new Animated.Value(20)).current;
  const translateEnd = useRef(new Animated.Value(20)).current;
  
  useEffect(() => {
    // Staggered animation for title parts
    Animated.stagger(200, [
      Animated.parallel([
        Animated.timing(opacityMain, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(translateMain, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(opacityHighlight, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(translateHighlight, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(opacityEnd, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(translateEnd, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Animated.Text
        style={[
          styles.heroTitle,
          {
            opacity: opacityMain,
            transform: [{ translateY: translateMain }],
            marginBottom: 0,
            marginRight: 5,
          },
        ]}
      >
        {mainText}
      </Animated.Text>
      
      <Animated.Text
        style={[
          styles.heroTitle,
          styles.highlightedText,
          {
            opacity: opacityHighlight,
            transform: [{ translateY: translateHighlight }],
            marginBottom: 0,
            marginRight: 5,
          },
        ]}
      >
        {highlightedText}
      </Animated.Text>
      
      <Animated.Text
        style={[
          styles.heroTitle,
          {
            opacity: opacityEnd,
            transform: [{ translateY: translateEnd }],
            marginBottom: 16,
          },
        ]}
      >
        {endText}
      </Animated.Text>
    </View>
  );
}; 