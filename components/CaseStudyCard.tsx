import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/colors';
import type { CaseStudy } from '@/constants/caseStudies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  compact?: boolean;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, compact = false }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/case-study/${caseStudy.id}`);
  };

  if (compact) {
    return (
      <TouchableOpacity 
        style={styles.compactContainer} 
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <Image 
          source={{ uri: caseStudy.imageUrl }} 
          style={styles.compactImage} 
          resizeMode="cover"
        />
        <View style={styles.compactOverlay}>
          <Text style={styles.compactTitle} numberOfLines={2}>{caseStudy.title}</Text>
          <Text style={styles.compactIndustry}>{caseStudy.industry}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Image 
        source={{ uri: caseStudy.imageUrl }} 
        style={styles.image} 
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{caseStudy.title}</Text>
        <View style={styles.metaContainer}>
          <Text style={styles.client}>{caseStudy.client}</Text>
          <Text style={styles.industry}>{caseStudy.industry}</Text>
        </View>
        <Text style={styles.description} numberOfLines={3}>
          {caseStudy.challenge}
        </Text>
        <Text style={styles.readMore}>Read case study</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  compactContainer: {
    width: 250,
    height: 150,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 12,
  },
  image: {
    width: '100%',
    height: 180,
  },
  compactImage: {
    width: '100%',
    height: '100%',
  },
  compactOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(26, 43, 71, 0.8)',
    padding: 12,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 8,
  },
  compactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.neutral.white,
    marginBottom: 4,
  },
  metaContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  client: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginRight: 8,
  },
  industry: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary.main,
  },
  compactIndustry: {
    fontSize: 12,
    color: Colors.neutral.lightGray,
  },
  description: {
    fontSize: 14,
    color: Colors.text.secondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  readMore: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary.main,
    alignSelf: 'flex-end',
  },
});

export default CaseStudyCard;