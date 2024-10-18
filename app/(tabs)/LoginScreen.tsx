// LoginScreen.tsx
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
// import { supabase } from './supabaseClient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LittleLemonHeader from '@/components/Header';
import { ThemedText } from '@/components/ThemedText';
import NoteWiseHeader from '@/components/Header';


type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

//   const handleSignIn = async () => {
//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });
//     if (error) {
//       Alert.alert('Error', error.message);
//     } else {
//       navigation.navigate('Home');
//     }
//   };

//   const handleSignUp = async () => {
//     const { error } = await supabase.auth.signUp({
//       email,
//       password,
//     });
//     if (error) {
//       Alert.alert('Error', error.message);
//     } else {
//       Alert.alert(
//         'Success',
//         'Please check your email to confirm your account.'
//       );
//     }
//   };

  return (
    <>
        <NoteWiseHeader />
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
        {/* <Text>Sign In</Text> */}
        
        <ThemedText type="title" style={styles.title_style}>Sign In</ThemedText>
        <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
        />
        <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
            textContentType="password"
        />
        <Button title="Sign In" />
        <Button title="Sign Up" />
        </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  title_style: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    padding: 20,
    alignSelf: 'center',
  }
});
