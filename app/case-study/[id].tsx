import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, CheckCircle } from 'lucide-react-native';
import Colors from '@/constants/colors';
import caseStudies from '@/constants/caseStudies';
import { globalStyles } from '@/styles/_index.styles';

export default function CaseStudyDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  
  const caseStudy = caseStudies.find(cs => cs.id === id);
  
  if (!caseStudy) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Case study not found</Text>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Stack.Screen 
        options={{
          title: 'Case Study',
          headerStyle: {
            backgroundColor: Colors.primary.main,
          },
          headerTintColor: Colors.neutral.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
      />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image 
          source={{ uri: caseStudy.imageUrl }} 
          style={styles.image} 
          resizeMode="cover"
        />
        
        <View style={styles.content}>
          <Text style={styles.title}>{caseStudy.title}</Text>
          
          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Client:</Text>
              <Text style={styles.metaValue}>{caseStudy.client}</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Industry:</Text>
              <Text style={styles.metaValue}>{caseStudy.industry}</Text>
            </View>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Challenge</Text>
            <Text style={styles.sectionText}>{caseStudy.challenge}</Text>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Solution</Text>
            <Text style={styles.sectionText}>{caseStudy.solution}</Text>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Results</Text>
            {caseStudy.results.map((result, index) => (
              <View key={index} style={styles.resultItem}>
                <CheckCircle size={20} color={Colors.primary.main} style={styles.resultIcon} />
                <Text style={styles.resultText}>{result}</Text>
              </View>
            ))}
          </View>
          
          <View style={styles.ctaContainer}>
            <TouchableOpacity 
              style={styles.ctaButton}
              onPress={() => router.push('/contact')}
              activeOpacity={0.8}
            >
              <Text style={styles.ctaButtonText}>Discuss Your Project</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral.white,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: Colors.text.secondary,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: Colors.primary.main,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  backButtonText: {
    color: Colors.neutral.white,
    fontSize: 16,
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 16,
  },
  metaContainer: {
    marginBottom: 20,
  },
  metaItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  metaLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text.primary,
    width: 80,
  },
  metaValue: {
    fontSize: 16,
    color: Colors.text.secondary,
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 16,
    color: Colors.text.secondary,
    lineHeight: 24,
  },
  resultItem: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  resultIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  resultText: {
    flex: 1,
    fontSize: 16,
    color: Colors.text.secondary,
    lineHeight: 24,
  },
  ctaContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  ctaButton: {
    backgroundColor: Colors.primary.main,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: Colors.neutral.white,
    fontSize: 16,
    fontWeight: '600',
  },
});