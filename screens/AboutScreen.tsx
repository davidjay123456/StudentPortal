import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>

      <Text style={styles.text}>
        This mobile application is developed by David Jay Ongcoy, and it is used to view the student portal. It uses a stylesheet, flexbox, navigation, and styling.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0a0a0a',
  },

  text: {
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 28,
  },
});