import React, { useState } from "react";
import { colors } from "../config/constants";
import { Text, View, SafeAreaView, StyleSheet, TextInput, Alert } from "react-native";
import Button from "../components/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase"; // Firebase bağlantı dosyan
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace("Chat"); // Başarılı girişten sonra Chat ekranına git
    } catch (error) {
      Alert.alert("Giriş Başarısız", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Welcome Back</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <View style={styles.buttonsContainer}>
            <Button
              title="Sign Up"
              varient="secondary"
              onPress={() => navigation.navigate("Signup")}
            />
            <Button title="Login" varient="primary" onPress={handleLogin} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lila,
  },
  contentContainer: {
    padding: 20,
    marginTop: 32,
  },
  title: {
    fontSize: 24,
    color: "black",
    fontWeight: "800",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "white",
    fontSize: 15,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
  },
});

export default Login;
