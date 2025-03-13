export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  pointsRequired: number;
  category: 'engagement' | 'achievement' | 'expertise';
}

const badges: Badge[] = [
  {
    id: 'first-login',
    name: 'Digital Explorer',
    description: 'Completed your first login to the AI Hub',
    icon: 'rocket',
    pointsRequired: 10,
    category: 'engagement'
  },
  {
    id: 'profile-complete',
    name: 'Identity Established',
    description: 'Completed your user profile',
    icon: 'user-check',
    pointsRequired: 20,
    category: 'engagement'
  },
  {
    id: 'first-analysis',
    name: 'Data Analyst',
    description: 'Ran your first data analysis',
    icon: 'bar-chart-2',
    pointsRequired: 50,
    category: 'achievement'
  },
  {
    id: 'ai-model-trained',
    name: 'AI Trainer',
    description: 'Successfully trained your first AI model',
    icon: 'brain',
    pointsRequired: 100,
    category: 'achievement'
  },
  {
    id: 'cloud-expert',
    name: 'Cloud Navigator',
    description: 'Completed the cloud migration tutorial series',
    icon: 'cloud',
    pointsRequired: 150,
    category: 'expertise'
  },
  {
    id: 'power-platform-guru',
    name: 'Power Platform Guru',
    description: 'Created 5 Power Platform applications',
    icon: 'zap',
    pointsRequired: 200,
    category: 'expertise'
  },
  {
    id: 'community-contributor',
    name: 'Community Champion',
    description: 'Made 10 contributions to the community',
    icon: 'users',
    pointsRequired: 250,
    category: 'engagement'
  }
];

export default badges;