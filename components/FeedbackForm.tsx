import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { Send } from 'lucide-react-native';
import Colors from '@/constants/colors';
import feedbackCategories from '@/constants/feedbackCategories';
import { useFeedbackStore } from '@/hooks/useFeedbackStore';
import { useUserStore } from '@/hooks/useUserStore';
import { useAnalyticsStore } from '@/hooks/useAnalyticsStore';

const FeedbackForm: React.FC = () => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { submitFeedback } = useFeedbackStore();
  const { profile, addPoints } = useUserStore();
  const { trackEvent } = useAnalyticsStore();
  
  const handleSubmit = () => {
    if (!category || !title || !description) {
      Alert.alert('Missing Information', 'Please fill in all required fields.');
      return;
    }
    
    if (!profile) {
      Alert.alert('Authentication Required', 'Please log in to submit feedback.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Submit feedback
    submitFeedback({
      userId: profile.id,
      category,
      title,
      description
    });
    
    // Award points for submitting feedback
    addPoints(15, 'Submitted feedback');
    
    // Track event
    trackEvent('feedback_submitted', { category });
    
    // Reset form
    setTimeout(() => {
      setIsSubmitting(false);
      setCategory('');
      setTitle('');
      setDescription('');
      
      Alert.alert(
        'Thank You!',
        'Your feedback has been submitted. We appreciate your contribution to improving our platform.',
        [{ text: 'OK' }]
      );
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share Your Feedback</Text>
      <Text style={styles.subtitle}>
        Help us improve the JumpStartNinja AI Hub by sharing your thoughts, ideas, or reporting issues.
      </Text>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {feedbackCategories.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.categoryButton,
              category === item.id && styles.categoryButtonSelected
            ]}
            onPress={() => setCategory(item.id)}
          >
            <Text 
              style={[
                styles.categoryButtonText,
                category === item.id && styles.categoryButtonTextSelected
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Title *"
          value={title}
          onChangeText={setTitle}
          placeholderTextColor={Colors.text.secondary}
        />
        
        <TextInput
          style={styles.textArea}
          placeholder="Describe your feedback in detail *"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={6}
          placeholderTextColor={Colors.text.secondary}
        />
        
        <TouchableOpacity 
          style={[styles.button, isSubmitting && styles.buttonDisabled]} 
          onPress={handleSubmit}
          disabled={isSubmitting}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </Text>
          {!isSubmitting && <Send size={18} color={Colors.primary.text} style={styles.icon} />}
        </TouchableOpacity>
      </View>
      
      <Text style={styles.pointsNote}>
        You'll earn 15 points for submitting feedback!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    padding: 20,
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginBottom: 20,
    lineHeight: 20,
  },
  categoriesContainer: {
    paddingBottom: 16,
  },
  categoryButton: {
    backgroundColor: Colors.neutral.lightGray,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  categoryButtonSelected: {
    backgroundColor: Colors.primary.main,
  },
  categoryButtonText: {
    fontSize: 14,
    color: Colors.text.secondary,
  },
  categoryButtonTextSelected: {
    color: Colors.neutral.white,
    fontWeight: '600',
  },
  form: {
    width: '100%',
  },
  input: {
    backgroundColor: Colors.neutral.lightGray,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: Colors.text.primary,
    marginBottom: 16,
  },
  textArea: {
    backgroundColor: Colors.neutral.lightGray,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: Colors.text.primary,
    marginBottom: 16,
    minHeight: 120,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: Colors.primary.main,
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: Colors.neutral.mediumGray,
  },
  buttonText: {
    color: Colors.primary.text,
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    marginLeft: 8,
  },
  pointsNote: {
    fontSize: 12,
    color: Colors.text.secondary,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default FeedbackForm;