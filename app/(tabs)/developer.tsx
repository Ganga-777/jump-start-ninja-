import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Code, ExternalLink } from 'lucide-react-native';
import Colors from '@/constants/colors';
import DeveloperResourceCard from '@/components/DeveloperResourceCard';
import developerResources from '@/constants/developerResources';
import { useAnalyticsStore } from '@/hooks/useAnalyticsStore';

export default function DeveloperScreen() {
  const { trackEvent, trackScreenView } = useAnalyticsStore();
  
  // Track screen view
  React.useEffect(() => {
    trackScreenView('Developer');
  }, []);
  
  const handleResourcePress = (resource) => {
    trackEvent('developer_resource_clicked', { 
      resource_id: resource.id,
      resource_type: resource.type
    });
    
    // In a real app, this would navigate to the resource page
    // For demo purposes, we'll show an alert
    Alert.alert(
      'Resource Access',
      `You're accessing: ${resource.title}`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Continue', 
          onPress: () => {
            // In a real app, this would open the resource
            // For demo, we'll simulate with a console log
            console.log(`Accessing resource: ${resource.title}`);
          }
        }
      ]
    );
  };
  
  const handleJoinCommunity = () => {
    trackEvent('join_developer_community_clicked');
    
    // In a real app, this would navigate to the community page or open an external link
    Alert.alert(
      'Join Developer Community',
      'Would you like to join our developer community on GitHub?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Join', 
          onPress: () => {
            // For demo purposes, we'll just log this action
            console.log('Joining developer community');
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Code size={32} color={Colors.neutral.white} style={styles.headerIcon} />
          <Text style={styles.headerTitle}>Developer Portal</Text>
          <Text style={styles.headerSubtitle}>
            Build and extend JumpStartNinja AI Hub with our developer tools and APIs
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Getting Started</Text>
          <Text style={styles.sectionDescription}>
            Welcome to the JumpStartNinja Developer Portal. Here you'll find all the resources you need to integrate with our platform and build custom solutions.
          </Text>
          
          <TouchableOpacity 
            style={styles.communityButton}
            onPress={handleJoinCommunity}
            activeOpacity={0.8}
          >
            <Text style={styles.communityButtonText}>Join Developer Community</Text>
            <ExternalLink size={16} color={Colors.neutral.white} style={styles.communityButtonIcon} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.resourcesSection}>
          <Text style={styles.sectionTitle}>Developer Resources</Text>
          
          {developerResources
            .filter(resource => resource.type === 'api' || resource.type === 'sdk')
            .map(resource => (
              <DeveloperResourceCard 
                key={resource.id} 
                resource={resource} 
                onPress={handleResourcePress}
              />
            ))}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Documentation</Text>
          
          {developerResources
            .filter(resource => resource.type === 'documentation')
            .map(resource => (
              <DeveloperResourceCard 
                key={resource.id} 
                resource={resource} 
                onPress={handleResourcePress}
              />
            ))}
        </View>
        
        <View style={styles.pluginsSection}>
          <Text style={styles.sectionTitle}>Plugin Development</Text>
          <Text style={styles.sectionDescription}>
            Extend the functionality of JumpStartNinja AI Hub by creating custom plugins.
          </Text>
          
          {developerResources
            .filter(resource => resource.type === 'plugin')
            .map(resource => (
              <DeveloperResourceCard 
                key={resource.id} 
                resource={resource} 
                onPress={handleResourcePress}
              />
            ))}
        </View>
        
        <View style={styles.supportSection}>
          <Text style={styles.supportTitle}>Need Help?</Text>
          <Text style={styles.supportDescription}>
            Our developer support team is here to help you with any questions or issues you may encounter.
          </Text>
          
          <View style={styles.supportOptions}>
            <TouchableOpacity 
              style={styles.supportButton}
              onPress={() => {
                trackEvent('developer_support_clicked', { type: 'documentation' });
                // Navigate to documentation in a real app
              }}
            >
              <Text style={styles.supportButtonText}>Browse Documentation</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.supportButton, styles.supportButtonSecondary]}
              onPress={() => {
                trackEvent('developer_support_clicked', { type: 'contact' });
                // Navigate to contact page in a real app
              }}
            >
              <Text style={[styles.supportButtonText, styles.supportButtonTextSecondary]}>
                Contact Support
              </Text>
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
  header: {
    backgroundColor: Colors.primary.main,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 30,
    alignItems: 'center',
  },
  headerIcon: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.neutral.white,
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.neutral.white,
    opacity: 0.9,
    textAlign: 'center',
    lineHeight: 22,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 12,
  },
  sectionDescription: {
    fontSize: 16,
    color: Colors.text.secondary,
    marginBottom: 20,
    lineHeight: 22,
  },
  communityButton: {
    backgroundColor: Colors.secondary.main,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 8,
  },
  communityButtonText: {
    color: Colors.neutral.white,
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  communityButtonIcon: {
    marginLeft: 4,
  },
  resourcesSection: {
    padding: 20,
    backgroundColor: Colors.neutral.lightGray,
  },
  pluginsSection: {
    padding: 20,
    backgroundColor: Colors.neutral.lightGray,
  },
  supportSection: {
    padding: 20,
    backgroundColor: Colors.primary.main,
    alignItems: 'center',
  },
  supportTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.neutral.white,
    marginBottom: 8,
    textAlign: 'center',
  },
  supportDescription: {
    fontSize: 16,
    color: Colors.neutral.white,
    opacity: 0.9,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  supportOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
  supportButton: {
    backgroundColor: Colors.neutral.white,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 150,
    alignItems: 'center',
  },
  supportButtonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.neutral.white,
  },
  supportButtonText: {
    color: Colors.primary.main,
    fontSize: 14,
    fontWeight: '600',
  },
  supportButtonTextSecondary: {
    color: Colors.neutral.white,
  },
});