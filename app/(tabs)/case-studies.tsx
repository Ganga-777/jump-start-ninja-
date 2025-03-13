import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CaseStudyCard from '@/components/CaseStudyCard';
import Colors from '@/constants/colors';
import caseStudies from '@/constants/caseStudies';
import { globalStyles } from '@/styles/_index.styles';

export default function CaseStudiesScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Case Studies</Text>
        <Text style={styles.headerSubtitle}>
          Success stories from our digital transformation projects
        </Text>
      </View>
      
      <FlatList
        data={caseStudies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CaseStudyCard caseStudy={item} />}
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