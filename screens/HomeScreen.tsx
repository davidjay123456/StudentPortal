import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >

        <Text style={styles.title}>Student Portal</Text>
        <Text style={styles.subtitle}>Choose a page below</Text>

        <View style={styles.cardContainer}>

          {/* About */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('About')}
          >
            <Text style={styles.cardTitle}>About</Text>
            <Text style={styles.cardText}>
              Learn more about the Student Portal.
            </Text>
          </TouchableOpacity>

          {/* Contact */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Contact')}
          >
            <Text style={styles.cardTitle}>Contact</Text>
            <Text style={styles.cardText}>
              View our contact information.
            </Text>
          </TouchableOpacity>

          {/* Profile */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.cardTitle}>Profile</Text>
            <Text style={styles.cardText}>
              View your student profile.
            </Text>
          </TouchableOpacity>

          {/* Registration */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Registration')}
          >
            <Text style={styles.cardTitle}>Registration</Text>
            <Text style={styles.cardText}>
              Register a new student.
            </Text>
          </TouchableOpacity>

          {/* Saved Student */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('SavedStudent')}
          >
            <Text style={styles.cardTitle}>Saved Student</Text>
            <Text style={styles.cardText}>
              View saved student information.
            </Text>
          </TouchableOpacity>

        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>
            © 2026 Student Portal
          </Text>

          <Text style={styles.footerText}>
            Developed by David Jay Ongcoy
          </Text>
        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
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
    width: '100%',
    backgroundColor: '#1E293B',
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 5,
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