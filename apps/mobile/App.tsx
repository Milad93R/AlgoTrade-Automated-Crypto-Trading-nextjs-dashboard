import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Define our screens
type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Home Screen component
function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>AtVest</Text>
        <View style={styles.liveBadge}>
          <View style={styles.liveIndicator} />
          <Text style={styles.liveText}>LIVE</Text>
        </View>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.badge}>CRYPTO TRADING</Text>
        <Text style={styles.title}>AtVest Mobile</Text>
        <Text style={styles.subtitle}>
          Welcome to the AtVest crypto trading application
        </Text>
        
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={styles.buttonText}>Go to Details</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// Details Screen component
function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.subtitle}>This is a simple details screen</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>200%+</Text>
          <Text style={styles.statLabel}>Annual Return</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statValue}>90%</Text>
          <Text style={styles.statLabel}>Profit Share</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statValue}>24/7</Text>
          <Text style={styles.statLabel}>Trading</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// Workaround for TypeScript issues with React Navigation
const NavigationContainerComponent = NavigationContainer as any;
const StackNavigatorComponent = Stack.Navigator as any;
const StackScreenComponent = Stack.Screen as any;

export default function App() {
  return (
    <NavigationContainerComponent>
      <StackNavigatorComponent initialRouteName="Home">
        <StackScreenComponent 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'AtVest Home' }}
        />
        <StackScreenComponent 
          name="Details" 
          component={DetailsScreen}
          options={{ title: 'Details' }}
        />
      </StackNavigatorComponent>
    </NavigationContainerComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4f46e5',
  },
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ecfdf5',
    borderRadius: 9999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  liveIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10b981',
    marginRight: 6,
  },
  liveText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#059669',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    backgroundColor: '#eef2ff',
    color: '#4f46e5',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 9999,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 24,
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: '#4f46e5',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
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
