export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Srikar Kumar',
    role: 'Co-Founder & CEO',
    bio: 'Srikar has over 15 years of experience in digital transformation and cloud solutions. He leads JumpStartNinja\'s strategic vision and client relationships.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '2',
    name: 'Vineeta Chowdary',
    role: 'Co-Founder & CTO',
    bio: 'Vineeta brings deep technical expertise in AI and data analytics. She oversees JumpStartNinja\'s technology strategy and solution delivery.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '3',
    name: 'Rajesh Verma',
    role: 'Head of AI Solutions',
    bio: 'Rajesh leads our AI practice with expertise in machine learning and predictive analytics. He has implemented AI solutions across multiple industries.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '4',
    name: 'Priya Sharma',
    role: 'Cloud Solutions Architect',
    bio: 'Priya specializes in cloud migration and infrastructure modernization. She has helped numerous enterprises successfully transition to Azure.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '5',
    name: 'Arun Patel',
    role: 'Data Analytics Lead',
    bio: 'Arun brings extensive experience in data engineering and analytics. He helps clients transform raw data into actionable business insights.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  }
];

export default team;