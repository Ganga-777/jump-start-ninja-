export interface Client {
  id: string;
  name: string;
  industry: string;
  logo: string;
}

const clients: Client[] = [
  {
    id: '1',
    name: 'Ensono',
    industry: 'IT Services',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80'
  },
  {
    id: '2',
    name: 'Wipro',
    industry: 'IT Consulting',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80'
  },
  {
    id: '3',
    name: 'TCS',
    industry: 'IT Services',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80'
  },
  {
    id: '4',
    name: 'Infosys',
    industry: 'IT Consulting',
    logo: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80'
  },
  {
    id: '5',
    name: 'Microsoft',
    industry: 'Technology',
    logo: 'https://images.unsplash.com/photo-1554446422-d05db23719d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=100&q=80'
  }
];

export default clients;