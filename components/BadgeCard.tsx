import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Award, Lock } from 'lucide-react-native';
import Colors from '@/constants/colors';
import type { Badge } from '@/constants/badges';
import { UserBadge } from '@/hooks/useUserStore';

interface BadgeCardProps {
  badge: Badge;
  userBadges: UserBadge[];
  userPoints: number;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ badge, userBadges, userPoints }) => {
  const isEarned = userBadges.some(userBadge => userBadge.badgeId === badge.id);
  const canEarn = userPoints >= badge.pointsRequired;
  
  const getBadgeIcon = () => {
    // In a real app, you would use different icons based on the badge.icon property
    return <Award size={24} color={isEarned ? Colors.primary.main : Colors.neutral.mediumGray} />;
  };
  
  const getCategoryColor = () => {
    switch (badge.category) {
      case 'engagement':
        return '#4CAF50'; // Green
      case 'achievement':
        return '#2196F3'; // Blue
      case 'expertise':
        return '#9C27B0'; // Purple
      default:
        return Colors.primary.main;
    }
  };

  return (
    <View style={[
      styles.container,
      isEarned && styles.earnedContainer
    ]}>
      <View style={styles.iconContainer}>
        {getBadgeIcon()}
      </View>
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{badge.name}</Text>
          <View 
            style={[
              styles.categoryBadge, 
              { backgroundColor: getCategoryColor() }
            ]}
          >
            <Text style={styles.categoryText}>
              {badge.category.charAt(0).toUpperCase() + badge.category.slice(1)}
            </Text>
          </View>
        </View>
        
        <Text style={styles.description}>{badge.description}</Text>
        
        <View style={styles.footer}>
          {isEarned ? (
            <Text style={styles.earnedText}>Earned</Text>
          ) : (
            <View style={styles.requirementContainer}>
              {!canEarn && <Lock size={14} color={Colors.text.secondary} style={styles.lockIcon} />}
              <Text style={[
                styles.requirementText,
                !canEarn && styles.lockedText
              ]}>
                {badge.pointsRequired} points required
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  earnedContainer: {
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary.main,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.neutral.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    flex: 1,
    marginRight: 8,
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  categoryText: {
    color: Colors.neutral.white,
    fontSize: 10,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginBottom: 8,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  earnedText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary.main,
  },
  requirementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lockIcon: {
    marginRight: 4,
  },
  requirementText: {
    fontSize: 14,
    color: Colors.text.secondary,
  },
  lockedText: {
    fontStyle: 'italic',
  },
});

export default BadgeCard;