import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SavedStudentScreen({ navigation }: any) {
  const [student, setStudent] = useState<any>(null);

  const loadStudent = async () => {
    const data = await AsyncStorage.getItem('studentData');

    if (data) {
      setStudent(JSON.parse(data));
    }
  };

  useEffect(() => {
    loadStudent();
  }, []);

  const deleteStudent = async () => {
    await AsyncStorage.removeItem('studentData');
    setStudent(null);

    Alert.alert('Deleted', 'Student information has been deleted.');
  };

  if (!student) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          No student information saved.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Registration')}
        >
          <Text style={styles.buttonText}>Register Student</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/myphoto.jpg')}
        style={styles.image}
      />

      <Text style={styles.name}>{student.fullName}</Text>

      <Text style={styles.info}>
        Student ID: {student.studentId}
      </Text>

      <Text style={styles.info}>
        Course: {student.course}
      </Text>

      <Text style={styles.info}>
        Year Level: {student.yearLevel}
      </Text>

      <Text style={styles.info}>
        Email: {student.email}
      </Text>

      <Text style={styles.info}>
        Contact: {student.contact}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Registration')}
      >
        <Text style={styles.buttonText}>Edit Information</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={deleteStudent}
      >
        <Text style={styles.buttonText}>Delete Student</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F4F6F8',
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  emptyText: {
    fontSize: 18,
    marginBottom: 20,
  },

  image: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  info: {
    fontSize: 17,
    marginVertical: 5,
  },

  button: {
    width: '90%',
    backgroundColor: '#1E293B',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },

  deleteButton: {
    width: '90%',
    backgroundColor: '#B91C1C',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});