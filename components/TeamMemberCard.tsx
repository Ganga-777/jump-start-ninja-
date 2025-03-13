import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '@/constants/colors';
import type { TeamMember } from '@/constants/team';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: member.imageUrl }} 
        style={styles.image} 
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.name}>{member.name}</Text>
        <Text style={styles.role}>{member.role}</Text>
        <Text style={styles.bio} numberOfLines={3}>{member.bio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral.white,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: Colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary.main,
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary.main,
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: Colors.text.secondary,
    lineHeight: 20,
  },
});

export default TeamMemberCard;