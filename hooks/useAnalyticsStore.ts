import { create } from 'zustand';
import { Platform } from 'react-native';

interface AnalyticsEvent {
  id: string;
  name: string;
  properties: Record<string, any>;
  timestamp: number;
}

interface AnalyticsState {
  events: AnalyticsEvent[];
  isTracking: boolean;
  
  // Actions
  trackEvent: (name: string, properties?: Record<string, any>) => void;
  trackScreenView: (screenName: string) => void;
  trackButtonClick: (buttonName: string, screenName: string) => void;
  enableTracking: () => void;
  disableTracking: () => void;
  clearEvents: () => void;
}

export const useAnalyticsStore = create<AnalyticsState>((set, get) => ({
  events: [],
  isTracking: true,
  
  trackEvent: (name, properties = {}) => {
    if (!get().isTracking) return;
    
    const newEvent = {
      id: `event-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name,
      properties: {
        ...properties,
        platform: Platform.OS,
        timestamp: new Date().toISOString()
      },
      timestamp: Date.now()
    };
    
    set((state) => ({
      events: [...state.events, newEvent]
    }));
    
    // In a real app, you would send this to your analytics service
    console.log('Analytics event:', name, properties);
  },
  
  trackScreenView: (screenName) => {
    get().trackEvent('screen_view', { screen_name: screenName });
  },
  
  trackButtonClick: (buttonName, screenName) => {
    get().trackEvent('button_click', { 
      button_name: buttonName,
      screen_name: screenName
    });
  },
  
  enableTracking: () => {
    set({ isTracking: true });
  },
  
  disableTracking: () => {
    set({ isTracking: false });
  },
  
  clearEvents: () => {
    set({ events: [] });
  }
}));