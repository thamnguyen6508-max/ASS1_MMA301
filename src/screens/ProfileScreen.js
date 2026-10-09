import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useProfileContext } from '../context/ProfileContext';
import { useThemeContext } from '../context/ThemeContext';
import ProfileCard from '../components/ProfileCard';

export default function ProfileScreen({ navigation }) {
  const { profile } = useProfileContext();
  const { colors } = useThemeContext();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      <ProfileCard
        profile={profile}
        onEditPress={() => navigation.navigate('EditProfile')}
      />

      <TouchableOpacity
        style={[styles.backButton, { borderColor: colors.primary }]}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <Text style={[styles.backButtonText, { color: colors.primary }]}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 16,
  },
  backButton: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    marginTop: 8,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
