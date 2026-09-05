import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Platform, Pressable, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, Brand, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const FEATURES = [
  {
    emoji: '🩺',
    title: 'Licensed doctors',
    body: 'Every consultation is with a verified, licensed physician.',
  },
  {
    emoji: '🕐',
    title: 'Available 24/7',
    body: 'Get seen any time, day or night — no waiting rooms.',
  },
  {
    emoji: '🔒',
    title: 'Secure & private',
    body: 'Your health data and calls are encrypted end to end.',
  },
] as const;

export default function HomeScreen() {
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
        <ThemedView style={styles.header}>
          <Image
            source={require('@/assets/images/brand/wordmark.png')}
            style={styles.wordmark}
            contentFit="contain"
          />
        </ThemedView>

        <ThemedView type="navy" style={styles.hero}>
          <ThemedText type="subtitle" themeColor="navyText" style={styles.heroTitle}>
            Secure telehealth for Africa
          </ThemedText>
          <ThemedText themeColor="navyText" style={styles.heroBody}>
            Talk to a licensed doctor in minutes, from anywhere in Nigeria and across Africa.
          </ThemedText>
          <Link href="/explore" asChild>
            <Pressable style={({ pressed }) => [styles.cta, pressed && styles.pressed]}>
              <ThemedText type="smallBold" style={styles.ctaLabel}>
                Book a consultation
              </ThemedText>
            </Pressable>
          </Link>
        </ThemedView>

        <ThemedView style={styles.featureList}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Why Lakmed
          </ThemedText>
          {FEATURES.map(feature => (
            <ThemedView key={feature.title} type="backgroundElement" style={styles.featureCard}>
              <ThemedView type="backgroundSelected" style={styles.featureIcon}>
                <ThemedText style={styles.featureEmoji}>{feature.emoji}</ThemedText>
              </ThemedView>
              <ThemedView style={styles.featureCopy}>
                <ThemedText type="smallBold">{feature.title}</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {feature.body}
                </ThemedText>
              </ThemedView>
            </ThemedView>
          ))}
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
    gap: Spacing.five,
  },
  header: {
    paddingTop: Spacing.four,
    alignItems: 'flex-start',
  },
  wordmark: {
    width: 148,
    height: 41,
  },
  hero: {
    borderRadius: Spacing.four,
    padding: Spacing.four,
    gap: Spacing.two,
  },
  heroTitle: {
    fontSize: 26,
    lineHeight: 32,
  },
  heroBody: {
    opacity: 0.85,
  },
  cta: {
    marginTop: Spacing.two,
    alignSelf: 'flex-start',
    backgroundColor: Brand.teal,
    borderRadius: Spacing.five,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
  },
  ctaLabel: {
    color: Brand.navy,
  },
  pressed: {
    opacity: 0.8,
  },
  featureList: {
    gap: Spacing.three,
    paddingBottom: Spacing.four,
  },
  sectionTitle: {
    fontSize: 20,
    lineHeight: 26,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    borderRadius: Spacing.three,
    padding: Spacing.three,
  },
  featureIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureEmoji: {
    fontSize: 20,
  },
  featureCopy: {
    flex: 1,
    gap: Spacing.half,
  },
});
