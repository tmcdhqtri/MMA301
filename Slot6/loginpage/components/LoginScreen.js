import { ScrollView, Text, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';
export default function LoginScreen() {
    const [email, onChangeEmail,password,onChangePassword] = useState('');
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'Email'}
      />
      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={onChangePassword}
        secureTextEntry={true}
        placeholder={'Password'}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 30,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    marginHorizontal: 8, // Adjust horizontal spacing as needed
    marginVertical: 12,   // Adjust vertical spacing between inputs
    borderWidth: 1,
    padding: 10,
    fontSize: 18,        // Adjust font size as needed
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
  }
});
