import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Check } from 'lucide-react-native';
import Colors from '@/constants/colors';
import type { SubscriptionPlan } from '@/constants/plans';

interface SubscriptionCardProps {
  plan: SubscriptionPlan;
  onSelect: (plan: SubscriptionPlan) => void;
  isSelected?: boolean;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ 
  plan, 
  onSelect,
  isSelected = false
}) => {
  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        plan.isPopular && styles.popularContainer,
        isSelected && styles.selectedContainer
      ]} 
      onPress={() => onSelect(plan)}
      activeOpacity={0.7}
    >
      {plan.isPopular && (
        <View style={styles.popularBadge}>
          <Text style={styles.popularText}>Most Popular</Text>
        </View>
      )}
      
      <Text style={styles.name}>{plan.name}</Text>
      
      <View style={styles.priceContainer}>
        <Text style={styles.currency}>$</Text>
        <Text style={styles.price}>{plan.price}</Text>
        <Text style={styles.billingCycle}>/{plan.billingCycle}</Text>
      </View>
      
      <View style={styles.featuresContainer}>
        {plan.features.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <Check size={16} color={Colors.primary.main} style={styles.checkIcon} />
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>
      
      <TouchableOpacity 
        style={[
          styles.selectButton,
          plan.isPopular && styles.popularButton,
          isSelected && styles.selectedButton
        ]}
        onPress={() => onSelect(plan)}
        activeOpacity={0.8}
      >
        <Text style={[
          styles.selectButtonText,
          isSelected && styles.selectedButtonText
        ]}>
          {isSelected ? 'Selected' : 'Select Plan'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  popularContainer: {
    borderColor: Colors.primary.main,
  },
  selectedContainer: {
    borderColor: Colors.secondary.main,
    backgroundColor: Colors.neutral.lightGray,
  },
  popularBadge: {
    position: 'absolute',
    top: -12,
    right: 20,
    backgroundColor: Colors.primary.main,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  popularText: {
    color: Colors.neutral.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  currency: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text.primary,
    marginBottom: 4,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.primary.main,
  },
  billingCycle: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginBottom: 4,
    marginLeft: 2,
  },
  featuresContainer: {
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkIcon: {
    marginRight: 8,
  },
  featureText: {
    fontSize: 14,
    color: Colors.text.secondary,
  },
  selectButton: {
    backgroundColor: Colors.neutral.white,
    borderWidth: 2,
    borderColor: Colors.primary.main,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  popularButton: {
    backgroundColor: Colors.primary.main,
  },
  selectedButton: {
    backgroundColor: Colors.secondary.main,
    borderColor: Colors.secondary.main,
  },
  selectButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary.main,
  },
  selectedButtonText: {
    color: Colors.neutral.white,
  },
});

export default SubscriptionCard;