export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  imageUrl: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'AI-Powered Customer Insights Platform',
    client: 'Major Retail Chain',
    industry: 'Retail',
    challenge: 'The client needed to better understand customer behavior across multiple channels to personalize marketing efforts and improve customer experience.',
    solution: 'We developed an AI-powered customer insights platform that aggregated data from various sources, including in-store purchases, online transactions, and social media interactions. The platform used machine learning algorithms to identify patterns and predict customer preferences.',
    results: [
      '32% increase in marketing campaign effectiveness',
      '18% improvement in customer retention',
      '27% growth in cross-selling opportunities',
      'Reduced time to insight from weeks to hours'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Cloud Migration for Legacy Banking Systems',
    client: 'Regional Financial Institution',
    industry: 'Banking',
    challenge: 'The client was struggling with outdated legacy systems that were costly to maintain and unable to support modern banking services.',
    solution: 'We designed and implemented a phased migration of core banking systems to Microsoft Azure, modernizing applications and implementing a microservices architecture for improved scalability and flexibility.',
    results: [
      '45% reduction in infrastructure costs',
      '99.99% system availability, up from 98.5%',
      '60% faster deployment of new features',
      'Enhanced security and compliance with financial regulations'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Predictive Maintenance Solution for Manufacturing',
    client: 'Global Manufacturing Company',
    industry: 'Manufacturing',
    challenge: 'The client was experiencing significant downtime due to equipment failures, impacting production schedules and increasing maintenance costs.',
    solution: 'We implemented an IoT-based predictive maintenance solution that collected real-time data from sensors on manufacturing equipment. Using advanced analytics and machine learning, the system predicted potential failures before they occurred.',
    results: [
      '73% reduction in unplanned downtime',
      '42% decrease in maintenance costs',
      '21% improvement in equipment lifespan',
      'ROI achieved within 8 months of implementation'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Power Platform Solution for Field Service Operations',
    client: 'Utility Services Provider',
    industry: 'Utilities',
    challenge: 'The client needed to streamline field service operations and improve communication between field technicians and the central office.',
    solution: 'We developed a custom solution using Microsoft Power Platform that included mobile apps for field technicians, automated workflow for service requests, and real-time dashboards for management.',
    results: [
      '35% increase in technician productivity',
      '28% reduction in service response time',
      'Improved customer satisfaction scores by 42%',
      'Enhanced data collection for regulatory compliance'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
];

export default caseStudies;