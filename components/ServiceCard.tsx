import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { BrainCircuit, BarChartBig, CloudCog, Workflow, Database } from 'lucide-react-native';
import Colors from '@/constants/colors';
import type { Service } from '@/constants/services';

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, compact = false }) => {
  const router = useRouter();

  const getIcon = () => {
    switch (service.icon) {
      case 'brain-circuit':
        return <BrainCircuit size={24} color={Colors.primary.main} />;
      case 'bar-chart-big':
        return <BarChartBig size={24} color={Colors.primary.main} />;
      case 'cloud-cog':
        return <CloudCog size={24} color={Colors.primary.main} />;
      case 'workflow':
        return <Workflow size={24} color={Colors.primary.main} />;
      case 'database':
        return <Database size={24} color={Colors.primary.main} />;
      default:
        return <BrainCircuit size={24} color={Colors.primary.main} />;
    }
  };

  const handlePress = () => {
    router.push(`/service/${service.id}`);
  };

  if (compact) {
    return (
      <TouchableOpacity 
        style={styles.compactContainer} 
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <View style={styles.iconContainer}>
          {getIcon()}
        </View>
        <Text style={styles.compactTitle} numberOfLines={2}>
          {service.title}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          {getIcon()}
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {service.title}
        </Text>
      </View>
      <Text style={styles.description} numberOfLines={3}>
        {service.shortDescription}
      </Text>
      <View style={styles.footer}>
        <Text style={styles.learnMore}>Learn more</Text>
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
  compactContainer: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    padding: 12,
    width: 160,
    height: 120,
    marginRight: 12,
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.neutral.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    flex: 1,
  },
  compactTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    textAlign: 'center',
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginBottom: 12,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  learnMore: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary.main,
  },
});

export default ServiceCard;