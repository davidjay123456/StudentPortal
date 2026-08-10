import { StyleSheet, Text, View } from 'react-native';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>

      <Text style={styles.info}>Email</Text>
      <Text>stmichaelscollege@gmail.com</Text>

      <Text style={styles.info}>Phone</Text>
      <Text>0912-345-6789</Text>
      <Text>223-1614</Text>

      <Text style={styles.info}>Address</Text>
      <Text>Saint Michael's College</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0a0a0a',
    marginBottom: 25,
  },

  info: {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 18,
  },
});