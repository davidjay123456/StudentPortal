import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Portal</Text>
      <Text style={styles.subtitle}>Choose a page below</Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.cardTitle}>About</Text>
          <Text style={styles.cardText}>Learn more about the Student Portal.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Contact')}
        >
          <Text style={styles.cardTitle}>Contact</Text>
          <Text style={styles.cardText}>View our contact information.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.cardTitle}>Profile</Text>
          <Text style={styles.cardText}>View your student profile.</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>© 2026 Student Portal</Text>
        <Text style={styles.footerText}>
          Developed by David Jay Ongcoy
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    alignItems: 'center',
    paddingTop: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0A0A0A',
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 25,
  },

  cardContainer: {
    width: '90%',
  },

  card: {
    width: '100%',
    height: 140,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 4,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#050505',
  },

  cardText: {
    marginTop: 8,
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
  },

  footer: {
    marginTop: 'auto',
    width: '100%',
    backgroundColor: '#1E293B',
    paddingVertical: 15,
    alignItems: 'center',
  },

  footerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  footerText: {
    color: '#CBD5E1',
    fontSize: 13,
    marginTop: 5,
  },
});