import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from '../styles/styles';
import { RootStackParamList } from '../navigation/types';
import { AnimatedTitle } from '../components/AnimatedTitle';
import { FadeInView } from '../components/FadeInView';
import GradientBackground from '../components/GradientBackground';

type HeroScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Hero'>;
};

export const HeroScreen = ({ navigation }: HeroScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f172a' }}>
      <StatusBar style="light" />
      
      {/* Custom background with chart-like pattern */}
      <GradientBackground />
      
      <ScrollView 
        style={styles.heroContainer} 
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroContent}>
          <FadeInView delay={100}>
            <View style={styles.tagLine}>
              <Text style={styles.tagLineText}>INVEST SMARTER</Text>
            </View>
          </FadeInView>
          
          <AnimatedTitle 
            mainText="Earn"
            highlightedText="Passive Income"
            endText="With Crypto Trading"
          />
          
          <FadeInView delay={500}>
            <Text style={[styles.heroDescription, { color: '#e2e8f0' }]}>
              Our proven strategy has generated{' '}
              <Text style={{fontWeight: 'bold', color: '#a5b4fc'}}>200%+ annual returns</Text>. 
              Invest today and keep 90% of all profits while we do all the work.
            </Text>
          </FadeInView>
          
          {/* Featured Image */}
          <FadeInView delay={600} style={styles.heroImageContainer}>
            <View 
              style={{ 
                width: '100%', 
                height: '100%', 
                backgroundColor: '#6366f1', 
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                Crypto Trading Dashboard
              </Text>
            </View>
          </FadeInView>
          
          {/* Trust Badge */}
          <FadeInView delay={700}>
            <View style={styles.trustBadge}>
              <Text style={[styles.trustBadgeText, { color: '#a5b4fc' }]}>TRUSTED BY INVESTORS WORLDWIDE</Text>
            </View>
          </FadeInView>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.primaryButton}
              onPress={() => navigation.navigate('Home')}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Start Investing Today</Text>
            </TouchableOpacity>
            
            <FadeInView delay={900}>
              <TouchableOpacity 
                style={styles.secondaryButton}
                onPress={() => navigation.navigate('Details')}
                activeOpacity={0.7}
              >
                <Text style={styles.secondaryButtonText}>See How It Works</Text>
              </TouchableOpacity>
            </FadeInView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}; 