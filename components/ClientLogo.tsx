import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Colors from '@/constants/colors';
import type { Client } from '@/constants/clients';

interface ClientLogoProps {
  client: Client;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ client }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: client.logo }} 
        style={styles.logo} 
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 8,
    padding: 12,
    margin: 8,
    width: 120,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});

export default ClientLogo;