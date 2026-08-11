import React, { useCallback, useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function SavedStudentScreen({ navigation }: any) {
  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const loadStudent = async () => {
    try {
      setLoading(true);

      const data = await AsyncStorage.getItem('studentData');

      if (data) {
        setStudent(JSON.parse(data));
      } else {
        setStudent(null);
      }
    } catch (error) {
      Alert.alert(
        'Error',
        'Unable to load student information.'
      );
      setStudent(null);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadStudent();
    }, [])
  );

  const editStudent = () => {
    if (!student) {
      Alert.alert(
        'No Information',
        'There is no student information to edit.'
      );
      return;
    }

    navigation.navigate('Registration', {
      editMode: true,
      studentData: student,
    });
  };

  const deleteStudent = () => {
    if (!student) {
      Alert.alert(
        'No Information',
        'There is no student information to delete.'
      );
      return;
    }

    Alert.alert(
      'Delete Information',
      'Are you sure you want to delete this student information?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('studentData');

              const checkData =
                await AsyncStorage.getItem('studentData');

              if (checkData === null) {
                setStudent(null);

                Alert.alert(
                  'Deleted',
                  'Student information has been deleted successfully.',
                  [
                    {
                      text: 'OK',
                      onPress: () => {
                        navigation.navigate('Home');
                      },
                    },
                  ]
                );
              } else {
                Alert.alert(
                  'Delete Failed',
                  'The student information could not be deleted.'
                );
              }
            } catch (error) {
              Alert.alert(
                'Delete Failed',
                'Unable to delete student information.'
              );
            }
          },
        },
      ]
    );
  };

  if (loading) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>
          Loading...
        </Text>
      </View>
    );
  }

  if (!student) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>
          No Saved Student
        </Text>

        <Text style={styles.emptyText}>
          There is currently no student information saved.
        </Text>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() =>
            navigation.navigate('Registration')
          }
        >
          <Text style={styles.buttonText}>
            Register Student
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Saved Student
      </Text>

      {student.studentImage ? (
        <Image
          source={{ uri: student.studentImage }}
          style={styles.image}
        />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>
            No Photo
          </Text>
        </View>
      )}

      <Text style={styles.name}>
        {student.fullName}
      </Text>

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
        style={styles.editButton}
        onPress={editStudent}
      >
        <Text style={styles.buttonText}>
          Edit Information
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={deleteStudent}
      >
        <Text style={styles.buttonText}>
          Delete Information
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F4F6F8',
    padding: 20,
    paddingTop: 100,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0A0A0A',
    marginBottom: 25,
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },

  imagePlaceholder: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  placeholderText: {
    color: '#666',
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  info: {
    fontSize: 16,
    marginVertical: 5,
  },

  editButton: {
    width: '95%',
    backgroundColor: '#1E293B',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },

  deleteButton: {
    width: '95%',
    backgroundColor: '#B91C1C',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  registerButton: {
    backgroundColor: '#1E293B',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6F8',
    padding: 20,
  },

  emptyTitle: {
    fontSize: 26,
    fontWeight: 'bold',
  },

  emptyText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    color: '#666',
  },
});