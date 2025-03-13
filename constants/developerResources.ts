export interface DeveloperResource {
  id: string;
  title: string;
  description: string;
  type: 'api' | 'sdk' | 'plugin' | 'documentation';
  url: string;
  isNew?: boolean;
}

const developerResources: DeveloperResource[] = [
  {
    id: 'api-docs',
    title: 'JumpStartNinja API Documentation',
    description: 'Complete reference for all JumpStartNinja API endpoints',
    type: 'api',
    url: '/developer/api-docs',
    isNew: true
  },
  {
    id: 'js-sdk',
    title: 'JavaScript SDK',
    description: 'Official JavaScript SDK for integrating with JumpStartNinja services',
    type: 'sdk',
    url: '/developer/sdk/javascript'
  },
  {
    id: 'python-sdk',
    title: 'Python SDK',
    description: 'Official Python SDK for data science and AI model integration',
    type: 'sdk',
    url: '/developer/sdk/python'
  },
  {
    id: 'plugin-framework',
    title: 'Plugin Development Framework',
    description: 'Tools and guidelines for creating plugins for the JumpStartNinja platform',
    type: 'plugin',
    url: '/developer/plugins/framework',
    isNew: true
  },
  {
    id: 'getting-started',
    title: 'Getting Started Guide',
    description: 'Step-by-step guide for new developers',
    type: 'documentation',
    url: '/developer/docs/getting-started'
  },
  {
    id: 'authentication',
    title: 'Authentication Guide',
    description: 'Implementing secure authentication with JumpStartNinja services',
    type: 'documentation',
    url: '/developer/docs/authentication'
  },
  {
    id: 'data-models',
    title: 'Data Models Reference',
    description: 'Complete reference of all data models used in the platform',
    type: 'documentation',
    url: '/developer/docs/data-models'
  }
];

export default developerResources;