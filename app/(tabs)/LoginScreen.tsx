// LoginScreen.tsx
import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    Text,
    Alert,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
// import { supabase } from './supabaseClient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LittleLemonHeader from '@/components/Header';
import { ThemedText } from '@/components/ThemedText';
import NoteWiseHeader from '@/components/Header';
import NoteWiseFooter from '@/components/Footer';

import { supabase } from './supabaseClient';


type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      Alert.alert('Error', error.message);
    } else {
      navigation.navigate('Home');
    }
  };

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      Alert.alert('Error', error.message);
    } else {
      Alert.alert(
        'Success',
        'Please check your email to confirm your account.'
      );
    }
  };

  return (
    <>
        <NoteWiseHeader />
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
        
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
        <>
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.button_text}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.button_text}>Sign Up</Text>
            </TouchableOpacity>
        </>
        
        </KeyboardAvoidingView>

        <NoteWiseFooter />
        
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#44465c',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  title_style: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    padding: 20,
    alignSelf: 'center',
    color: '#f0f0f0',
  },
  // create a syle for the signup and signin buttons that have blue background and white text
  button_text: {
    color: '#fff',              // White text color
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50', // Green background color
    padding: 10,                // Padding inside the button
    marginVertical: 10,         // Space between buttons
    borderRadius: 5,            // Rounded corners
    alignItems: 'center',       // Center the text inside the button
    width: '75%',              // Full width
    alignSelf: 'center',       // Center
  },
});
