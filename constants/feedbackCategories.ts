export interface FeedbackCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const feedbackCategories: FeedbackCategory[] = [
  {
    id: 'bug',
    name: 'Bug Report',
    description: 'Report an issue or unexpected behavior',
    icon: 'bug'
  },
  {
    id: 'feature',
    name: 'Feature Request',
    description: 'Suggest a new feature or enhancement',
    icon: 'lightbulb'
  },
  {
    id: 'improvement',
    name: 'Improvement Idea',
    description: 'Share ideas to improve existing functionality',
    icon: 'tool'
  },
  {
    id: 'content',
    name: 'Content Feedback',
    description: 'Feedback on documentation or educational content',
    icon: 'file-text'
  },
  {
    id: 'usability',
    name: 'Usability Feedback',
    description: 'Suggestions to improve user experience',
    icon: 'thumbs-up'
  },
  {
    id: 'other',
    name: 'Other',
    description: 'Any other type of feedback',
    icon: 'message-circle'
  }
];

export default feedbackCategories;