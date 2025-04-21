import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

// Using icon name strings directly to avoid dependency issues
type HeroCardProps = {
  value: string;
  label: string;
  iconName: string;
};

export const HeroCard = ({ value, label, iconName }: HeroCardProps) => {
  // Use first letter of iconName to display something in the icon circle
  const iconLetter = iconName.charAt(0).toUpperCase();

  return (
    <View style={styles.heroCard}>
      <View style={styles.heroCardIcon}>
        <Text style={{ fontSize: 24, color: '#4f46e5' }}>{iconLetter}</Text>
      </View>
      <View style={styles.heroCardContent}>
        <Text style={styles.heroCardValue}>{value}</Text>
        <Text style={styles.heroCardLabel}>{label}</Text>
      </View>
    </View>
  );
}; 