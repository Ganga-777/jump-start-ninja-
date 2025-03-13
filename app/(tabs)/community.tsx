import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Users, MessageSquare, ThumbsUp, Filter, Search } from 'lucide-react-native';
import Colors from '@/constants/colors';
import FeedbackForm from '@/components/FeedbackForm';
import AdBanner from '@/components/AdBanner';
import { useFeedbackStore, Feedback } from '@/hooks/useFeedbackStore';
import { useUserStore } from '@/hooks/useUserStore';
import { useAnalyticsStore } from '@/hooks/useAnalyticsStore';

export default function CommunityScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAdBanner, setShowAdBanner] = useState(true);
  
  const { feedback, voteFeedback, unvoteFeedback } = useFeedbackStore();
  const { profile, isLoggedIn } = useUserStore();
  const { trackScreenView } = useAnalyticsStore();
  
  // Track screen view
  React.useEffect(() => {
    trackScreenView('Community');
  }, []);
  
  const handleVote = (feedbackItem: Feedback) => {
    if (!isLoggedIn) {
      return;
    }
    
    if (feedbackItem.hasVoted) {
      unvoteFeedback(feedbackItem.id);
    } else {
      voteFeedback(feedbackItem.id);
    }
  };
  
  const filteredFeedback = feedback
    .filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => b.votes - a.votes);
  
  const getCategoryLabel = (categoryId: string) => {
    const categories = {
      'bug': 'Bug Report',
      'feature': 'Feature Request',
      'improvement': 'Improvement',
      'content': 'Content',
      'usability': 'Usability',
      'other': 'Other'
    };
    return categories[categoryId] || categoryId;
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted':
        return '#9E9E9E'; // Gray
      case 'under-review':
        return '#2196F3'; // Blue
      case 'implemented':
        return '#4CAF50'; // Green
      case 'declined':
        return '#F44336'; // Red
      default:
        return '#9E9E9E';
    }
  };
  
  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'submitted':
        return 'Submitted';
      case 'under-review':
        return 'Under Review';
      case 'implemented':
        return 'Implemented';
      case 'declined':
        return 'Declined';
      default:
        return 'Submitted';
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Users size={32} color={Colors.neutral.white} style={styles.headerIcon} />
          <Text style={styles.headerTitle}>Community Hub</Text>
          <Text style={styles.headerSubtitle}>
            Connect, share ideas, and help shape the future of JumpStartNinja AI Hub
          </Text>
        </View>
        
        <View style={styles.section}>
          <FeedbackForm />
        </View>
        
        {showAdBanner && (
          <View style={styles.adSection}>
            <AdBanner 
              type="medium" 
              onClose={() => setShowAdBanner(false)}
              onPress={() => {
                // Navigate to premium page in a real app
              }}
            />
          </View>
        )}
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MessageSquare size={24} color={Colors.secondary.main} style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>Community Feedback</Text>
          </View>
          
          <View style={styles.searchContainer}>
            <Search size={20} color={Colors.text.secondary} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search feedback..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor={Colors.text.secondary}
            />
            <TouchableOpacity style={styles.filterButton}>
              <Filter size={20} color={Colors.text.secondary} />
            </TouchableOpacity>
          </View>
          
          {filteredFeedback.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>
                No feedback found. Be the first to share your ideas!
              </Text>
            </View>
          ) : (
            filteredFeedback.map((item) => (
              <View key={item.id} style={styles.feedbackItem}>
                <View style={styles.feedbackHeader}>
                  <View style={styles.categoryBadge}>
                    <Text style={styles.categoryText}>{getCategoryLabel(item.category)}</Text>
                  </View>
                  <View 
                    style={[
                      styles.statusBadge, 
                      { backgroundColor: getStatusColor(item.status) }
                    ]}
                  >
                    <Text style={styles.statusText}>{getStatusLabel(item.status)}</Text>
                  </View>
                </View>
                
                <Text style={styles.feedbackTitle}>{item.title}</Text>
                <Text style={styles.feedbackDescription} numberOfLines={3}>
                  {item.description}
                </Text>
                
                <View style={styles.feedbackFooter}>
                  <TouchableOpacity 
                    style={[
                      styles.voteButton,
                      item.hasVoted && styles.votedButton
                    ]}
                    onPress={() => handleVote(item)}
                  >
                    <ThumbsUp 
                      size={16} 
                      color={item.hasVoted ? Colors.neutral.white : Colors.primary.main} 
                      style={styles.voteIcon}
                    />
                    <Text 
                      style={[
                        styles.voteCount,
                        item.hasVoted && styles.votedCount
                      ]}
                    >
                      {item.votes}
                    </Text>
                  </TouchableOpacity>
                  
                  <Text style={styles.feedbackDate}>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </Text>
                </View>
              </View>
            ))
          )}
        </View>
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
  header: {
    backgroundColor: Colors.primary.main,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 30,
    alignItems: 'center',
  },
  headerIcon: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.neutral.white,
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.neutral.white,
    opacity: 0.9,
    textAlign: 'center',
    lineHeight: 22,
  },
  section: {
    padding: 20,
  },
  adSection: {
    paddingHorizontal: 20,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.neutral.lightGray,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: Colors.text.primary,
  },
  filterButton: {
    padding: 8,
  },
  emptyState: {
    padding: 20,
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 16,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  feedbackItem: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  feedbackHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  categoryBadge: {
    backgroundColor: Colors.neutral.lightGray,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  categoryText: {
    fontSize: 12,
    color: Colors.text.secondary,
    fontWeight: '600',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 12,
    color: Colors.neutral.white,
    fontWeight: '600',
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 8,
  },
  feedbackDescription: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginBottom: 12,
    lineHeight: 20,
  },
  feedbackFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  voteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.neutral.lightGray,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  votedButton: {
    backgroundColor: Colors.primary.main,
  },
  voteIcon: {
    marginRight: 4,
  },
  voteCount: {
    fontSize: 14,
    color: Colors.text.secondary,
    fontWeight: '600',
  },
  votedCount: {
    color: Colors.neutral.white,
  },
  feedbackDate: {
    fontSize: 12,
    color: Colors.text.secondary,
  },
});