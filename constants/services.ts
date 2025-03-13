export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  benefits: string[];
  technologies: string[];
}

const services: Service[] = [
  {
    id: 'ai-transformation',
    title: 'Digital Transformation Using Artificial Intelligence',
    shortDescription: 'Leverage AI to transform your business processes and decision-making',
    longDescription: 'Our AI solutions help businesses automate processes, gain insights from data, and make better decisions. We implement custom AI models tailored to your specific business needs, from predictive analytics to computer vision and natural language processing.',
    icon: 'brain-circuit',
    benefits: [
      'Automate repetitive tasks and processes',
      'Gain insights from unstructured data',
      'Improve decision-making with predictive analytics',
      'Enhance customer experience with personalization',
      'Reduce operational costs and increase efficiency'
    ],
    technologies: [
      'Azure AI',
      'Machine Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Predictive Analytics'
    ]
  },
  {
    id: 'data-analytics',
    title: 'Digital Transformation Using Data Analytics',
    shortDescription: 'Turn your data into actionable insights for better business decisions',
    longDescription: 'Our data analytics services help you collect, process, analyze, and visualize data to extract meaningful insights. We build custom dashboards and reporting solutions that enable data-driven decision making across your organization.',
    icon: 'bar-chart-big',
    benefits: [
      'Make data-driven decisions with confidence',
      'Identify trends and patterns in your business data',
      'Create interactive dashboards for real-time monitoring',
      'Improve operational efficiency with data insights',
      'Enhance strategic planning with predictive analytics'
    ],
    technologies: [
      'Power BI',
      'Azure Data Factory',
      'Azure Synapse Analytics',
      'SQL Server',
      'Big Data Processing'
    ]
  },
  {
    id: 'cloud-migration',
    title: 'Digital Transformation Using Cloud Migration & Modernization',
    shortDescription: 'Modernize your IT infrastructure with secure and scalable cloud solutions',
    longDescription: 'We help organizations migrate their existing applications and infrastructure to the cloud, modernizing legacy systems and optimizing for performance, security, and cost. Our cloud experts ensure a smooth transition with minimal disruption to your business.',
    icon: 'cloud-cog',
    benefits: [
      'Reduce infrastructure costs with pay-as-you-go model',
      'Improve scalability and flexibility of IT resources',
      'Enhance security and compliance',
      'Enable remote work and collaboration',
      'Accelerate innovation and time-to-market'
    ],
    technologies: [
      'Microsoft Azure',
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
      'Hybrid Cloud Solutions'
    ]
  },
  {
    id: 'power-platform',
    title: 'Empowering Business with Power Platform',
    shortDescription: 'Build custom business applications with low-code solutions',
    longDescription: 'Our Power Platform expertise helps businesses create custom applications, automate workflows, and analyze data without extensive coding. We empower your team to solve business problems and improve processes with Microsoft\'s powerful low-code platform.',
    icon: 'workflow',
    benefits: [
      'Rapidly develop custom business applications',
      'Automate manual processes and workflows',
      'Connect to hundreds of data sources',
      'Empower citizen developers in your organization',
      'Reduce development costs and time-to-market'
    ],
    technologies: [
      'Power Apps',
      'Power Automate',
      'Power BI',
      'Power Virtual Agents',
      'Dataverse'
    ]
  },
  {
    id: 'sap-azure',
    title: 'SAP Migration On Azure',
    shortDescription: 'Optimize your SAP workloads on Microsoft Azure',
    longDescription: 'We specialize in migrating and optimizing SAP workloads on Microsoft Azure, ensuring high performance, security, and cost efficiency. Our experts help you plan, migrate, and manage your SAP environment in the cloud with minimal business disruption.',
    icon: 'database',
    benefits: [
      'Reduce infrastructure costs and total cost of ownership',
      'Improve performance and scalability of SAP systems',
      'Enhance disaster recovery and business continuity',
      'Integrate SAP with other cloud services',
      'Optimize SAP operations with Azure monitoring tools'
    ],
    technologies: [
      'SAP S/4HANA',
      'SAP NetWeaver',
      'Azure Virtual Machines',
      'Azure Storage',
      'Azure ExpressRoute'
    ]
  }
];

export default services;