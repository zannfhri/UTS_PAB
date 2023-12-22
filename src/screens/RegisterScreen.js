import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const RegisterScreen = (props) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [password, setPassword] = useState('');
   const navigation = useNavigation();

const isValidName = (name) => {
   return /^[A-Za-z\s]+$/.test(name);
};
const isValidEmail = (email) => {
   const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   return re.test(String(email).toLowerCase());
};
const isValidPhoneNumber = (phoneNumber) => {
   const re = /^[0-9]+$/;
   return re.test(phoneNumber);
};

const handleRegistration = () => {
   if (!email || !phoneNumber || !name || !password) {
      Alert.alert('Error', 'Please fill all fields', [{ text: 'OK' }]);
      return;
   }
   if (!isValidName(name)) {
      Alert.alert('Error', 'Nama pengguna tidak boleh mengandung angka', [{ text: 'OK' }]);
      return;
   }
   if (!isValidEmail(email)) {
      Alert.alert('Error', 'Alamat email tidak valid', [{ text: 'OK' }]);
      return;
   }
   if (!isValidPhoneNumber(phoneNumber)) {
      Alert.alert('Error', 'Nomor telepon harus berupa angka', [{ text: 'OK' }]);
      return;
   }
};

return (
   <View style={styles.container}>
      <Text style={styles.title}>AmHealth</Text>
      <Text style={styles.subtitle}>Nama</Text>
      <TextInput
      style={styles.input}
      onChangeText={text => setName(text)}
      value={name}
      placeholder="Masukkan nama Anda"
      />
      <Text style={styles.subtitle}>Nomor Telepon</Text>
      <TextInput
      style={styles.input}
      onChangeText={text => setPhoneNumber(text)}
      value={phoneNumber}
      placeholder="Masukkan nomor telepon Anda"
      />
      <Text style={styles.subtitle}>Email</Text>
      <TextInput
      style={styles.input}
      onChangeText={text => setEmail(text)}
      value={email}
      placeholder="Masukkan alamat email Anda"
      />
      <Text style={styles.subtitle}>Kata Sandi</Text>
      <TextInput
      style={styles.input}
      onChangeText={text => setPassword(text)}
      value={password}
      placeholder="Masukkan kata sandi Anda"
      secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
      <Text style={styles.buttonText}>Daftar</Text>
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
   },
   buttonText: {
      fontSize: 18,
      color: '#fff',
      textAlign: 'center',
   },
});

export default RegisterScreen;