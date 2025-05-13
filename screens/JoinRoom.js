import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const JoinRoomScreen = ({ navigation }) => {
  const [roomId, setRoomId] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Oda adı gir"
        style={styles.input}
        value={roomId}
        onChangeText={setRoomId}
      />
      <Button
        title="Sohbete Katıl"
        onPress={() => navigation.navigate("Chat", { roomId })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 12,
    borderRadius: 8,
  },
});

export default JoinRoomScreen;
