import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { X } from 'lucide-react-native';
import Colors from '@/constants/colors';
import { useAnalyticsStore } from '@/hooks/useAnalyticsStore';

interface AdBannerProps {
  type: 'small' | 'medium' | 'large';
  onClose?: () => void;
  onPress?: () => void;
}

const AdBanner: React.FC<AdBannerProps> = ({ 
  type = 'medium', 
  onClose,
  onPress
}) => {
  const { trackEvent } = useAnalyticsStore();
  
  const handlePress = () => {
    trackEvent('ad_clicked', { ad_type: type });
    if (onPress) onPress();
  };
  
  const handleClose = () => {
    trackEvent('ad_closed', { ad_type: type });
    if (onClose) onClose();
  };
  
  // Small banner (height ~80)
  if (type === 'small') {
    return (
      <TouchableOpacity 
        style={styles.smallContainer}
        onPress={handlePress}
        activeOpacity={0.9}
      >
        <View style={styles.smallContent}>
          <Text style={styles.smallTitle}>Try Premium Features</Text>
          <Text style={styles.smallSubtitle}>Upgrade now</Text>
        </View>
        
        {onClose && (
          <TouchableOpacity 
            style={styles.closeButton} 
            onPress={handleClose}
            hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
          >
            <X size={16} color={Colors.neutral.mediumGray} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  }
  
  // Large banner (height ~200)
  if (type === 'large') {
    return (
      <TouchableOpacity 
        style={styles.largeContainer}
        onPress={handlePress}
        activeOpacity={0.9}
      >
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' }}
          style={styles.largeImage}
          resizeMode="cover"
        />
        
        <View style={styles.largeOverlay}>
          <View style={styles.largeContent}>
            <Text style={styles.largeTitle}>Unlock the Power of AI</Text>
            <Text style={styles.largeSubtitle}>
              Transform your business with our enterprise AI solutions
            </Text>
            <View style={styles.largeButton}>
              <Text style={styles.largeButtonText}>Learn More</Text>
            </View>
          </View>
        </View>
        
        {onClose && (
          <TouchableOpacity 
            style={styles.closeButtonLarge} 
            onPress={handleClose}
            hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
          >
            <X size={16} color={Colors.neutral.white} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  }
  
  // Medium banner (default, height ~120)
  return (
    <TouchableOpacity 
      style={styles.mediumContainer}
      onPress={handlePress}
      activeOpacity={0.9}
    >
      <View style={styles.mediumContent}>
        <Text style={styles.mediumTitle}>Enhance Your Analytics</Text>
        <Text style={styles.mediumSubtitle}>
          Get 30% off on our Advanced Analytics Toolkit
        </Text>
        <View style={styles.mediumButton}>
          <Text style={styles.mediumButtonText}>Get Offer</Text>
        </View>
      </View>
      
      {onClose && (
        <TouchableOpacity 
          style={styles.closeButton} 
          onPress={handleClose}
          hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
        >
          <X size={16} color={Colors.neutral.mediumGray} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Small banner styles
  smallContainer: {
    backgroundColor: Colors.neutral.lightGray,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  smallContent: {
    flex: 1,
  },
  smallTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.secondary.main,
  },
  smallSubtitle: {
    fontSize: 12,
    color: Colors.primary.main,
  },
  
  // Medium banner styles
  mediumContainer: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    padding: 16,
    marginVertical: 12,
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: Colors.primary.light,
  },
  mediumContent: {
    alignItems: 'center',
  },
  mediumTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 4,
    textAlign: 'center',
  },
  mediumSubtitle: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginBottom: 12,
    textAlign: 'center',
  },
  mediumButton: {
    backgroundColor: Colors.primary.main,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  mediumButtonText: {
    color: Colors.neutral.white,
    fontSize: 14,
    fontWeight: '600',
  },
  
  // Large banner styles
  largeContainer: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 16,
  },
  largeImage: {
    width: '100%',
    height: '100%',
  },
  largeOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(26, 43, 71, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  largeContent: {
    alignItems: 'center',
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.neutral.white,
    marginBottom: 8,
    textAlign: 'center',
  },
  largeSubtitle: {
    fontSize: 16,
    color: Colors.neutral.white,
    marginBottom: 16,
    textAlign: 'center',
    opacity: 0.9,
  },
  largeButton: {
    backgroundColor: Colors.primary.main,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  largeButtonText: {
    color: Colors.neutral.white,
    fontSize: 16,
    fontWeight: '600',
  },
  
  // Common styles
  closeButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.neutral.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonLarge: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AdBanner;