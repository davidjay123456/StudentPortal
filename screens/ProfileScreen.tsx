import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/myphoto.jpg")}
        style={styles.image}
      />

      <Text style={styles.name}>David Jay Ongcoy</Text>

      <Text style={styles.info}>Student ID: C23-0610</Text>
      <Text style={styles.info}>Course: BS Information Technology</Text>
      <Text style={styles.info}>Year Level: 4th Year</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F6F8",
    padding: 20,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#0a0a0a",
    marginBottom: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#181818",
    marginBottom: 10,
  },

  info: {
    fontSize: 18,
    marginVertical: 5,
  },
});