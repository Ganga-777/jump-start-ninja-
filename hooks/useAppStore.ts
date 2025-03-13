import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AppState {
  hasSeenIntro: boolean;
  setHasSeenIntro: (value: boolean) => void;
  
  favoriteServices: string[];
  addFavoriteService: (serviceId: string) => void;
  removeFavoriteService: (serviceId: string) => void;
  
  contactFormData: {
    name: string;
    email: string;
    company: string;
    message: string;
  };
  updateContactFormData: (data: Partial<AppState['contactFormData']>) => void;
  clearContactFormData: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      hasSeenIntro: false,
      setHasSeenIntro: (value) => set({ hasSeenIntro: value }),
      
      favoriteServices: [],
      addFavoriteService: (serviceId) => 
        set((state) => ({
          favoriteServices: [...state.favoriteServices, serviceId]
        })),
      removeFavoriteService: (serviceId) => 
        set((state) => ({
          favoriteServices: state.favoriteServices.filter(id => id !== serviceId)
        })),
      
      contactFormData: {
        name: '',
        email: '',
        company: '',
        message: '',
      },
      updateContactFormData: (data) => 
        set((state) => ({
          contactFormData: { ...state.contactFormData, ...data }
        })),
      clearContactFormData: () => 
        set({
          contactFormData: {
            name: '',
            email: '',
            company: '',
            message: '',
          }
        }),
    }),
    {
      name: 'jumpstartninja-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);