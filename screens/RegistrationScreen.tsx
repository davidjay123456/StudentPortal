import React, { useEffect, useState } from 'react';
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
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegistrationScreen({ navigation, route }: any) {
  const [fullName, setFullName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [course, setCourse] = useState('');
  const [yearLevel, setYearLevel] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [studentImage, setStudentImage] = useState<string | null>(null);

  const editingStudent = route?.params?.studentData ?? null;

  useEffect(() => {
    if (editingStudent) {
      setFullName(editingStudent.fullName || '');
      setStudentId(editingStudent.studentId || '');
      setCourse(editingStudent.course || '');
      setYearLevel(editingStudent.yearLevel || '');
      setEmail(editingStudent.email || '');
      setContact(editingStudent.contact || '');
      setStudentImage(editingStudent.studentImage || null);
    }
  }, [editingStudent]);

  const pickImage = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        'Permission Required',
        'Please allow access to your photos.'
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setStudentImage(result.assets[0].uri);
    }
  };

  const saveStudent = async () => {
    if (
      !fullName.trim() ||
      !studentId.trim() ||
      !course.trim() ||
      !yearLevel.trim() ||
      !email.trim() ||
      !contact.trim()
    ) {
      Alert.alert(
        'Incomplete Form',
        'Please fill in all the required information.'
      );
      return;
    }

    if (!studentImage) {
      Alert.alert(
        'Missing Photo',
        'Please select a student photo before saving.'
      );
      return;
    }

    const studentData = {
      fullName: fullName.trim(),
      studentId: studentId.trim(),
      course: course.trim(),
      yearLevel: yearLevel.trim(),
      email: email.trim(),
      contact: contact.trim(),
      studentImage,
    };

    try {
      await AsyncStorage.setItem(
        'studentData',
        JSON.stringify(studentData)
      );

      Alert.alert(
        editingStudent
          ? 'Update Successful'
          : 'Registration Successful',
        editingStudent
          ? 'Student information has been updated successfully.'
          : 'Student has been registered successfully.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('SavedStudent'),
          },
        ]
      );
    } catch (error) {
      Alert.alert(
        'Error',
        'Unable to save student information.'
      );
    }
  };

  const clearForm = () => {
    setFullName('');
    setStudentId('');
    setCourse('');
    setYearLevel('');
    setEmail('');
    setContact('');
    setStudentImage(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        {editingStudent
          ? 'Edit Student Information'
          : 'Student Registration'}
      </Text>

      {studentImage ? (
        <Image
          source={{ uri: studentImage }}
          style={styles.image}
        />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>
            No Photo
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.imageButton}
        onPress={pickImage}
      >
        <Text style={styles.buttonText}>
          {editingStudent
            ? 'Change Student Photo'
            : 'Choose Student Photo'}
        </Text>
      </TouchableOpacity>

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
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={contact}
        onChangeText={setContact}
        keyboardType="phone-pad"
      />

      <TouchableOpacity
        style={styles.saveButton}
        onPress={saveStudent}
      >
        <Text style={styles.buttonText}>
          {editingStudent
            ? 'Update Student'
            : 'Register Student'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.clearButton}
        onPress={clearForm}
      >
        <Text style={styles.buttonText}>
          Clear
        </Text>
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
    color: '#0A0A0A',
    textAlign: 'center',
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 15,
  },

  imagePlaceholder: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  placeholderText: {
    color: '#666',
  },

  imageButton: {
    backgroundColor: '#1E293B',
    padding: 12,
    borderRadius: 8,
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
    backgroundColor: '#777777',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});