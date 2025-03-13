import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowRight } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import ServiceCard from '@/components/ServiceCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import MicrosoftPartnerBadge from '@/components/MicrosoftPartnerBadge';
import StatCard from '@/components/StatCard';
import Colors from '@/constants/colors';
import services from '@/constants/services';
import caseStudies from '@/constants/caseStudies';
import { globalStyles } from '@/styles/_index.styles';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header height={250}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Your Digital Transformation Partner</Text>
            <Text style={styles.headerSubtitle}>
              Solving complex problems with disruptive technologies
            </Text>
            <TouchableOpacity 
              style={styles.headerButton}
              onPress={() => router.push('/contact')}
              activeOpacity={0.8}
            >
              <Text style={styles.headerButtonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </Header>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Our Services</Text>
            <TouchableOpacity 
              style={styles.viewAllButton}
              onPress={() => router.push('/services')}
            >
              <Text style={styles.viewAllText}>View All</Text>
              <ArrowRight size={16} color={Colors.primary.main} />
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.servicesScrollContainer}
          >
            {services.map(service => (
              <ServiceCard key={service.id} service={service} compact />
            ))}
          </ScrollView>
        </View>

        <View style={styles.statsSection}>
          <Text style={styles.statsSectionTitle}>Trusted by Businesses</Text>
          <View style={styles.statsContainer}>
            <StatCard value="110+" label="Projects Completed" />
            <StatCard value="52+" label="Happy Clients" />
            <StatCard value="30+" label="Team Members" />
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Success Stories</Text>
            <TouchableOpacity 
              style={styles.viewAllButton}
              onPress={() => router.push('/case-studies')}
            >
              <Text style={styles.viewAllText}>View All</Text>
              <ArrowRight size={16} color={Colors.primary.main} />
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.caseStudiesScrollContainer}
          >
            {caseStudies.map(caseStudy => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} compact />
            ))}
          </ScrollView>
        </View>

        <View style={styles.partnerSection}>
          <Text style={styles.partnerTitle}>Our Expertise</Text>
          <MicrosoftPartnerBadge />
          <Text style={styles.partnerText}>
            As a Microsoft Gold Partner, we have expertise in Azure AI, Data, IoT, SAP, and Power Apps.
          </Text>
          <TouchableOpacity 
            style={styles.learnMoreButton}
            onPress={() => router.push('/about')}
            activeOpacity={0.8}
          >
            <Text style={styles.learnMoreButtonText}>Learn More About Us</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Transform Your Business?</Text>
          <Text style={styles.ctaText}>
            Let's discuss how we can help you solve complex problems and drive digital innovation.
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
  headerContent: {
    alignItems: 'center',
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.neutral.white,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.neutral.white,
    textAlign: 'center',
    marginBottom: 24,
    opacity: 0.9,
  },
  headerButton: {
    backgroundColor: Colors.neutral.white,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  headerButtonText: {
    color: Colors.primary.main,
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary.main,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 14,
    color: Colors.primary.main,
    marginRight: 4,
  },
  servicesScrollContainer: {
    paddingRight: 20,
  },
  caseStudiesScrollContainer: {
    paddingRight: 20,
  },
  statsSection: {
    backgroundColor: Colors.neutral.lightGray,
    padding: 20,
  },
  statsSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 16,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  partnerSection: {
    padding: 20,
    alignItems: 'center',
  },
  partnerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 16,
    textAlign: 'center',
  },
  partnerText: {
    fontSize: 16,
    color: Colors.text.secondary,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 24,
    lineHeight: 22,
  },
  learnMoreButton: {
    backgroundColor: Colors.secondary.main,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  learnMoreButtonText: {
    color: Colors.neutral.white,
    fontSize: 16,
    fontWeight: '600',
  },
  ctaSection: {
    backgroundColor: Colors.primary.main,
    padding: 24,
    alignItems: 'center',
    marginTop: 20,
  },
  ctaTitle: {
    fontSize: 22,
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