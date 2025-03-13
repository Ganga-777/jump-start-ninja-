import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Phone, Mail, Globe } from 'lucide-react-native';
import ContactForm from '@/components/ContactForm';
import Colors from '@/constants/colors';
import { globalStyles } from '@/styles/_index.styles';

export default function ContactScreen() {
  const handleEmailPress = () => {
    Linking.openURL('mailto:info@jumpstartninja.ai');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+919876543210');
  };

  const handleWebsitePress = () => {
    Linking.openURL('https://jumpstartninja.ai');
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Contact Us</Text>
          <Text style={styles.headerSubtitle}>
            We'd love to hear from you. Get in touch with us.
          </Text>
        </View>
        
        <View style={styles.section}>
          <ContactForm />
        </View>
        
        <View style={styles.contactInfoSection}>
          <Text style={styles.sectionTitle}>Our Contact Information</Text>
          
          <View style={styles.contactItem}>
            <View style={styles.iconContainer}>
              <MapPin size={24} color={Colors.primary.main} />
            </View>
            <View style={styles.contactTextContainer}>
              <Text style={styles.contactLabel}>Chennai Office</Text>
              <Text style={styles.contactText}>
                123 Tech Park, Anna Salai, Chennai - 600001, Tamil Nadu, India
              </Text>
            </View>
          </View>
          
          <View style={styles.contactItem}>
            <View style={styles.iconContainer}>
              <MapPin size={24} color={Colors.primary.main} />
            </View>
            <View style={styles.contactTextContainer}>
              <Text style={styles.contactLabel}>Amaravati Office</Text>
              <Text style={styles.contactText}>
                456 Innovation Hub, Amaravati - 520001, Andhra Pradesh, India
              </Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.contactItem} onPress={handlePhonePress}>
            <View style={styles.iconContainer}>
              <Phone size={24} color={Colors.primary.main} />
            </View>
            <View style={styles.contactTextContainer}>
              <Text style={styles.contactLabel}>Phone</Text>
              <Text style={styles.contactText}>+91 98765 43210</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.contactItem} onPress={handleEmailPress}>
            <View style={styles.iconContainer}>
              <Mail size={24} color={Colors.primary.main} />
            </View>
            <View style={styles.contactTextContainer}>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactText}>info@jumpstartninja.ai</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.contactItem} onPress={handleWebsitePress}>
            <View style={styles.iconContainer}>
              <Globe size={24} color={Colors.primary.main} />
            </View>
            <View style={styles.contactTextContainer}>
              <Text style={styles.contactLabel}>Website</Text>
              <Text style={styles.contactText}>www.jumpstartninja.ai</Text>
            </View>
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
    marginBottom: 20,
  },
  contactInfoSection: {
    padding: 20,
    backgroundColor: Colors.neutral.lightGray,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.neutral.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  contactTextContainer: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: 4,
  },
  contactText: {
    fontSize: 14,
    color: Colors.text.secondary,
    lineHeight: 20,
  },
});