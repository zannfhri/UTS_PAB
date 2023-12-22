import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = (props) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const isValidEmail = (email) => {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(String(email).toLowerCase());
   };
   const navigation = useNavigation();

const handleLogin = () => {
   if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields', [{ text: 'OK' }]);
      return;
   }
   if (!isValidEmail(email)) {
      Alert.alert('Error', 'Isi nama pengguna dengan benar', [{ text: 'OK' }]);
      return;
   }
};

const handleSignUp = () => {
   navigation.navigate('Register');
};

return (
   <View style={styles.container}>
      <Text style={styles.title}>AmHealth</Text>
      <Text style={styles.subtitle}>Email</Text>
      <TextInput
      style={styles.input}
      onChangeText={text => setEmail(text)}
      value={email}
      placeholder="Masukkan email anda"
      />
      <Text style={styles.subtitle}>Kata-Sandi</Text>
      <TextInput
      style={styles.input}
      onChangeText={text => setPassword(text)}
      value={password}
      placeholder="Masukkan kata sandi Anda"
      secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
      <Text style={styles.signUpButtonText}>Belum punya akun?</Text>
      </TouchableOpacity>
   </View>
);
};

const styles = StyleSheet.create({
container: {
   flex: 1,
   backgroundColor: '#fff',
   paddingHorizontal: 32,
   paddingVertical: 128,
},
title: {
   fontSize: 32,
   color: '#111',
   marginBottom: 12,
},
subtitle: {
   fontSize: 18,
   color: '#111',
   marginBottom: 12,
},
input: {
   backgroundColor: '#eee',
   paddingHorizontal: 8,
   paddingVertical: 8,
   borderRadius: 4,
   marginBottom: 12,
},
button: {
   backgroundColor: '#342342',
   paddingHorizontal: 16,
   paddingVertical: 12,
   borderRadius: 4,
   marginBottom: 12,
},
buttonText: {
   fontSize: 18,
   color: '#fff',
   textAlign: 'center',
},
signUpButton: {
   borderRadius: 2,
   borderColor: '#342342',
   paddingHorizontal: 8,
   paddingVertical: 6,
},
signUpButtonText: {
   fontSize: 10,
   color: '#342342',
   textAlign: 'center',
},
});

export default LoginScreen;