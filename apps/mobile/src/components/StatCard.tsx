import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

type StatCardProps = {
  value: string;
  label: string;
};

export const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}; 