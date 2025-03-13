import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  company: string;
  role: string;
  avatarUrl: string | null;
  isProfileComplete: boolean;
}

export interface UserPoints {
  total: number;
  history: {
    id: string;
    amount: number;
    reason: string;
    timestamp: number;
  }[];
}

export interface UserBadge {
  badgeId: string;
  earnedAt: number;
}

export interface UserSubscription {
  planId: string | null;
  status: 'active' | 'inactive' | 'trial';
  startDate: number | null;
  endDate: number | null;
  autoRenew: boolean;
}

export interface UserPurchase {
  id: string;
  itemId: string;
  purchaseDate: number;
  amount: number;
}

interface UserState {
  isLoggedIn: boolean;
  profile: UserProfile | null;
  points: UserPoints;
  badges: UserBadge[];
  subscription: UserSubscription;
  purchases: UserPurchase[];
  
  // Actions
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
  addPoints: (amount: number, reason: string) => void;
  earnBadge: (badgeId: string) => void;
  updateSubscription: (subscription: Partial<UserSubscription>) => void;
  addPurchase: (purchase: UserPurchase) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      profile: null,
      points: {
        total: 0,
        history: []
      },
      badges: [],
      subscription: {
        planId: null,
        status: 'inactive',
        startDate: null,
        endDate: null,
        autoRenew: false
      },
      purchases: [],
      
      login: async (email: string, password: string) => {
        // In a real app, this would make an API call
        // For demo purposes, we'll simulate a successful login
        if (email && password) {
          set({
            isLoggedIn: true,
            profile: {
              id: 'user-1',
              name: email.split('@')[0],
              email,
              company: '',
              role: '',
              avatarUrl: null,
              isProfileComplete: false
            }
          });
          
          // Award points for first login if this is a new user
          const { points, badges } = get();
          if (points.total === 0) {
            get().addPoints(10, 'First login');
            get().earnBadge('first-login');
          }
          
          return true;
        }
        return false;
      },
      
      logout: () => {
        set({
          isLoggedIn: false,
          profile: null
        });
      },
      
      updateProfile: (profileUpdate) => {
        const currentProfile = get().profile;
        if (!currentProfile) return;
        
        const updatedProfile = {
          ...currentProfile,
          ...profileUpdate
        };
        
        // Check if profile is now complete
        const isComplete = !!(
          updatedProfile.name &&
          updatedProfile.email &&
          updatedProfile.company &&
          updatedProfile.role
        );
        
        if (isComplete && !currentProfile.isProfileComplete) {
          // Award points for completing profile
          get().addPoints(20, 'Profile completed');
          get().earnBadge('profile-complete');
        }
        
        set({
          profile: {
            ...updatedProfile,
            isProfileComplete: isComplete
          }
        });
      },
      
      addPoints: (amount, reason) => {
        set((state) => ({
          points: {
            total: state.points.total + amount,
            history: [
              ...state.points.history,
              {
                id: `points-${Date.now()}`,
                amount,
                reason,
                timestamp: Date.now()
              }
            ]
          }
        }));
      },
      
      earnBadge: (badgeId) => {
        const hasBadge = get().badges.some(badge => badge.badgeId === badgeId);
        if (hasBadge) return;
        
        set((state) => ({
          badges: [
            ...state.badges,
            {
              badgeId,
              earnedAt: Date.now()
            }
          ]
        }));
      },
      
      updateSubscription: (subscriptionUpdate) => {
        set((state) => ({
          subscription: {
            ...state.subscription,
            ...subscriptionUpdate
          }
        }));
      },
      
      addPurchase: (purchase) => {
        set((state) => ({
          purchases: [
            ...state.purchases,
            purchase
          ]
        }));
      }
    }),
    {
      name: 'jumpstartninja-user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);