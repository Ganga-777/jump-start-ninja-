import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Feedback {
  id: string;
  userId: string;
  category: string;
  title: string;
  description: string;
  status: 'submitted' | 'under-review' | 'implemented' | 'declined';
  createdAt: number;
  updatedAt: number;
  votes: number;
  hasVoted: boolean;
}

interface FeedbackState {
  feedback: Feedback[];
  
  // Actions
  submitFeedback: (feedback: Omit<Feedback, 'id' | 'createdAt' | 'updatedAt' | 'votes' | 'hasVoted' | 'status'>) => void;
  voteFeedback: (id: string) => void;
  unvoteFeedback: (id: string) => void;
  getUserFeedback: (userId: string) => Feedback[];
}

export const useFeedbackStore = create<FeedbackState>()(
  persist(
    (set, get) => ({
      feedback: [],
      
      submitFeedback: (newFeedback) => {
        const timestamp = Date.now();
        const feedback = {
          id: `feedback-${timestamp}-${Math.random().toString(36).substr(2, 9)}`,
          ...newFeedback,
          status: 'submitted' as const,
          createdAt: timestamp,
          updatedAt: timestamp,
          votes: 0,
          hasVoted: false
        };
        
        set((state) => ({
          feedback: [...state.feedback, feedback]
        }));
      },
      
      voteFeedback: (id) => {
        set((state) => ({
          feedback: state.feedback.map(item => 
            item.id === id 
              ? { ...item, votes: item.votes + 1, hasVoted: true }
              : item
          )
        }));
      },
      
      unvoteFeedback: (id) => {
        set((state) => ({
          feedback: state.feedback.map(item => 
            item.id === id && item.hasVoted
              ? { ...item, votes: Math.max(0, item.votes - 1), hasVoted: false }
              : item
          )
        }));
      },
      
      getUserFeedback: (userId) => {
        return get().feedback.filter(item => item.userId === userId);
      }
    }),
    {
      name: 'jumpstartninja-feedback-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);