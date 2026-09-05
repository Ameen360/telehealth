import { Platform, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const SERVICES = [
  {
    emoji: '🩺',
    title: 'General consultation',
    body: 'Speak with a GP about symptoms, prescriptions, and referrals.',
  },
  {
    emoji: '🧠',
    title: 'Mental health',
    body: 'Confidential sessions with licensed therapists and counselors.',
  },
  {
    emoji: '🤱',
    title: 'Maternal & child health',
    body: 'Prenatal checkups, pediatric care, and family guidance.',
  },
  {
    emoji: '💊',
    title: 'Chronic care',
    body: 'Ongoing management for diabetes, hypertension, and more.',
  },
] as const;

export default function CareScreen() {
  const theme = useTheme();
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
  };

  const contentPlatformStyle = Platform.select({
    android: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
    },
    web: {
      paddingTop: Spacing.six,
      paddingBottom: Spacing.four,
    },
  });

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentInset={insets}
      contentContainerStyle={[styles.contentContainer, contentPlatformStyle]}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="subtitle">Care</ThemedText>
          <ThemedText themeColor="textSecondary">Choose how we can help today.</ThemedText>
        </ThemedView>

        <ThemedView style={styles.serviceList}>
          {SERVICES.map(service => (
            <ThemedView key={service.title} type="backgroundElement" style={styles.serviceCard}>
              <ThemedView type="backgroundSelected" style={styles.serviceIcon}>
                <ThemedText style={styles.serviceEmoji}>{service.emoji}</ThemedText>
              </ThemedView>
              <ThemedView style={styles.serviceCopy}>
                <ThemedText type="smallBold">{service.title}</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {service.body}
                </ThemedText>
              </ThemedView>
            </ThemedView>
          ))}
        </ThemedView>

        <ThemedView type="navy" style={styles.banner}>
          <ThemedText type="smallBold" themeColor="navyText">
            Not sure where to start?
          </ThemedText>
          <ThemedText type="small" themeColor="navyText" style={styles.bannerBody}>
            Our care team can point you to the right specialist.
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1,
    width: '100%',
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  titleContainer: {
    gap: Spacing.one,
    paddingTop: Spacing.four,
  },
  serviceList: {
    gap: Spacing.three,
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    borderRadius: Spacing.three,
    padding: Spacing.three,
  },
  serviceIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceEmoji: {
    fontSize: 20,
  },
  serviceCopy: {
    flex: 1,
    gap: Spacing.half,
  },
  banner: {
    borderRadius: Spacing.three,
    padding: Spacing.three,
    gap: Spacing.half,
    marginBottom: Spacing.four,
  },
  bannerBody: {
    opacity: 0.85,
  },
});
