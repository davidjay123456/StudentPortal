import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegistrationScreen({ navigation }: any) {
  const [fullName, setFullName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [course, setCourse] = useState('');
  const [yearLevel, setYearLevel] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const saveStudent = async () => {
    if (
      !fullName ||
      !studentId ||
      !course ||
      !yearLevel ||
      !email ||
      !contact
    ) {
      Alert.alert('Missing Information', 'Please fill in all fields.');
      return;
    }

    const student = {
      fullName,
      studentId,
      course,
      yearLevel,
      email,
      contact,
      profilePicture: 'myphoto.jpg',
    };

    await AsyncStorage.setItem(
      'studentData',
      JSON.stringify(student)
    );

    Alert.alert('Success', 'Student information saved!');
    navigation.navigate('SavedStudent');
  };

  const clearForm = () => {
    setFullName('');
    setStudentId('');
    setCourse('');
    setYearLevel('');
    setEmail('');
    setContact('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Registration</Text>

      <Image
        source={require('../assets/myphoto.jpg')}
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="Student ID"
        value={studentId}
        onChangeText={setStudentId}
      />

      <TextInput
        style={styles.input}
        placeholder="Course"
        value={course}
        onChangeText={setCourse}
      />

      <TextInput
        style={styles.input}
        placeholder="Year Level"
        value={yearLevel}
        onChangeText={setYearLevel}
      />

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={contact}
        onChangeText={setContact}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.saveButton} onPress={saveStudent}>
        <Text style={styles.buttonText}>Save Student</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.clearButton} onPress={clearForm}>
        <Text style={styles.buttonText}>Clear</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#F4F6F8',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },

  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },

  saveButton: {
    width: '100%',
    backgroundColor: '#1E293B',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  clearButton: {
    width: '100%',
    backgroundColor: '#777',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});