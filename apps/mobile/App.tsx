import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const plans = [
  "Starter",
  "Growth",
  "Family",
  "Pay as you use"
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.eyebrow}>KiddieSpeech mobile shell</Text>
        <Text style={styles.title}>Speech practice that feels like play.</Text>
        <Text style={styles.copy}>
          This app shell is the starting point for the iOS and Android experience. It will host character sessions,
          parent controls, and multilingual practice flows.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>MVP modules</Text>
          <Text style={styles.listItem}>Voice and tap guided sessions</Text>
          <Text style={styles.listItem}>Parent-approved language switching</Text>
          <Text style={styles.listItem}>Character-safe speech quests</Text>
          <Text style={styles.listItem}>Session summaries and progress</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Pricing paths</Text>
          {plans.map((plan) => (
            <Text key={plan} style={styles.listItem}>
              {plan}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff7ef"
  },
  container: {
    padding: 24,
    gap: 16
  },
  eyebrow: {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: "#6b6b6b",
    marginTop: 12
  },
  title: {
    fontSize: 34,
    lineHeight: 38,
    fontWeight: "800",
    color: "#1a2428"
  },
  copy: {
    fontSize: 16,
    lineHeight: 25,
    color: "#526067"
  },
  card: {
    backgroundColor: "#fffdf9",
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(26,36,40,0.1)"
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
    color: "#1a2428"
  },
  listItem: {
    fontSize: 15,
    lineHeight: 24,
    color: "#526067"
  }
});

