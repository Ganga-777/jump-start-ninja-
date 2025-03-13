import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/colors';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'light' | 'dark';
  showTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'medium', 
  color = 'dark',
  showTagline = true
}) => {
  const blueColor = '#0099FF'; // Bright blue for JUMP and NINJA
  const orangeColor = Colors.primary.main; // Orange for START
  const taglineColor = color === 'light' ? 'rgba(255, 255, 255, 0.9)' : Colors.text.secondary;
  
  return (
    <View style={styles.container}>
      <View style={styles.logoTextContainer}>
        <Text style={[
          styles.text, 
          size === 'small' && styles.smallText,
          size === 'medium' && styles.mediumText,
          size === 'large' && styles.largeText,
          { color: blueColor }
        ]}>
          JUMP<Text style={{ color: orangeColor }}>START</Text>NINJA
        </Text>
      </View>
      
      {showTagline && (
        <Text style={[
          styles.tagline,
          size === 'small' && styles.smallTagline,
          size === 'medium' && styles.mediumTagline,
          size === 'large' && styles.largeTagline,
          { color: taglineColor }
        ]}>
          Your Digital Transformation Partner
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  smallText: {
    fontSize: 16,
  },
  mediumText: {
    fontSize: 20,
  },
  largeText: {
    fontSize: 28,
  },
  tagline: {
    letterSpacing: 0.5,
  },
  smallTagline: {
    fontSize: 10,
    marginTop: 2,
  },
  mediumTagline: {
    fontSize: 12,
    marginTop: 3,
  },
  largeTagline: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default Logo;