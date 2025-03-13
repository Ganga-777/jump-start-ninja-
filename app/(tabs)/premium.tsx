import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Crown, ShoppingBag } from 'lucide-react-native';
import Colors from '@/constants/colors';
import { subscriptionPlans, oneTimePurchases } from '@/constants/plans';
import SubscriptionCard from '@/components/SubscriptionCard';
import ProductCard from '@/components/ProductCard';
import { useUserStore } from '@/hooks/useUserStore';
import { useAnalyticsStore } from '@/hooks/useAnalyticsStore';

export default function PremiumScreen() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  const { subscription, updateSubscription, addPurchase, addPoints } = useUserStore();
  const { trackEvent } = useAnalyticsStore();
  
  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan.id);
    trackEvent('plan_selected', { plan_id: plan.id, plan_name: plan.name });
    
    Alert.alert(
      'Subscribe to Plan',
      `Would you like to subscribe to the ${plan.name} plan for $${plan.price}/${plan.billingCycle}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Subscribe',
          onPress: () => {
            // In a real app, this would process payment
            updateSubscription({
              planId: plan.id,
              status: 'active',
              startDate: Date.now(),
              endDate: Date.now() + (plan.billingCycle === 'monthly' ? 30 : 365) * 24 * 60 * 60 * 1000,
              autoRenew: true
            });
            
            addPoints(100, `Subscribed to ${plan.name} plan`);
            
            trackEvent('subscription_purchased', { 
              plan_id: plan.id, 
              plan_name: plan.name,
              amount: parseFloat(plan.price)
            });
            
            Alert.alert(
              'Subscription Successful',
              `You are now subscribed to the ${plan.name} plan. Thank you for your purchase!`
            );
          }
        }
      ]
    );
  };
  
  const handlePurchaseProduct = (product) => {
    trackEvent('product_selected', { product_id: product.id, product_name: product.name });
    
    Alert.alert(
      'Purchase Product',
      `Would you like to purchase ${product.name} for $${product.price}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Purchase',
          onPress: () => {
            // In a real app, this would process payment
            addPurchase({
              id: `purchase-${Date.now()}`,
              itemId: product.id,
              purchaseDate: Date.now(),
              amount: parseFloat(product.price)
            });
            
            addPoints(50, `Purchased ${product.name}`);
            
            trackEvent('product_purchased', { 
              product_id: product.id, 
              product_name: product.name,
              amount: parseFloat(product.price)
            });
            
            Alert.alert(
              'Purchase Successful',
              `You have successfully purchased ${product.name}. Thank you for your purchase!`
            );
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Crown size={32} color={Colors.neutral.white} style={styles.headerIcon} />
          <Text style={styles.headerTitle}>Premium Features</Text>
          <Text style={styles.headerSubtitle}>
            Unlock the full potential of JumpStartNinja AI Hub
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Subscription Plans</Text>
          <Text style={styles.sectionDescription}>
            Choose a plan that fits your needs and unlock premium features
          </Text>
          
          {subscriptionPlans.map((plan) => (
            <SubscriptionCard 
              key={plan.id} 
              plan={plan} 
              onSelect={handleSelectPlan}
              isSelected={selectedPlan === plan.id || subscription.planId === plan.id}
            />
          ))}
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <ShoppingBag size={24} color={Colors.secondary.main} style={styles.sectionIcon} />
            <View>
              <Text style={styles.sectionTitle}>One-Time Purchases</Text>
              <Text style={styles.sectionDescription}>
                Enhance your experience with specialized tools and templates
              </Text>
            </View>
          </View>
          
          {oneTimePurchases.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onPurchase={handlePurchaseProduct}
            />
          ))}
        </View>
        
        <View style={styles.benefitsSection}>
          <Text style={styles.benefitsSectionTitle}>Premium Benefits</Text>
          
          <View style={styles.benefitItem}>
            <View style={styles.benefitIconContainer}>
              <Crown size={20} color={Colors.primary.main} />
            </View>
            <View style={styles.benefitContent}>
              <Text style={styles.benefitTitle}>Advanced AI Tools</Text>
              <Text style={styles.benefitDescription}>
                Access our full suite of AI-powered tools for data analysis, prediction, and automation
              </Text>
            </View>
          </View>
          
          <View style={styles.benefitItem}>
            <View style={styles.benefitIconContainer}>
              <Crown size={20} color={Colors.primary.main} />
            </View>
            <View style={styles.benefitContent}>
              <Text style={styles.benefitTitle}>Priority Support</Text>
              <Text style={styles.benefitDescription}>
                Get faster responses and dedicated assistance from our expert team
              </Text>
            </View>
          </View>
          
          <View style={styles.benefitItem}>
            <View style={styles.benefitIconContainer}>
              <Crown size={20} color={Colors.primary.main} />
            </View>
            <View style={styles.benefitContent}>
              <Text style={styles.benefitTitle}>Custom Dashboards</Text>
              <Text style={styles.benefitDescription}>
                Create personalized dashboards to monitor your key metrics in real-time
              </Text>
            </View>
          </View>
          
          <View style={styles.benefitItem}>
            <View style={styles.benefitIconContainer}>
              <Crown size={20} color={Colors.primary.main} />
            </View>
            <View style={styles.benefitContent}>
              <Text style={styles.benefitTitle}>API Access</Text>
              <Text style={styles.benefitDescription}>
                Integrate our powerful AI capabilities directly into your own applications
              </Text>
            </View>
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionIcon: {
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginBottom: 16,
    lineHeight: 20,
  },
  benefitsSection: {
    padding: 20,
    backgroundColor: Colors.neutral.lightGray,
  },
  benefitsSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 16,
    textAlign: 'center',
  },
  benefitItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  benefitIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.neutral.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  benefitContent: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text.primary,
    marginBottom: 4,
  },
  benefitDescription: {
    fontSize: 14,
    color: Colors.text.secondary,
    lineHeight: 20,
  },
});