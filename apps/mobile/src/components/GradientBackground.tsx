import React from 'react';
import { View, StyleSheet } from 'react-native';

const GradientBackground = () => {
  return (
    <View style={styles.container}>
      {/* Rising curved chart lines */}
      <View style={styles.curveContainer}>
        {/* Main curve */}
        <View style={styles.mainCurve} />
        
        {/* Secondary curves */}
        <View style={[styles.curve, { bottom: '30%', opacity: 0.5, transform: [{ scaleY: 0.85 }] }]} />
        <View style={[styles.curve, { bottom: '20%', opacity: 0.3, transform: [{ scaleY: 0.7 }] }]} />
        <View style={[styles.curve, { bottom: '10%', opacity: 0.15, transform: [{ scaleY: 0.5 }] }]} />
      </View>

      {/* Highlight data points on main curve */}
      <View style={[styles.dataPoint, { bottom: '47%', left: '15%' }]} />
      <View style={[styles.dataPoint, { bottom: '52%', left: '28%' }]} />
      <View style={[styles.dataPoint, { bottom: '49%', left: '43%' }]} />
      <View style={[styles.dataPoint, { bottom: '58%', left: '60%' }]} />
      <View style={[styles.dataPoint, { bottom: '64%', left: '75%' }]} />
      <View style={[styles.dataPoint, { bottom: '72%', left: '88%' }]} />
      
      {/* Background gradient circles for depth */}
      <View style={[styles.gradientCircle, { top: '10%', left: '15%', width: 150, height: 150 }]} />
      <View style={[styles.gradientCircle, { top: '40%', right: '10%', width: 200, height: 200 }]} />
      <View style={[styles.gradientCircle, { bottom: '10%', left: '30%', width: 180, height: 180 }]} />
      <View style={[styles.gradientCircle, { bottom: '25%', right: '20%', width: 120, height: 120, opacity: 0.15 }]} />
      
      {/* Grid pattern overlay */}
      <View style={styles.gridContainer}>
        {Array(12).fill(0).map((_, i) => (
          <View key={`h-${i}`} style={[styles.gridLine, { top: `${i * 8.33}%`, width: '100%', height: 1 }]} />
        ))}
        {Array(12).fill(0).map((_, i) => (
          <View key={`v-${i}`} style={[styles.gridLine, { left: `${i * 8.33}%`, width: 1, height: '100%' }]} />
        ))}
      </View>
      
      {/* Small data points */}
      {Array(20).fill(0).map((_, i) => (
        <View 
          key={`data-${i}`} 
          style={[
            styles.smallDataPoint, 
            { 
              top: `${20 + Math.random() * 60}%`, 
              left: `${5 + Math.random() * 90}%`
            }
          ]} 
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0f172a', // Dark slate blue background
    opacity: 0.95,
    overflow: 'hidden',
  },
  curveContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  mainCurve: {
    position: 'absolute',
    height: 120,
    width: '200%',
    bottom: '38%',
    left: '-50%',
    backgroundColor: 'transparent',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderWidth: 3,
    borderColor: 'rgba(129, 140, 248, 0.9)', // Indigo-400
    borderBottomWidth: 0,
    transform: [
      { scaleX: 1.5 },
      { scaleY: 1.2 },
      { translateY: -40 },
    ],
  },
  curve: {
    position: 'absolute',
    height: 100,
    width: '200%',
    left: '-50%',
    backgroundColor: 'transparent',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderWidth: 2,
    borderColor: 'rgba(99, 102, 241, 0.7)', // Indigo-500
    borderBottomWidth: 0,
    transform: [
      { scaleX: 1.5 },
      { scaleY: 1 },
      { translateY: -30 },
    ],
  },
  dataPoint: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#818cf8', // Indigo-400
    shadowColor: '#c7d2fe', // Indigo-200
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
    zIndex: 2,
  },
  smallDataPoint: {
    position: 'absolute',
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: 'rgba(165, 180, 252, 0.7)', // Indigo-300 with transparency
    opacity: 0.6,
  },
  gradientCircle: {
    position: 'absolute',
    borderRadius: 100,
    backgroundColor: 'rgba(99, 102, 241, 0.07)', // Indigo-500 with high transparency
    opacity: 0.25,
  },
  gridContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.08,
  },
  gridLine: {
    position: 'absolute',
    backgroundColor: 'rgba(224, 231, 255, 0.3)', // Indigo-100 with transparency
  },
});

export default GradientBackground; 