import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../config/constants";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim() === "") return;

        const newMessage = {
            id: Date.now().toString(),
            text: input,
            sender: "user", // Sabit kullanıcı, örnek için
        };

        setMessages(prev => [newMessage, ...prev]);
        setInput("");
    };

    const renderItem = ({ item }) => (
        <View style={[styles.messageContainer, item.sender === "user" ? styles.myMessage : styles.theirMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
    );

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={90}
        >
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                inverted
                contentContainerStyle={{ padding: 16 }}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    value={input}
                    onChangeText={setInput}
                    placeholder="Mesaj yaz..."
                    style={styles.input}
                />
                <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                    <Ionicons name="send" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    messageContainer: {
        maxWidth: "70%",
        padding: 10,
        borderRadius: 10,
        marginVertical: 4,
    },
    myMessage: {
        backgroundColor: colors.pink,
        alignSelf: "flex-end",
    },
    theirMessage: {
        backgroundColor: "#E2E2E2",
        alignSelf: "flex-start",
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderTopWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "white",
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#ccc',
        borderRadius: 20,
        marginRight: 8,
    },
    sendButton: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 20,
    },
});

export default Chat;
