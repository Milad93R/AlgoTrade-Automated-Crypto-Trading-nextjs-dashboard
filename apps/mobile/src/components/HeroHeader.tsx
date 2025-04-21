import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

type HeroHeaderProps = {
  onMenuPress?: () => void;
};

export const HeroHeader = ({ onMenuPress }: HeroHeaderProps) => {
  return (
    <View style={styles.heroHeader}>
      <Text style={styles.heroLogo}>AtVest</Text>
      <View style={styles.iconCircle}>
        <Text>≡</Text>
      </View>
    </View>
  );
}; 