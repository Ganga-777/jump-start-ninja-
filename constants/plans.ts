export interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  billingCycle: 'monthly' | 'yearly';
  features: string[];
  isPopular?: boolean;
}

export interface OneTimePurchase {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'template' | 'tool' | 'report';
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '0',
    billingCycle: 'monthly',
    features: [
      'Access to basic AI tools',
      'Limited data analytics',
      'Community support',
      '1 project',
      'Basic reporting'
    ]
  },
  {
    id: 'pro',
    name: 'Professional',
    price: '49.99',
    billingCycle: 'monthly',
    isPopular: true,
    features: [
      'Full access to AI tools',
      'Advanced data analytics',
      'Priority support',
      'Unlimited projects',
      'Advanced reporting',
      'API access',
      'Custom dashboards'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '199.99',
    billingCycle: 'monthly',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom AI model training',
      'White-label solutions',
      'On-premise deployment option',
      'SSO integration',
      '24/7 premium support'
    ]
  }
];

export const oneTimePurchases: OneTimePurchase[] = [
  {
    id: 'template-1',
    name: 'AI Readiness Assessment',
    description: 'Comprehensive template to evaluate your organization\'s AI readiness',
    price: '299',
    category: 'template'
  },
  {
    id: 'template-2',
    name: 'Data Migration Plan',
    description: 'Step-by-step template for planning cloud data migration',
    price: '199',
    category: 'template'
  },
  {
    id: 'tool-1',
    name: 'Advanced Analytics Toolkit',
    description: 'Suite of specialized analytics tools for business intelligence',
    price: '499',
    category: 'tool'
  },
  {
    id: 'report-1',
    name: 'Industry Benchmark Report',
    description: 'Detailed analysis of digital transformation trends in your industry',
    price: '399',
    category: 'report'
  }
];