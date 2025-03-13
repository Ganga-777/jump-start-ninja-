import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Check } from 'lucide-react-native';
import Colors from '@/constants/colors';
import services from '@/constants/services';
import { globalStyles } from '@/styles/_index.styles';

export default function ServiceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  
  const service = services.find(s => s.id === id);
  
  if (!service) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Service not found</Text>
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
          title: service.title,
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
        <View style={styles.section}>
          <Text style={styles.description}>{service.longDescription}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Benefits</Text>
          {service.benefits.map((benefit, index) => (
            <View key={index} style={styles.benefitItem}>
              <View style={styles.checkContainer}>
                <Check size={16} color={Colors.neutral.white} />
              </View>
              <Text style={styles.benefitText}>{benefit}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technologies</Text>
          <View style={styles.technologiesContainer}>
            {service.technologies.map((tech, index) => (
              <View key={index} style={styles.technologyTag}>
                <Text style={styles.technologyText}>{tech}</Text>
              </View>
            ))}
          </View>
        </View>
        
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to get started?</Text>
          <Text style={styles.ctaText}>
            Contact us to discuss how our {service.title.toLowerCase()} services can benefit your business.
          </Text>
          <TouchableOpacity 
            style={styles.ctaButton}
            onPress={() => router.push('/contact')}
            activeOpacity={0.8}
          >
            <Text style={styles.ctaButtonText}>Contact Us</Text>
          </TouchableOpacity>
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
  section: {
    padding: 20,
  },
  description: {
    fontSize: 16,
    color: Colors.text.secondary,
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 16,
  },
  benefitItem: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  checkContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  benefitText: {
    flex: 1,
    fontSize: 16,
    color: Colors.text.secondary,
    lineHeight: 24,
  },
  technologiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  technologyTag: {
    backgroundColor: Colors.neutral.lightGray,
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 4,
  },
  technologyText: {
    fontSize: 14,
    color: Colors.text.secondary,
  },
  ctaSection: {
    backgroundColor: Colors.primary.main,
    padding: 24,
    alignItems: 'center',
    marginTop: 20,
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.neutral.white,
    marginBottom: 12,
    textAlign: 'center',
  },
  ctaText: {
    fontSize: 16,
    color: Colors.neutral.white,
    textAlign: 'center',
    marginBottom: 24,
    opacity: 0.9,
    lineHeight: 22,
  },
  ctaButton: {
    backgroundColor: Colors.neutral.white,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: Colors.primary.main,
    fontSize: 16,
    fontWeight: '600',
  },
});