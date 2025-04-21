import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles/styles';
import { Header } from '../components/Header';
import { StatCard } from '../components/StatCard';

export const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.subtitle}>This is a simple details screen</Text>

      <View style={styles.statsContainer}>
        <StatCard value="200%+" label="Annual Return" />
        <StatCard value="90%" label="Profit Share" />
        <StatCard value="24/7" label="Trading" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}; 