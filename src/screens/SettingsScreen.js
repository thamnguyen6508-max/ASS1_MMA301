import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemeContext } from '../context/ThemeContext';
import ThemeToggleSwitch from '../components/ThemeToggleSwitch';

export default function SettingsScreen({ navigation }) {
  const { colors, isDark } = useThemeContext();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      <View style={styles.sectionHeader}>
        <Ionicons name="color-palette-outline" size={20} color={colors.text} style={styles.sectionIcon} />
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Appearance</Text>
      </View>

      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.cardLabel, { color: colors.textSecondary }]}>
          Current Mode: {isDark ? 'Dark' : 'Light'}
        </Text>
        <ThemeToggleSwitch />
      </View>

      <View style={styles.sectionHeader}>
        <Ionicons name="information-circle-outline" size={20} color={colors.text} style={styles.sectionIcon} />
        <Text style={[styles.sectionTitle, { color: colors.text }]}>App Information</Text>
      </View>

      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.infoRow, { color: colors.text }]}>Subject: Multiplatform Mobile App Dev</Text>
        <Text style={[styles.infoRow, { color: colors.text }]}>Assignment: 1</Text>
        <Text style={[styles.infoRow, { color: colors.textSecondary, marginTop: 4 }]}>
          Tech Stack: React Native, Context API, Formik, Yup
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.backButton, { borderColor: colors.border }]}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <Text style={[styles.backButtonText, { color: colors.textSecondary }]}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20 },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 10,
  },
  sectionIcon: { marginRight: 8 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    gap: 8,
    marginBottom: 16,
  },
  cardLabel: { fontSize: 14, marginBottom: 8 },
  infoRow: { fontSize: 14, lineHeight: 22 },
  backButton: {
    marginTop: 8,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  backButtonText: { fontSize: 16, fontWeight: '600' },
});
