import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Code, FileText, Package, BookOpen, ExternalLink } from 'lucide-react-native';
import Colors from '@/constants/colors';
import type { DeveloperResource } from '@/constants/developerResources';

interface DeveloperResourceCardProps {
  resource: DeveloperResource;
  onPress: (resource: DeveloperResource) => void;
}

const DeveloperResourceCard: React.FC<DeveloperResourceCardProps> = ({ 
  resource, 
  onPress 
}) => {
  const getIcon = () => {
    switch (resource.type) {
      case 'api':
        return <Code size={24} color={Colors.primary.main} />;
      case 'sdk':
        return <Package size={24} color={Colors.primary.main} />;
      case 'plugin':
        return <FileText size={24} color={Colors.primary.main} />;
      case 'documentation':
        return <BookOpen size={24} color={Colors.primary.main} />;
      default:
        return <Code size={24} color={Colors.primary.main} />;
    }
  };

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => onPress(resource)}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          {getIcon()}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{resource.title}</Text>
          {resource.isNew && (
            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>NEW</Text>
            </View>
          )}
        </View>
      </View>
      
      <Text style={styles.description}>{resource.description}</Text>
      
      <View style={styles.footer}>
        <View style={styles.typeBadge}>
          <Text style={styles.typeText}>
            {resource.type.toUpperCase()}
          </Text>
        </View>
        <ExternalLink size={16} color={Colors.primary.main} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: Colors.neutral.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 4,
  },
  newBadge: {
    backgroundColor: Colors.primary.main,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  newBadgeText: {
    color: Colors.neutral.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginBottom: 12,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  typeBadge: {
    backgroundColor: Colors.neutral.lightGray,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  typeText: {
    fontSize: 12,
    color: Colors.text.secondary,
    fontWeight: '600',
  },
});

export default DeveloperResourceCard;