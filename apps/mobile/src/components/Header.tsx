import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>AtVest</Text>
      <View style={styles.liveBadge}>
        <View style={styles.liveIndicator} />
        <Text style={styles.liveText}>LIVE</Text>
      </View>
    </View>
  );
}; 