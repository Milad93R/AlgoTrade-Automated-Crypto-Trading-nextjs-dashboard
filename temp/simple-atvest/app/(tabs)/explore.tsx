import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { View } from '@/components/RNElements';

export default function DetailsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Details Screen</ThemedText>
      <ThemedText style={styles.subtitle}>This is a simple details screen</ThemedText>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <ThemedText style={styles.statValue}>200%+</ThemedText>
          <ThemedText style={styles.statLabel}>Annual Return</ThemedText>
        </View>
        
        <View style={styles.statCard}>
          <ThemedText style={styles.statValue}>90%</ThemedText>
          <ThemedText style={styles.statLabel}>Profit Share</ThemedText>
        </View>
        
        <View style={styles.statCard}>
          <ThemedText style={styles.statValue}>24/7</ThemedText>
          <ThemedText style={styles.statLabel}>Trading</ThemedText>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 24,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 24,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: '100%',
  },
  statCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#4f46e5',
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
});
