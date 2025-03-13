import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ServiceCard from '@/components/ServiceCard';
import Colors from '@/constants/colors';
import services from '@/constants/services';
import { globalStyles } from '@/styles/_index.styles';

export default function ServicesScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Our Services</Text>
        <Text style={styles.headerSubtitle}>
          Comprehensive solutions to drive your digital transformation journey
        </Text>
      </View>
      
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ServiceCard service={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral.white,
  },
  header: {
    backgroundColor: Colors.primary.main,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.neutral.white,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.neutral.white,
    opacity: 0.9,
    lineHeight: 22,
  },
  listContainer: {
    padding: 16,
  },
});