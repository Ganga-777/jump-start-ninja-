import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TeamMemberCard from '@/components/TeamMemberCard';
import MicrosoftPartnerBadge from '@/components/MicrosoftPartnerBadge';
import Colors from '@/constants/colors';
import team from '@/constants/team';
import { globalStyles } from '@/styles/_index.styles';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>About Us</Text>
          <Text style={styles.headerSubtitle}>
            Your partner in digital transformation
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.paragraph}>
            To create an impact in the Digital Transformation journey of every business by solving their complex problems using disruptive technologies like Cloud Computing, Artificial Intelligence, Data Analytics, and IoT.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Vision</Text>
          <View style={styles.visionItem}>
            <View style={styles.bulletPoint} />
            <Text style={styles.visionText}>
              Be the Digital Transformation Evangelists for our customers / Partners
            </Text>
          </View>
          <View style={styles.visionItem}>
            <View style={styles.bulletPoint} />
            <Text style={styles.visionText}>
              Be recognized for the Thought Leadership & Executive Presence in the fields of Cloud, AI, Data & IoT
            </Text>
          </View>
          <View style={styles.visionItem}>
            <View style={styles.bulletPoint} />
            <Text style={styles.visionText}>
              Be the preferred partner for customers looking for Innovative Solutions with Multinational Delivery Accelerators
            </Text>
          </View>
          <View style={styles.visionItem}>
            <View style={styles.bulletPoint} />
            <Text style={styles.visionText}>
              Be a Global Leader in Consumer Grade Cloud Native Solutions Powered by Microsoft Azure
            </Text>
          </View>
        </View>
        
        <View style={styles.expertiseSection}>
          <Text style={styles.sectionTitle}>Our Expertise</Text>
          <View style={styles.expertiseContent}>
            <MicrosoftPartnerBadge />
            <Text style={styles.expertiseText}>
              As a Microsoft Gold Partner, we have expertise in Azure AI, Data, IoT, SAP, and Power Apps, enabling us to deliver comprehensive solutions for your digital transformation needs.
            </Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Team</Text>
          <Text style={styles.teamIntro}>
            Our team is our core strength. Every day, we live by the DNA of our company - commitment towards work and responsibility towards success of our customers.
          </Text>
          
          {team.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </View>
        
        <View style={styles.locationsSection}>
          <Text style={styles.sectionTitle}>Our Locations</Text>
          <View style={styles.locationItem}>
            <Text style={styles.locationTitle}>Chennai, Tamil Nadu</Text>
            <Text style={styles.locationAddress}>
              123 Tech Park, Anna Salai, Chennai - 600001
            </Text>
          </View>
          <View style={styles.locationItem}>
            <Text style={styles.locationTitle}>Amaravati, Andhra Pradesh</Text>
            <Text style={styles.locationAddress}>
              456 Innovation Hub, Amaravati - 520001
            </Text>
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
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    color: Colors.text.secondary,
    lineHeight: 24,
  },
  visionItem: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  bulletPoint: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary.main,
    marginTop: 8,
    marginRight: 12,
  },
  visionText: {
    flex: 1,
    fontSize: 16,
    color: Colors.text.secondary,
    lineHeight: 24,
  },
  expertiseSection: {
    padding: 20,
    backgroundColor: Colors.neutral.lightGray,
  },
  expertiseContent: {
    alignItems: 'center',
  },
  expertiseText: {
    fontSize: 16,
    color: Colors.text.secondary,
    lineHeight: 24,
    marginTop: 16,
    textAlign: 'center',
  },
  teamIntro: {
    fontSize: 16,
    color: Colors.text.secondary,
    lineHeight: 24,
    marginBottom: 20,
  },
  locationsSection: {
    padding: 20,
    backgroundColor: Colors.neutral.lightGray,
  },
  locationItem: {
    marginBottom: 16,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: 4,
  },
  locationAddress: {
    fontSize: 16,
    color: Colors.text.secondary,
    lineHeight: 22,
  },
});