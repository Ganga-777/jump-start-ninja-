import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Award, ShoppingBag, LogOut, Edit, Camera } from 'lucide-react-native';
import Colors from '@/constants/colors';
import BadgeCard from '@/components/BadgeCard';
import { useUserStore } from '@/hooks/useUserStore';
import { useAnalyticsStore } from '@/hooks/useAnalyticsStore';
import badges from '@/constants/badges';

export default function ProfileScreen() {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({
    name: '',
    email: '',
    company: '',
    role: ''
  });
  
  const { 
    isLoggedIn, 
    profile, 
    points, 
    badges: userBadges, 
    subscription, 
    purchases,
    login,
    logout,
    updateProfile
  } = useUserStore();
  
  const { trackEvent, trackScreenView } = useAnalyticsStore();
  
  // Track screen view
  React.useEffect(() => {
    trackScreenView('Profile');
  }, []);
  
  // Initialize edited profile when real profile changes
  React.useEffect(() => {
    if (profile) {
      setEditedProfile({
        name: profile.name || '',
        email: profile.email || '',
        company: profile.company || '',
        role: profile.role || ''
      });
    }
  }, [profile]);
  
  const handleLogin = () => {
    // In a real app, this would show a login form
    // For demo purposes, we'll use a simple email/password
    login('demo@jumpstartninja.ai', 'password123')
      .then(success => {
        if (success) {
          trackEvent('user_login', { method: 'email' });
        }
      });
  };
  
  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          onPress: () => {
            trackEvent('user_logout');
            logout();
          }
        }
      ]
    );
  };
  
  const handleStartEditing = () => {
    setIsEditing(true);
  };
  
  const handleSaveProfile = () => {
    updateProfile(editedProfile);
    setIsEditing(false);
    trackEvent('profile_updated');
    
    Alert.alert(
      'Profile Updated',
      'Your profile has been successfully updated.'
    );
  };
  
  const handleCancelEditing = () => {
    if (profile) {
      setEditedProfile({
        name: profile.name || '',
        email: profile.email || '',
        company: profile.company || '',
        role: profile.role || ''
      });
    }
    setIsEditing(false);
  };
  
  if (!isLoggedIn) {
    return (
      <SafeAreaView style={styles.container} edges={['bottom']}>
        <View style={styles.loginContainer}>
          <User size={64} color={Colors.primary.main} style={styles.loginIcon} />
          <Text style={styles.loginTitle}>Sign In to Your Account</Text>
          <Text style={styles.loginSubtitle}>
            Sign in to access your profile, track your progress, and manage your subscriptions.
          </Text>
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.loginButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <View style={styles.profileImageContainer}>
            {profile?.avatarUrl ? (
              <Image 
                source={{ uri: profile.avatarUrl }} 
                style={styles.profileImage} 
              />
            ) : (
              <User size={40} color={Colors.neutral.white} />
            )}
            <TouchableOpacity style={styles.cameraButton}>
              <Camera size={16} color={Colors.neutral.white} />
            </TouchableOpacity>
          </View>
          
          {isEditing ? (
            <View style={styles.editForm}>
              <TextInput
                style={styles.editInput}
                placeholder="Name"
                value={editedProfile.name}
                onChangeText={(text) => setEditedProfile({...editedProfile, name: text})}
                placeholderTextColor={Colors.text.secondary}
              />
              <TextInput
                style={styles.editInput}
                placeholder="Email"
                value={editedProfile.email}
                onChangeText={(text) => setEditedProfile({...editedProfile, email: text})}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor={Colors.text.secondary}
              />
              <TextInput
                style={styles.editInput}
                placeholder="Company"
                value={editedProfile.company}
                onChangeText={(text) => setEditedProfile({...editedProfile, company: text})}
                placeholderTextColor={Colors.text.secondary}
              />
              <TextInput
                style={styles.editInput}
                placeholder="Job Role"
                value={editedProfile.role}
                onChangeText={(text) => setEditedProfile({...editedProfile, role: text})}
                placeholderTextColor={Colors.text.secondary}
              />
              
              <View style={styles.editButtons}>
                <TouchableOpacity 
                  style={[styles.editButton, styles.cancelButton]}
                  onPress={handleCancelEditing}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.editButton, styles.saveButton]}
                  onPress={handleSaveProfile}
                >
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <>
              <Text style={styles.profileName}>{profile?.name || 'User'}</Text>
              <Text style={styles.profileEmail}>{profile?.email}</Text>
              
              {profile?.company && (
                <Text style={styles.profileCompany}>{profile.company}</Text>
              )}
              
              {profile?.role && (
                <Text style={styles.profileRole}>{profile.role}</Text>
              )}
              
              <TouchableOpacity 
                style={styles.editProfileButton}
                onPress={handleStartEditing}
              >
                <Edit size={16} color={Colors.neutral.white} style={styles.editIcon} />
                <Text style={styles.editProfileText}>Edit Profile</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{points.total}</Text>
            <Text style={styles.statLabel}>Points</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{userBadges.length}</Text>
            <Text style={styles.statLabel}>Badges</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{purchases.length}</Text>
            <Text style={styles.statLabel}>Purchases</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Award size={24} color={Colors.secondary.main} style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>Your Badges</Text>
          </View>
          
          {userBadges.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>
                You haven't earned any badges yet. Complete activities to earn badges!
              </Text>
            </View>
          ) : (
            badges
              .filter(badge => userBadges.some(userBadge => userBadge.badgeId === badge.id))
              .map(badge => (
                <BadgeCard 
                  key={badge.id} 
                  badge={badge} 
                  userBadges={userBadges}
                  userPoints={points.total}
                />
              ))
          )}
          
          <Text style={styles.badgesSubtitle}>Badges to Earn</Text>
          
          {badges
            .filter(badge => !userBadges.some(userBadge => userBadge.badgeId === badge.id))
            .slice(0, 3) // Show only a few badges to earn
            .map(badge => (
              <BadgeCard 
                key={badge.id} 
                badge={badge} 
                userBadges={userBadges}
                userPoints={points.total}
              />
            ))
          }
        </View>
        
        <View style={styles.subscriptionSection}>
          <View style={styles.sectionHeader}>
            <ShoppingBag size={24} color={Colors.secondary.main} style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>Your Subscription</Text>
          </View>
          
          {subscription.planId ? (
            <View style={styles.subscriptionInfo}>
              <Text style={styles.subscriptionPlan}>
                {subscription.planId === 'pro' ? 'Professional Plan' : 
                 subscription.planId === 'enterprise' ? 'Enterprise Plan' : 'Free Plan'}
              </Text>
              <Text style={styles.subscriptionStatus}>
                Status: <Text style={styles.subscriptionStatusValue}>
                  {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
                </Text>
              </Text>
              {subscription.endDate && (
                <Text style={styles.subscriptionExpiry}>
                  Expires: {new Date(subscription.endDate).toLocaleDateString()}
                </Text>
              )}
              <TouchableOpacity 
                style={styles.manageSubscriptionButton}
                onPress={() => {
                  trackEvent('manage_subscription_clicked');
                  // Navigate to subscription management in a real app
                }}
              >
                <Text style={styles.manageSubscriptionText}>Manage Subscription</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.noSubscription}>
              <Text style={styles.noSubscriptionText}>
                You don't have an active subscription.
              </Text>
              <TouchableOpacity 
                style={styles.upgradeButton}
                onPress={() => {
                  trackEvent('upgrade_clicked');
                  // Navigate to premium page in a real app
                }}
              >
                <Text style={styles.upgradeButtonText}>Upgrade Now</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <LogOut size={20} color={Colors.text.secondary} style={styles.logoutIcon} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral.white,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginIcon: {
    marginBottom: 20,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 12,
    textAlign: 'center',
  },
  loginSubtitle: {
    fontSize: 16,
    color: Colors.text.secondary,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  loginButton: {
    backgroundColor: Colors.primary.main,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  loginButtonText: {
    color: Colors.neutral.white,
    fontSize: 16,
    fontWeight: '600',
  },
  header: {
    backgroundColor: Colors.primary.main,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 30,
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary.dark,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Colors.secondary.main,
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.neutral.white,
    marginBottom: 4,
    textAlign: 'center',
  },
  profileEmail: {
    fontSize: 16,
    color: Colors.neutral.white,
    opacity: 0.9,
    marginBottom: 8,
    textAlign: 'center',
  },
  profileCompany: {
    fontSize: 14,
    color: Colors.neutral.white,
    opacity: 0.8,
    textAlign: 'center',
  },
  profileRole: {
    fontSize: 14,
    color: Colors.neutral.white,
    opacity: 0.8,
    marginBottom: 16,
    textAlign: 'center',
  },
  editProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  editIcon: {
    marginRight: 6,
  },
  editProfileText: {
    color: Colors.neutral.white,
    fontSize: 14,
    fontWeight: '600',
  },
  editForm: {
    width: '100%',
    marginTop: 8,
  },
  editInput: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: Colors.text.primary,
    marginBottom: 12,
  },
  editButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  editButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginRight: 8,
  },
  saveButton: {
    backgroundColor: Colors.neutral.white,
    marginLeft: 8,
  },
  cancelButtonText: {
    color: Colors.neutral.white,
    fontSize: 16,
    fontWeight: '600',
  },
  saveButtonText: {
    color: Colors.primary.main,
    fontSize: 16,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    margin: 20,
    marginTop: -20,
    padding: 16,
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary.main,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: Colors.text.secondary,
  },
  statDivider: {
    width: 1,
    height: '80%',
    backgroundColor: Colors.neutral.gray,
    alignSelf: 'center',
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionIcon: {
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary.main,
  },
  emptyState: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: Colors.neutral.lightGray,
    borderRadius: 8,
    marginBottom: 20,
  },
  emptyStateText: {
    fontSize: 16,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  badgesSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text.primary,
    marginTop: 20,
    marginBottom: 16,
  },
  subscriptionSection: {
    padding: 20,
    backgroundColor: Colors.neutral.lightGray,
  },
  subscriptionInfo: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    padding: 16,
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subscriptionPlan: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 8,
  },
  subscriptionStatus: {
    fontSize: 16,
    color: Colors.text.secondary,
    marginBottom: 4,
  },
  subscriptionStatusValue: {
    fontWeight: '600',
    color: Colors.primary.main,
  },
  subscriptionExpiry: {
    fontSize: 16,
    color: Colors.text.secondary,
    marginBottom: 16,
  },
  manageSubscriptionButton: {
    backgroundColor: Colors.secondary.main,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  manageSubscriptionText: {
    color: Colors.neutral.white,
    fontSize: 16,
    fontWeight: '600',
  },
  noSubscription: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  noSubscriptionText: {
    fontSize: 16,
    color: Colors.text.secondary,
    marginBottom: 16,
    textAlign: 'center',
  },
  upgradeButton: {
    backgroundColor: Colors.primary.main,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  upgradeButtonText: {
    color: Colors.neutral.white,
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginVertical: 20,
  },
  logoutIcon: {
    marginRight: 8,
  },
  logoutText: {
    fontSize: 16,
    color: Colors.text.secondary,
    fontWeight: '600',
  },
});