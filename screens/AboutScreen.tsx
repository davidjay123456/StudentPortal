import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>

      <Text style={styles.text}>
        The application shows how to use Flexbox for responsive layouts, StyleSheet for styling, and Stack Navigation for transitions between the Home, About, Contact, and Profile screens.
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