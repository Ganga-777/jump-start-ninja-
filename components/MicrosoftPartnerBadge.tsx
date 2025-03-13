import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/colors';

const MicrosoftPartnerBadge: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={[styles.square, { backgroundColor: Colors.microsoft.red }]} />
        <View style={[styles.square, { backgroundColor: Colors.microsoft.green }]} />
        <View style={[styles.square, { backgroundColor: Colors.microsoft.blue }]} />
        <View style={[styles.square, { backgroundColor: Colors.microsoft.yellow }]} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.microsoftText}>Microsoft</Text>
        <Text style={styles.partnerText}>Gold Partner</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.neutral.white,
    borderRadius: 8,
    padding: 12,
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 40,
    height: 40,
    marginRight: 12,
  },
  square: {
    width: 18,
    height: 18,
    margin: 1,
  },
  textContainer: {
    flexDirection: 'column',
  },
  microsoftText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text.primary,
  },
  partnerText: {
    fontSize: 14,
    color: Colors.text.secondary,
  },
});

export default MicrosoftPartnerBadge;