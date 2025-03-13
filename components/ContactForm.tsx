import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import { Send } from 'lucide-react-native';
import Colors from '@/constants/colors';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Missing Information', 'Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert(
        'Thank You!',
        'Your message has been sent. Our team will get back to you shortly.',
        [
          { 
            text: 'OK', 
            onPress: () => {
              setName('');
              setEmail('');
              setCompany('');
              setMessage('');
            } 
          }
        ]
      );
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get in Touch</Text>
      <Text style={styles.subtitle}>
        Have a project in mind? Let's discuss how we can help transform your business.
      </Text>
      
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Your Name *"
          value={name}
          onChangeText={setName}
          placeholderTextColor={Colors.text.secondary}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Email Address *"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor={Colors.text.secondary}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Company Name"
          value={company}
          onChangeText={setCompany}
          placeholderTextColor={Colors.text.secondary}
        />
        
        <TextInput
          style={styles.textArea}
          placeholder="How can we help you? *"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={Platform.OS === 'ios' ? 0 : 4}
          placeholderTextColor={Colors.text.secondary}
        />
        
        <TouchableOpacity 
          style={[styles.button, isSubmitting && styles.buttonDisabled]} 
          onPress={handleSubmit}
          disabled={isSubmitting}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Text>
          {!isSubmitting && <Send size={18} color={Colors.primary.text} style={styles.icon} />}
        </TouchableOpacity>
      </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.text.secondary,
    marginBottom: 24,
    lineHeight: 22,
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
});

export default ContactForm;