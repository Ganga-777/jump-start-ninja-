import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from './Logo';
import Colors from '@/constants/colors';

interface HeaderProps {
  height?: number;
  showLogo?: boolean;
  showTagline?: boolean;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ 
  height = 200, 
  showLogo = true,
  showTagline = true,
  children 
}) => {
  return (
    <LinearGradient
      colors={[Colors.primary.main, Colors.primary.dark]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.container, { height }]}
    >
      <View style={styles.content}>
        {showLogo && <Logo size="large" color="light" showTagline={showTagline} />}
        {children}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default Header;